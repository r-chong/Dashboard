import { Box } from '@chakra-ui/react';
import './App.css';
import Sidebar from './Views/Sidebar';
import Todo from './Views/Todo';

function App() {
	let categories = {
		Mathematics: ['Watch Video Lecture', 'Solve Problems'],
		'Competitive Coding': ['Solve Problems', 'Practice'],
		'Web Development': ['Learn React', 'Learn NodeJS'],
		'App Development': ['Learn Flutter', 'Learn React Native'],
	};
	return (
		<Box className='app'>
			<Sidebar />
			<Todo todolist={categories} />
		</Box>
	);
}

export default App;
