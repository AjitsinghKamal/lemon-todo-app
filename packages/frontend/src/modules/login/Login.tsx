/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Switch, Route } from 'react-router-dom';

import Card from 'components/Card';
import LoginPanel from './LoginPanel';

export default function LoginContainer() {
	return (
		<Card
			styl={css`
				box-shadow: var(--shadow-p);
				width: 70%;
				max-width: 500px;
				max-height: 80%;
				min-height: 500px;
				padding: var(--s-16) var(--s-32);
			`}
		>
			<Switch>
				<Route path="/">
					<LoginPanel />
				</Route>
			</Switch>
		</Card>
	);
}
