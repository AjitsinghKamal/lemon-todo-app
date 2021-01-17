/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

export default function DefaultHeader() {
	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				padding: 0 32px;
			`}
		>
			<span
				css={css`
					display: inline-block;
					width: 120px;
					height: 40px;
				`}
			></span>
		</header>
	);
}
