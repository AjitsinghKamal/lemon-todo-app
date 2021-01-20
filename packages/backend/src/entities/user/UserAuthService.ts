import { DB } from '../index';

export async function getUser(query, projection = {}) {
	try {
		const data = await DB.findOne(query, { projection });
		return data;
	} catch (e) {
		throw Error(e);
	}
}

export async function addUser(query) {
	try {
		const { insertedId } = await DB.insertOne(query);
		return insertedId;
	} catch (e) {
		throw Error(e);
	}
}
