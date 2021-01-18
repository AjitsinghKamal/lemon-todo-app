import { createList, update, removeList } from './TaskListService';
import { Request } from 'express';

export async function shouldGetList(req: Request) {
	try {
		const data = await createList(req.body);
		return data;
	} catch (e) {
		throw new Error(e);
	}
}

export async function shouldAddList(req: Request) {
	try {
		const data = await createList(req.body);
		return data;
	} catch (e) {
		throw new Error(e);
	}
}

export async function shouldUpdateList(req: Request) {
	try {
		const data = await update(req.params.id, req.body);
		return data;
	} catch (e) {
		throw new Error(e);
	}
}

export async function shouldDeleteList(req: Request) {
	try {
		const data = await removeList(req.params.id);
		return data;
	} catch (e) {
		throw new Error(e);
	}
}
