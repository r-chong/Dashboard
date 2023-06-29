import { Card } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Time() {
	const [remainingTime, setRemainingTime] = useState();

	useEffect(() => {
		const timeInterval = setInterval(() => {
			const date = new Date();
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			const remainingHours = (24 - hours) * 3600;
			const remainingMinutes = (60 - minutes) * 60;
			const remainingSeconds = 60 - seconds;
			setRemainingTime(
				remainingHours + remainingMinutes + remainingSeconds
			);
		}, 500);

		return () => {
			clearInterval(timeInterval);
		};
	}, [remainingTime]);
	return <Card layerStyle='cardStyle'>{remainingTime}</Card>;
}
