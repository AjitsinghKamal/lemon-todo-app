import dotenv from 'dotenv';
dotenv.config();

function getDbUrl() {
	try {
		return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@${process.env.DB_NAME}?retryWrites=true&w=majority`;
	} catch (e) {
		console.log(e);
	}
}

export const PORT = process.env.PORT || 8000;
export const DB_URL = getDbUrl();
export const KEY = process.env.SECRET;
