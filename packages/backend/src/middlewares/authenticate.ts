import jwt from 'jsonwebtoken';
import StatusCodes from 'http-status-codes';

import { KEY } from 'configs';

import { makeError } from 'utils/generateResError';
import { USER_INVALID } from 'entities/user/constants';

export default function (req, res, next) {
	const token = req.header('token');
	if (!token)
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json(makeError(USER_INVALID, StatusCodes.UNAUTHORIZED));

	try {
		const decoded = jwt.verify(token, KEY);
		req.user = decoded.user;
		next();
	} catch (e) {
		res.status(StatusCodes.SERVICE_UNAVAILABLE).send(
			makeError(USER_INVALID, StatusCodes.SERVICE_UNAVAILABLE)
		);
	}
}
