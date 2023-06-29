import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Category({ title, tasks }) {
	return (
		<Card layerStyle='base'>
			<CardHeader>{title}</CardHeader>
			<CardBody layerStyle='base'>
				{tasks.map((task) => {
					return <Checkbox key={task}>{task}</Checkbox>;
				})}
			</CardBody>
		</Card>
	);
}

Category.propTypes = {
	title: PropTypes.string,
	tasks: PropTypes.array,
};
