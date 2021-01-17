/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import Header from './DefaultHeader';

export default function DefaultLayout({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<div
			css={css`
				display: grid;
				width: 100vw;
				height: 100vh;
				grid-template-rows: 80px 1fr;
				max-width: 1560px;
				margin: 0 auto;
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
		</div>
	);
}
