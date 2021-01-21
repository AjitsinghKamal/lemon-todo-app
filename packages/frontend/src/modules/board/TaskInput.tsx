/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState, useCallback, useLayoutEffect } from 'react';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';

import { TypeTask } from './type';

type Props = {
	dataset?: Record<string, string>;
	makeUpdate?: (v: string) => void;
} & TypeTask;

function TaskInput({
	dataset,
	title,
	...rest
}: React.PropsWithChildren<Props>) {
	const [entry, updateEntry] = useState('');

	const updateTaskEntry = useCallback((val) => {
		updateEntry(val);
	}, []);

	useLayoutEffect(() => {
		updateEntry(title);
	}, [title]);

	return (
		<li
			{...dataset}
			css={css`
				margin: var(--s-18) 0 var(--s-24);
				display: flex;
				&:last-child {
					margin-bottom: var(--s-16);
				}
				width: 100%;
			`}
		>
			<Input
				onChange={updateTaskEntry}
				value={entry}
				{...rest}
				prefix={<Checkbox />}
				style={{
					['--pad-left' as any]: '52px',
				}}
			></Input>
		</li>
	);
}

export default TaskInput;
