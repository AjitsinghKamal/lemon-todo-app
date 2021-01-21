/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState, useCallback, useLayoutEffect } from 'react';

// import { useRouteMatch } from 'react-router-dom';

import TaskList from './TaskList';
import Card from 'components/Card';

export default function OverviewContainer() {
	return (
		<div
			css={css`
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			`}
		>
			<TaskList />
		</div>
	);
}
