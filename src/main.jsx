import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';
import theme from './theme.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraBaseProvider theme={theme} resetCSS={true}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</ChakraBaseProvider>
	</React.StrictMode>
);
