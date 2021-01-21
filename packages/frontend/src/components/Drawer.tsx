/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Children as ReactChildren } from 'react';
import { ExtendStyle } from './types';

type Props = {
	noContentMessage?: React.ReactNode;
} & ExtendStyle;

function Drawer({
	styl,
	children,
	noContentMessage,
}: React.PropsWithChildren<Props>) {
	return (
		<div
			css={css`
				height: 100%;
				width: 100%;
				${styl}
			`}
		>
			{!ReactChildren.count(children) ? (
				<p
					css={css`
						opacity: 0.4;
						margin: 0;
						line-height: 1.65;
					`}
				>
					{noContentMessage}
				</p>
			) : (
				children
			)}
		</div>
	);
}

export default Drawer;
