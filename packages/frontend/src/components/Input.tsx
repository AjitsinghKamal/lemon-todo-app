/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

type Props = {
	onChange?: (v: string) => void;
	value?: string;
};

function Input({
	onChange,
	value = '',
	...rest
}: React.PropsWithChildren<Props>) {
	const onChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target && e.target.value;
		onChange && onChange(currentValue);
	};
	return (
		<input
			onChange={onChangHandler}
			value={value}
			{...rest}
			css={inputCss}
		/>
	);
}

const inputCss = css`
	padding: var(--s-16);
	font-size: var(--ft-16);
	border-radius: var(--r-10);
	border: 0;
	box-shadow: var(--shadow-input);
	cursor: pointer;
	transition: box-shadow 0.3s, background 0.3s;
	&:focus {
		outline: 0;
		box-shadow: var(--shadow-input-focus);
		background: var(--c-y10);
	}
	@media (min-width: 1200px) {
		&:hover {
			background: var(--c-y10);
		}
	}
`;
export default Input;
