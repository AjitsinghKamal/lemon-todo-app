import { Router } from 'express';

import {
	shouldUpdateList,
	shouldAddList,
	shouldDeleteList,
	shouldGetList,
} from 'entities/task-list/TaskListController';

const router = Router();

router.get('/lists', shouldGetList);

router.post('/list', shouldAddList);

router.put('/list/:id', shouldUpdateList);

router.delete('/list/:id', shouldDeleteList);

export default router;
