import React from 'react';
import { Button } from '../FeedBack.styled';
import PropTypes from 'prop-types';

const FeedBackOptions = ({ options, increaseFeedback }) => {
	return (
		<>
			{options.map((el) => (
				<Button key={el} onClick={() => increaseFeedback(el)}>
					{el}
				</Button>
			))}
		</>
	);
};

FeedBackOptions.propTypes = {
	options: PropTypes.array.isRequired,
};

export default FeedBackOptions;
