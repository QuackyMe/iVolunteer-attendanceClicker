import { useState } from 'react';

const WordBox = ({ eventObject }) => {
	const [answer, setAnswer] = useState('');
	const [wordBox, setWordBox] = useState(
		shuffle(`${eventObject.rewardCode.correct} ${eventObject.rewardCode.wrong}`.split(' '))
	);
	const [answerBox, setAnswerBox] = useState([]);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function interactWordBox(e) {
		const arrAnswer = answerBox;
		arrAnswer.push(e.target.innerText);
		setAnswerBox(arrAnswer);

		const arr = wordBox.filter((item, index) => {
			return index !== parseInt(e.target.id);
		});
		setWordBox(arr);

		setAnswer(`${answer}${e.target.innerText}`);
	}

	function interactAnswerBox(e) {
		const arrWord = wordBox;
		let strAns = '';
		console.log(answerBox[answerBox.length - 1]);
		strAns = answer.replace(`${e.target.innerText}`, '');
		const arr = answerBox.filter((item, index) => {
			return index !== parseInt(e.target.id);
		});

		setAnswer(strAns);
		arrWord.push(e.target.innerText);
		setWordBox(arrWord);
		console.log(strAns);
		setAnswerBox(arr);
	}

	function checkAnswer() {
		const check = document.querySelector('.btn-check');
		check.style.background = 'lightgreen';
		if (answer.replace(' ', '') === eventObject.rewardCode.correct.split(' ').join('')) {
			console.log('Congratulations');
		} else {
			check.style.background = 'red';
			console.log('Wrong Answer');
		}
	}
	return (
		<div className="word-box">
			<div className="answer-box">
				<ul>
					{answerBox &&
						answerBox.map((answer, index) => (
							<li key={index} id={index} onClick={interactAnswerBox}>
								{answer}
							</li>
						))}
				</ul>
			</div>
			<div className="word-box">
				<ul>
					{wordBox.map((word, index) => (
						<li key={index} id={index} onClick={interactWordBox}>
							{word}
						</li>
					))}
				</ul>
			</div>
			<button className="btn-check" onClick={checkAnswer}>
				Check Answer
			</button>
		</div>
	);
};

export default WordBox;
