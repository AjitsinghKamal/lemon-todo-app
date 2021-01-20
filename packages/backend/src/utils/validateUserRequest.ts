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
			bail: true,
		},
	},
};

const newUserSchema = {
	password: {
		isEmpty: {
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
		isEmpty: {
			errorMessage: 'Please enter confirm password',
		},
	},
	username: {
		isAlphanumeric: {
			negated: true,
		},
		isEmpty: {
			errorMessage: 'Please choose a username',
		},
	},
	email: {
		isEmpty: {
			errorMessage: 'Please enter your email',
		},
		isValid: {
			errorMessage: 'Email looks bad. Please try another one!',
		},
		isEmail: {
			bail: true,
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
