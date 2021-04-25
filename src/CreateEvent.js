import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [time, setTime] = useState('');
	const [correct, setCorrect] = useState('');
	const [wrong, setWrong] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const organizer = 'Juan Dela Cruz';

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const event = { name, description, time, rewardCode: { correct, wrong }, organizer };
		fetch('http://localhost:8000/events', {
			method: 'POST',
			headers: { 'Content-Type': 'application/JSON' },
			body: JSON.stringify(event),
		}).then(() => {
			console.log('Event saved successfully');
			setIsLoading(false);
			history.push('/dashboard');
		});
	};

	return (
		<div className="create">
			<h2>Add a new Blog</h2>
			<br /> <br />
			<form onSubmit={handleSubmit}>
				<label>Volunteer Activity: </label> <br />
				<input type="text" required value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
				<label>Event Description:</label> <br />
				<textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>{' '}
				<br /> <br />
				<label>Event Time: </label> <br />
				<input type="text" required value={time} onChange={(e) => setTime(e.target.value)} /> <br /> <br />
				<label>Secret Reward Phrase: </label> <br />
				<input
					type="text"
					required
					value={correct}
					onChange={(e) => setCorrect(e.target.value.toLowerCase())}
					placeholder="Enter a phrase that the volunteers will enter to receive a reward"
				/>{' '}
				<br /> <br />
				<label>Dummy Phrase: </label> <br />
				<input
					type="text"
					required
					value={wrong}
					onChange={(e) => setWrong(e.target.value.toLocaleLowerCase())}
					placeholder="Enter a phrase similar to the secret phrase to confuse the non participants"
				/>{' '}
				<br /> <br />
				{!isLoading && <button>Add Event</button>}
				{isLoading && <button disabled>Processing</button>}
			</form>
		</div>
	);
};

export default Create;
