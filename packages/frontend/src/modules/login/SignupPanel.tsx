/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState, useCallback } from 'react';

import Field from './Field';
import Button, { VARIANTS } from 'components/Button';

enum INPUT_TYPES {
	'EMAIL' = 'email',
	'PASS' = 'pass',
	'NAME' = 'name',
	'CONFIRM' = 'confirm',
}
const getHtmlAttributes = (inputType: string) => {
	switch (inputType) {
		case INPUT_TYPES.EMAIL:
			return { placeholder: 'Enter your email id' };
		case INPUT_TYPES.PASS:
			return { placeholder: 'Enter your Password' };
		case INPUT_TYPES.NAME:
			return { placeholder: 'Enter your username' };
		case INPUT_TYPES.CONFIRM:
			return { placeholder: 'ReEnter your Password' };
	}
};
export default function SignupPanel() {
	const [fieldEmail, updateFieldEmail] = useState('');
	const [fieldPass, updateFieldPass] = useState('');
	const [fieldName, updateFieldName] = useState('');
	const [fieldConfirm, updateFieldConfirm] = useState('');

	const shouldUpdateFieldEmail = useCallback((entry: string) => {
		updateFieldEmail(entry);
	}, []);

	const shouldUpdateFieldPass = useCallback((entry: string) => {
		updateFieldPass(entry);
	}, []);

	const shouldUpdateFieldName = useCallback((entry: string) => {
		updateFieldName(entry);
	}, []);

	const shouldUpdateFieldConfirm = useCallback((entry: string) => {
		updateFieldConfirm(entry);
	}, []);

	return (
		<div>
			<h4>Signup</h4>
			<form
				css={css`
					padding: 0 0 var(--s-32);
				`}
			>
				<Field
					{...getHtmlAttributes(INPUT_TYPES.EMAIL)}
					value={fieldEmail}
					onChange={shouldUpdateFieldEmail}
					label="Email Address"
					name={INPUT_TYPES.EMAIL}
				/>
				<Field
					{...getHtmlAttributes(INPUT_TYPES.NAME)}
					value={fieldName}
					onChange={shouldUpdateFieldName}
					label="User Name"
					name={INPUT_TYPES.NAME}
				/>
				<Field
					{...getHtmlAttributes(INPUT_TYPES.PASS)}
					value={fieldPass}
					onChange={shouldUpdateFieldPass}
					label="Password"
					name={INPUT_TYPES.PASS}
				/>
				<Field
					{...getHtmlAttributes(INPUT_TYPES.CONFIRM)}
					value={fieldConfirm}
					onChange={shouldUpdateFieldConfirm}
					label="Confirm Password"
					name={INPUT_TYPES.CONFIRM}
				/>
			</form>
			<footer
				css={css`
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					margin-bottom: var(--s-16);
				`}
			>
				<Button
					bg={VARIANTS.PRIMARY}
					size={VARIANTS.LARGE}
					styl={css`
						flex: 0 0 40%;
						max-width: 200px;
					`}
				>
					Sign Up
				</Button>
			</footer>
		</div>
	);
}
