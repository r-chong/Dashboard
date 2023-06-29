import { Box } from '@chakra-ui/react';
import Category from '../../Components/Category';
import PropTypes from 'prop-types';

export default function Todo({ todolist }) {
	return (
		<Box flex='2' layerStyle='row'>
			{Object.entries(todolist).map(([key, value]) => {
				return <Category key={key} title={key} tasks={value} />;
			})}
		</Box>
	);
}

Todo.propTypes = {
	todolist: PropTypes.object,
};
