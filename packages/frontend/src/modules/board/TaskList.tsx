/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import useFetch from 'hooks/useFetch';
import { GET, POST } from 'apis/tasks';

import TaskInput from './TaskInput';
import Card from 'components/Card';

import { TypeTask, TypeTaskList } from './type';

type Props = {
	selectedList?: string;
};
export default function TaskList({ selectedList: string }: Props) {
	const [activeTask, setActiveState] = useState('');
	const {
		responseState: activeList,
		requestState: activeListFetchStatus,
		dispatchFetch,
	} = useFetch<TypeTaskList>();

	return (
		<div>
			<TaskInput title="" isCompleted={false} _id={-1} />
			<ul>
				{[].map((task: TypeTask) => (
					<TaskInput {...task} key={task._id} />
				))}
			</ul>
		</div>
	);
}
