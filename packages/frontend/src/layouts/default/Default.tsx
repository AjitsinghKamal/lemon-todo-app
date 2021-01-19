/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import LayoutRoot from '../LayoutRoot';
import Header from './DefaultHeader';

export default function DefaultLayout({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<LayoutRoot
			styl={css`
				grid-template-rows: 80px 1fr;
			`}
		>
			<Header />
			<main
				css={css`
					padding: 32px;
				`}
			>
				{children}
			</main>
		</LayoutRoot>
	);
}
