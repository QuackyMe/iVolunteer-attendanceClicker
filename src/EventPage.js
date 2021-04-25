import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const EventPage = () => {
	const { data: events } = useFetch('http://localhost:8000/events');
	return (
		<div className="event-list">
			<div className="title">My Events</div>
			<ul className="events">
				{events &&
					events.map((event) => (
						<li>
							<div className="event-name">{event.name}</div>
							<div className="box-layer">
								<div className="event-time">{event.time}</div>
								<div className="event-description">{event.description}</div>
								<div className="event-organizer">
									{event.organizer} <br />
									<Link to={`/dashboard/${event.id}/claim`}>
										<button>Finalize</button>
									</Link>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default EventPage;
