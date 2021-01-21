/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { ListsShortDetailsType } from './types';

export default function SidebarItem({ title }: ListsShortDetailsType) {
	// const { path } = useRouteMatch();
	return (
		<li>
			<p>{title}</p>
		</li>
	);
}
