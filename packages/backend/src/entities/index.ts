import MongoClient, { Collection, Db, MongoCallback } from 'mongodb';

let client;
let DB: Collection;

async function connectDb(url) {
	try {
		client = await MongoClient.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		DB = client.db().collection('default');
		return true;
	} catch (e) {
		console.error(e);
	}
}

export { connectDb, DB };
