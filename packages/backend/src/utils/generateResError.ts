export function makeError(err, code: number = -1) {
	return {
		err,
		code,
	};
}
