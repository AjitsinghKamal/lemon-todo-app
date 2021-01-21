export type FetchMethod = {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
};

export type FetchResponse<K extends string, P> = { [T in K]: P };

export type FetchOtherOptions = FetchMethod & FetchResponse<string, any>;

const ProxyHandler = {
	set(target: any, prop: string, val: any) {
		if (!val) return false;
		if (prop === 'headers') {
			target.headers = Object.assign(
				{
					'Content-Type': 'application/json',
				},
				val
			);
		} else {
			target[prop] = val;
		}
		return true;
	},
};

export default async function httpFetch(
	url: string,
	options: FetchOtherOptions
) {
	const fetchOptions = new Proxy({}, ProxyHandler);

	Object.keys(options).forEach((fetchProps) => {
		fetchOptions[fetchProps] = options[fetchProps];
	});

	const res: Response = await fetch(url, fetchOptions);
	if (res.status === 500) {
		throw new Error('Server error');
	} else {
		const parsed = await res.json();
		return parsed;
	}
}
