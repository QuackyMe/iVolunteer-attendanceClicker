import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import EventPage from './EventPage';
import Scramble from './Scramble';
import CreateEvent from './CreateEvent';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="content">
					<Switch>
						<Route path="/create">
							<CreateEvent />
						</Route>
						<Route path="/dashboard/:id/claim">
							<Scramble />
						</Route>
						<Route path="/dashboard/">
							<EventPage />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
