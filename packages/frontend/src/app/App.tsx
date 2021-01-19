import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage } from '../pages';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
