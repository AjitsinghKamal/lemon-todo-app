/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState, useCallback } from 'react';
import Field from './Field';
import Button, { VARIANTS } from 'components/Button';

enum INPUT_TYPES {
	'EMAIL' = 'email',
	'PASS' = 'pass',
}
const getHtmlAttributes = (inputType: string) => {
	switch (inputType) {
		case INPUT_TYPES.EMAIL:
			return { placeholder: 'Enter your registered email id' };
		case INPUT_TYPES.PASS:
			return { placeholder: 'Enter your Password' };
	}
};
export default function LoginPanel() {
	const [fieldEmail, updateFieldEmail] = useState('');
	const [fieldPass, updateFieldPass] = useState('');

	const shouldUpdateFieldEmail = useCallback((entry: string) => {
		updateFieldEmail(entry);
	}, []);

	const shouldUpdateFieldPass = useCallback((entry: string) => {
		updateFieldPass(entry);
	}, []);

	return (
		<div>
			<h4>Log Me In</h4>
			<form
				css={css`
					padding: var(--s-32) 0;
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
					{...getHtmlAttributes(INPUT_TYPES.PASS)}
					value={fieldPass}
					onChange={shouldUpdateFieldPass}
					label="Password"
					name={INPUT_TYPES.PASS}
				/>
			</form>
			<footer
				css={css`
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
				`}
			>
				<div
					css={css`
						position: relative;
					`}
				>
					<small
						css={css`
							opacity: 0.8;
							font-size: var(--ft-14);
							margin-bottom: var(--s-14);
							display: block;
							font-weight: 500;
						`}
					>
						Not Registered yet!
					</small>
					<Button bg={VARIANTS.MUTED} size={VARIANTS.LARGE}>
						Sign Up Here
					</Button>
				</div>
				<Button
					bg={VARIANTS.PRIMARY}
					size={VARIANTS.LARGE}
					styl={css`
						flex: 0 0 40%;
						max-width: 200px;
					`}
				>
					Log In
				</Button>
			</footer>
		</div>
	);
}
