import StatusCodes from 'http-status-codes';
import { validationResult } from 'express-validator';

export default function validate(req, res, next) {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const errorList = errors.array().map((err) => ({ [err.param]: err.msg }));
	return next({
		status: StatusCodes.UNPROCESSABLE_ENTITY,
		errorList,
	});
}
