import { DB } from '../index';

export async function getList(doc) {
	try {
		const { ops } = await DB.insertOne(doc);
		return ops;
	} catch (e) {
		throw Error('Error while adding list');
	}
}

export async function createList(doc) {
	try {
		const { ops } = await DB.insertOne(doc);
		return ops;
	} catch (e) {
		throw Error('Error while adding list');
	}
}

export async function update(query, doc) {
	try {
		const document = await DB.findOneAndUpdate({ _id: query }, doc, {
			returnOriginal: false,
		});
		return document;
	} catch (e) {
		throw Error('Error while adding list');
	}
}

export async function removeList(query) {
	try {
		const status = await DB.deleteOne({ _id: query });
		return status;
	} catch (e) {
		throw Error('Error while adding list');
	}
}
