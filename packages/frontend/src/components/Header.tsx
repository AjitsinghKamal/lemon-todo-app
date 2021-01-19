/** @jsxImportSource @emotion/react */
import { jsx, css, SerializedStyles } from '@emotion/react';

type Props = {
	styl?: SerializedStyles;
	brand?: 'dark' | 'white';
};
export default function Header({
	children,
	styl,
	brand = 'dark',
}: React.PropsWithChildren<Props>) {
	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				padding: 0 var(--s-32);
				${styl}
			`}
		>
			<span
				css={css`
					display: inline-block;
					flex: 0 0 120px;
					font-weight: 800;
					color: ${brand === 'white'
						? 'var(--c-w100)'
						: 'var(--c-primary)'};
				`}
			>
				TODO<small>uin</small>
			</span>
			{children}
		</header>
	);
}
