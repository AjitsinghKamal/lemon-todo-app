/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import Drawer from 'components/Drawer';
import SidebarItem from './SidebarItem';

import { ListsShortDetailsType } from './types';

export default function SidebarContainer() {
	// const { path } = useRouteMatch();
	return (
		<Drawer
			noContentMessage="All your lists will appear here as well"
			styl={css`
				display: flex;
				align-items: center;
				font-size: var(--ft-12);
				color: var(--c-text2);
				padding: 80px 16px 16px 32px;
			`}
		>
			{[].map((list: ListsShortDetailsType) => (
				<SidebarItem title={list.title} />
			))}
		</Drawer>
	);
}
