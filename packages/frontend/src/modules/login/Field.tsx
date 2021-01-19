/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Input from 'components/Input';

type Props = {
	label: string;
	value: string;
	name: string;
	onChange?: (v: string) => void;
};

function Field({ label, name, ...rest }: React.PropsWithChildren<Props>) {
	return (
		<div
			css={css`
				margin: var(--s-18) 0 var(--s-24);
				display: flex;
				flex-direction: column;
			`}
		>
			<label
				css={css`
					font-size: var(--ft-14);
					font-weight: 500;
					color: var(--c-text80);
					margin-bottom: var(--s-16);
				`}
				htmlFor={name}
			>
				{label}
			</label>
			<Input {...rest} />
		</div>
	);
}

export default Field;
