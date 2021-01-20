import jwt from 'jsonwebtoken';

export function makeJwt(payload, KEY, expiresIn?: '48hr') {
	const token = jwt.sign(payload, KEY, {
		expiresIn,
	});
	return token;
}
