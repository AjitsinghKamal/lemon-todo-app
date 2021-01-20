import { Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import bcrypt from 'bcryptjs';

import { getUser, addUser } from './UserAuthService';
import { KEY } from '../../configs/index';
import { makeJwt } from '../../utils/generateJwt';
import { makeError } from '../../utils/generateResError';
import { USER_EXISTS, USER_LOGIN_FAIL } from './constants';

const { OK, CONFLICT, UNAUTHORIZED } = StatusCodes;

export async function shouldCreateUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { email, password, username } = req.body;
		const existingDocument = await getUser({ email });
		if (existingDocument) {
			return res.status(CONFLICT).json(makeError(USER_EXISTS));
		}

		const salt = await bcrypt.genSalt(10);
		const secret = await bcrypt.hash(password, salt);
		const id = await addUser({
			username,
			email,
			secret,
		});
		const token = makeJwt({ id }, KEY);
		return res.status(OK).json({
			data: { token, username, email },
		});
	} catch (e) {
		console.log('ss', e);
		next(e);
	}
}

export async function shouldLoginUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { _id, username, email, password } = await getUser({
			email: req.body.email,
		});
		const isPasswordValid = bcrypt.compare(req.body.password, password);
		if (!isPasswordValid) {
			return res.status(UNAUTHORIZED).json(makeError(USER_LOGIN_FAIL));
		}
		const token = makeJwt({ id: _id }, KEY);
		return res.status(OK).json({
			data: { token, username, email },
		});
	} catch (e) {
		next(e);
	}
}
