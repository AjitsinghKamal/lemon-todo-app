import { useState, useCallback, useMemo, useEffect } from 'react';
import httpFetch, { FetchResponse } from 'apis/fetch';

interface FetchHookProvider<T> {
	responseState: T;
	requestState: string;
	dispatchFetch: () => void;
}

export const REQUEST_STATE = {
	IDLE: 'idle',
	PENDING: 'pending',
	ERROR: 'error',
	SUCCESS: 'success',
};

export default function useFetch<T>(...args: any[]): FetchHookProvider<T> {
	const [url, method, ...rest] = args;

	const { options, deps } = useMemo(() => {
		if (rest.length) {
			const hasOptions = rest[0] && !Array.isArray(rest[0]);
			const possibleDeps = hasOptions ? rest[1] : rest[0];
			return Object.defineProperties(
				{},
				{
					options: {
						value: hasOptions ? rest[0] : {},
					},
					deps: {
						value: !Array.isArray(possibleDeps) ? possibleDeps : [],
					},
				}
			);
		}
		return { options: {}, deps: [] };
	}, [rest]);

	const [responseState, updateResponseState] = useState<T>({} as T);
	const [requestState, updateRequestState] = useState(REQUEST_STATE.IDLE);

	const shouldFetch = useCallback(async () => {
		try {
			updateRequestState(REQUEST_STATE.PENDING);
			const data = await httpFetch(url, { method, ...options });
			updateRequestState(REQUEST_STATE.SUCCESS);
			updateResponseState(data);
		} catch (e) {
			updateRequestState(REQUEST_STATE.ERROR);
			console.log(e);
		}
	}, [url, method, options]);

	const dispatchFetch = useCallback(() => {
		shouldFetch();
	}, [shouldFetch]);

	useEffect(() => {
		shouldFetch();
		// eslint-disable-next-line
	}, deps);

	return { responseState, requestState, dispatchFetch };
}
