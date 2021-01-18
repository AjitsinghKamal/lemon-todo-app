import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import {
	shouldUpdateList,
	shouldAddList,
	shouldDeleteList,
} from '../../entities/task-list/TaskListController';

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.get('/lists', async (req: Request, res: Response) => {
	const users = [];
	return res.status(OK).json({ users });
});

router.post('/list', async (req: Request, res: Response, next) => {
	try {
		const data = await shouldAddList(req);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
});

router.put('/list/:id', async (req: Request, res: Response, next) => {
	try {
		const data = await shouldUpdateList(req);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
});

router.delete('/list/:id', async (req: Request, res: Response, next) => {
	try {
		const data = await shouldDeleteList(req);
		return res.status(OK).json({ data });
	} catch (e) {
		next(e);
	}
});

export default router;
