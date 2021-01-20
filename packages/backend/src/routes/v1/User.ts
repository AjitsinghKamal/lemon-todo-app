import { Router } from 'express';

import { getAuthSchema } from 'utils/validateUserRequest';
import validate from 'middlewares/validate';
import {
	shouldCreateUser,
	shouldLoginUser,
} from 'entities/user/UserAuthController';

const router = Router();

router.get('/me');

router.post('/user', getAuthSchema('signup'), validate, shouldCreateUser);

router.post('/me', getAuthSchema('signin'), validate, shouldLoginUser);

export default router;
