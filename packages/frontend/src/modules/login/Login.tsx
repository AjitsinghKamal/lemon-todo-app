/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Card from 'components/Card';
import LoginPanel from './LoginPanel';
import SignupPanel from './SignupPanel';

export default function LoginContainer() {
	const { path } = useRouteMatch();
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
				<Route path={`${path}/signup`} exact>
					<SignupPanel />
				</Route>
				<Route path={path} exact>
					<LoginPanel />
				</Route>
			</Switch>
		</Card>
	);
}
