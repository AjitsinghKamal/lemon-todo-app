/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import LayoutRoot from '../LayoutRoot';
import Header from './DefaultHeader';
import Sidebar from 'modules/sidebar/SidebarCntnr';

export default function DefaultLayout({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<LayoutRoot
			styl={css`
				grid-template-rows: 80px 1fr;
				display: grid;
				grid-template-columns: 15% 1fr;
				grid-template-areas:
					'sidebar header'
					'sidebar main';
				background: var(--c-bg);
			`}
		>
			<Header />
			<aside
				css={css`
					grid-area: sidebar;
					background: var(--c-sidebar);
				`}
			>
				<Sidebar />
			</aside>
			<main
				css={css`
					padding: 32px;
					grid-area: main;
				`}
			>
				{children}
			</main>
		</LayoutRoot>
	);
}
