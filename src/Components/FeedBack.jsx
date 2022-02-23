import React, { useState } from 'react';
import { Container } from './FeedBack.styled';
import Statistics from './Statistics';
import Title from './Title';
import FeedBackOptions from './FeedBackOptions';

const FeedBack = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const countTotalFeedBack = () => {
		return feedback.good + feedback.neutral + feedback.bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return Math.ceil(100 / ((feedback.good + feedback.bad) / feedback.good));
	};

	const increaseFeedback = (key) => {
		setFeedback({ ...feedback, [key]: feedback[key] + 1 });
	};

	return (
		<Container>
			<Title title='Please Leave a feedback!'>
				<FeedBackOptions
					options={Object.keys(feedback)}
					increaseFeedback={increaseFeedback}></FeedBackOptions>
			</Title>
			<Title title='Statistics'>
				<Statistics
					statistics={feedback}
					total={countTotalFeedBack}
					positiveFeedBack={countPositiveFeedbackPercentage}
				/>
			</Title>
		</Container>
	);
};

export default FeedBack;
