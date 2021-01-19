/** @jsxImportSource @emotion/react */
import { jsx, css, SerializedStyles } from '@emotion/react';

type Props = {
	styl?: SerializedStyles;
};
export default function LayoutRoot({
	children,
	styl,
}: React.PropsWithChildren<Props>) {
	return (
		<div
			css={css`
				width: var(--s-wfull);
				height: var(--s-hfull);
				${styl}
			`}
		>
			{children}
		</div>
	);
}
