/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Card from 'components/Card';

type Props = {};
export default function LoginContainer({
	children,
}: React.PropsWithChildren<Props>) {
	return (
		<Card
			styl={css`
				box-shadow: var(--shadow-p);
				width: 80%;
				height: 70%;
			`}
		>
			{children}
		</Card>
	);
}
