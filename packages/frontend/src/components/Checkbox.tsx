/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

type Props = {
	onChange?: (v: string) => void;
	value?: string;
};

export default function Checkbox({
	onChange,
	value = '',
	...rest
}: React.PropsWithChildren<Props>) {
	const onChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target && e.target.value;
		onChange && onChange(currentValue);
	};
	return (
		<div
			css={css`
				width: 20px;
				height: 20px;
				display: inline-block;
				border-radius: var(--r-6);
				box-shadow: 0 0 0 2px var(--c-d50);
			`}
		>
			<label
				htmlFor="checkbox"
				css={css`
					width: 100%;
					height: 100%;
				`}
			>
				<input type="checkbox" name="checkbox" css={inputCss} />
			</label>
		</div>
	);
}

const inputCss = css`
	border: 0;
	clip: rect(0 0 0 0)';
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	whitespace: nowrap;
	width: 1px;
`;
