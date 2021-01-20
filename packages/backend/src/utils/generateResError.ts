export function makeError(msg, code: number = -1) {
	return {
		status: 'error',
		msg,
		code,
	};
}
