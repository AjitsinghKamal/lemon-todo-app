/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

type Props = {
	onChange?: (v: string) => void;
	value?: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	style?: React.CSSProperties;
};

function Input({
	onChange,
	value = '',
	prefix,
	suffix,
	style,
	...rest
}: React.PropsWithChildren<Props>) {
	const onChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target && e.target.value;
		onChange && onChange(currentValue);
	};
	return (
		<div css={wrap} style={style}>
			{prefix && <div css={actionCss}>{prefix}</div>}
			<input
				onChange={onChangHandler}
				value={value}
				{...rest}
				css={css`
					${inputCss}
				`}
			/>
			{suffix && <div css={actionCss}>{suffix}</div>}
		</div>
	);
}

const wrap = css`
	border-radius: var(--r-10);
	box-shadow: var(--shadow-input);
	cursor: pointer;
	position: relative;
	transition: box-shadow 0.3s, background 0.3s;
	--pad-left: var(--s-16);
	--pad-right: var(--s-16);
	width: 100%;
`;
const inputCss = css`
	border: 0;
	padding: var(--s-16);
	padding-left: var(--pad-left);
	padding-right: var(--pad-right);
	font-size: var(--ft-16);
	cursor: pointer;
	border-radius: var(--r-10);
	width: 100%;
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

const actionCss = css`
	position: absolute;
	left: 0;
	display: inline-flex;
	align-items: center;
	padding: var(--s-16);
`;
export default Input;
