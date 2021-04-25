import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<img src="/ivolunteer.png" alt="logo" className="logo" />
			<nav className="links">
				<ul>
					<Link to="/dashboard">
						<li>Dashboard</li>
					</Link>
					<Link to="/create">
						<li>Create Event</li>
					</Link>
				</ul>
			</nav>
			<p className="email">juandelacruz@gmail.com</p>
		</header>
	);
};

export default Navbar;
