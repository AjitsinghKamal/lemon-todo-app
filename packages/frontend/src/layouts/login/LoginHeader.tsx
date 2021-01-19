/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Header from 'components/Header';
import { cssFixed } from 'styles/utilities';

export default function LoginHeader() {
	return (
		<Header
			brand="white"
			styl={css`
				top: 0;
				background: transparent;
				height: 80px;
				${cssFixed}
			`}
		/>
	);
}
