export type TypeTask = {
	title: string;
	description?: string;
	isCompleted: boolean;
	_id: string | number;
};

export type TypeTaskList = {
	title: string;
	tasks: TypeTask[];
	_id: string | number;
};
