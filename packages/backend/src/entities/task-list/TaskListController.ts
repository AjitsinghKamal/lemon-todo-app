import { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

import { createList, update, removeList } from './TaskListService';

const { OK } = StatusCodes;

export async function shouldGetList(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const data = await createList(req.body);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
}

export async function shouldAddList(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const data = await createList(req.body);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
}

export async function shouldUpdateList(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const data = await update(req.params.id, req.body);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
}

export async function shouldDeleteList(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const data = await removeList(req.params.id);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
}
