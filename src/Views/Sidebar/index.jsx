import { Box } from '@chakra-ui/react';
import Time from '../../Components/Time';
import DatePicker from '../../Components/DatePicker';
import Progress from '../../Components/Progress';

export default function Sidebar() {
	return (
		<Box style={sidebarStyle}>
			<Time />
			<DatePicker />
			<Progress />
		</Box>
	);
}

const sidebarStyle = {
	display: 'flex',
	flexDirection: 'column',
	flex: '1',
	gap: '0.3em',
};
