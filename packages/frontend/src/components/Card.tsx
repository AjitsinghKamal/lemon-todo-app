/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { ExtendStyle } from './types';

export default function Card({
	styl,
	children,
	...rest
}: React.PropsWithChildren<ExtendStyle>) {
	return (
		<div
			{...rest}
			css={css`
				border-radius: var(--r-20);
				background: var(--c-w80);
				${styl};
			`}
		>
			{children}
		</div>
	);
}
