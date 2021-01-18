import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.get('/user', async (req: Request, res: Response) => {
	const users = [];
	return res.status(OK).json({ users });
});

export default router;
