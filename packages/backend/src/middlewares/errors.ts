import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

interface HttpError extends Error {
	code: number;
	status?: string;
}
export default function errorHandler(
	err: HttpError,
	req: Request,
	res: Response
) {
	console.log('s', err, res);
	return res.status(err.code).json({
		statusCode: err.code || StatusCodes.SERVICE_UNAVAILABLE,
		status: err.status || 'error',
		message: err.message,
	});
}
