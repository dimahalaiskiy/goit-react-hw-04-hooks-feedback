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

	const handleGoodIncrease = () => {
		setFeedback({ ...feedback, good: feedback.good + 1 });
	};
	const handleNeutralIncrease = () => {
		setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
	};
	const handleBadIncrease = () => {
		setFeedback({ ...feedback, bad: feedback.bad + 1 });
	};

	return (
		<Container>
			<Title title='Please Leave a feedback!'>
				<FeedBackOptions
					goodIncrease={handleGoodIncrease}
					neutralIncrease={handleNeutralIncrease}
					badIncrease={handleBadIncrease}></FeedBackOptions>
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
