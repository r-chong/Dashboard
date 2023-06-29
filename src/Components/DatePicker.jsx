import { Card } from '@chakra-ui/react';
import { useState } from 'react';
import { Calendar } from 'antd';

import dayjs from 'dayjs';
export default function DatePicker() {
	const [value, setValue] = useState(dayjs());
	const [selectedValue, setSelectedValue] = useState();
	const onSelect = (newValue) => {
		setValue(newValue);
		setSelectedValue(newValue);
	};
	const onPanelChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<Card p='0.5em'>
			<Calendar
				fullscreen={false}
				value={value}
				onSelect={onSelect}
				onPanelChange={onPanelChange}
			/>
		</Card>
	);
}
/* const calendarStyle = {
	width: '10%',
	border: 'none',
	borderRadius: '0.5em',
	padding: '0.5em',
}; */
