/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import LayoutRoot from '../LayoutRoot';
import Header from './LoginHeader';

export default function LoginLayout({ children }: React.PropsWithChildren<{}>) {
	return (
		<LayoutRoot
			styl={css`
				background: var(--c-primary);
				overflow: hidden;
			`}
		>
			<Header />
			<div
				css={css`
					max-width: var(--s-container);
					margin: 0 auto;
					height: 100%;
				`}
			>
				{children}
			</div>
		</LayoutRoot>
	);
}
