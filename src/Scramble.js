import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Wordbox from './Wordbox';

const Scramble = () => {
	const { id } = useParams();
	const { data: eventObject } = useFetch(`http://localhost:8000/events/${id}`);

	return (
		<div className="scramble">
			<h4>
				Thank you for volunteering <br /> at{' '}
				<span
					style={{
						fontWeight: '500',
					}}
				>
					"{eventObject && eventObject.name}"
				</span>
			</h4>{' '}
			<br />
			<h4>To receive the reward, enter the code provided by the organizer below</h4>
			{eventObject && <Wordbox eventObject={eventObject} />}
		</div>
	);
};

export default Scramble;
