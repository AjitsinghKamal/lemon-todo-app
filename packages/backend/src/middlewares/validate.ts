import StatusCodes from 'http-status-codes';
import { validationResult } from 'express-validator';

export default function validate(req, res, next) {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const errorList = errors
		.array({ onlyFirstError: true })
		.map((err) => ({ [err.param]: err.msg }));
	next({
		code: 422,
		status: 'error',
		message: errorList,
	});
}
