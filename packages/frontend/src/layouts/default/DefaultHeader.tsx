/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

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
			>
				<Logo
					css={css`
						width: 100%;
						height: 100%;
					`}
				/>
			</span>
		</header>
	);
}
