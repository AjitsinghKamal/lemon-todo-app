import { checkSchema } from 'express-validator';

const signinSchema = {
	password: {
		isEmpty: {
			errorMessage: 'You need your password to login.',
		},
		isLength: {
			errorMessage:
				'You typed a really short password! Please use at-least 5 characters.',
			options: { min: 5 },
		},
	},
	email: {
		isEmpty: {
			errorMessage: 'You need your email to login.',
		},
		isEmail: {
			errorMessage: 'Email looks bad. Please try another one!',
		},
	},
};

const newUserSchema = {
	password: {
		notEmpty: {
			errorMessage: 'Please create a password.',
		},
		isLength: {
			errorMessage:
				'You chose a really short password! Please use at-least 5 characters.',
			options: { min: 5 },
		},
	},
	confirmPassword: {
		custom: {
			options: (value, { req }) => {
				if (value !== req.body.password) {
					throw new Error(`Your passwords didn't match`);
				}
				return true;
			},
		},
		notEmpty: {
			errorMessage: 'Please enter confirm password',
		},
	},
	username: {
		isAlphanumeric: {
			negated: true,
		},
		notEmpty: {
			errorMessage: 'Please choose a username',
		},
	},
	email: {
		notEmpty: {
			errorMessage: 'Please enter your email',
		},
		isEmail: {
			errorMessage: 'Email looks bad. Please try another one!',
		},
	},
};

export const getAuthSchema = (type) => {
	switch (type) {
		case 'signin':
			return checkSchema(signinSchema);
		case 'signup':
			return checkSchema(newUserSchema);
	}
};
