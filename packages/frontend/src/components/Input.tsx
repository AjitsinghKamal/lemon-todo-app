/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

type Props = {
	onChange: (v: string) => void;
	value: string;
};

function Input({ onChange, value }: React.PropsWithChildren<Props>) {
	const onChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target && e.target.value;
		onChange(currentValue);
	};
	return (
		<div>
			<input onChange={onChangHandler} value={value} />
			<div></div>
		</div>
	);
}

export default Input;
