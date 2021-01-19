/** @jsxImportSource @emotion/react */
import { jsx, css, SerializedStyles } from '@emotion/react';

type Props = {
	styl?: SerializedStyles;
};

export default function Card({
	styl,
	children,
	...rest
}: React.PropsWithChildren<Props>) {
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
