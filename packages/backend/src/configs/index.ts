import dotenv from 'dotenv';
dotenv.config();

const Config = {
	PORT: process.env.PORT || 8000,
};

export default Config;
