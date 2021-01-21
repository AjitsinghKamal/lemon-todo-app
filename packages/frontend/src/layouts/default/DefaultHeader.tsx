/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Header from 'components/Header';

import { cssFixed } from 'styles/utilities';

export default function DefaultHeader() {
	return (
		<Header
			styl={css`
				grid-area: header;
				top: 0;
				background: transparent;
				height: 80px;
				${cssFixed}
			`}
		/>
	);
}
