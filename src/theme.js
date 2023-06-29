import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	initialColorMode: 'dark',
	layerStyles: {
		base: {
			borderRadius: '0.3em',
			padding: '0.3em',
			display: 'flex',
			flexDirection: 'column',
			flexGrow: 1,
			maxHeight: '50%',
		},
		row: {
			borderRadius: '0.3em',
			padding: '0.3em',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '0.5em',
		},
		cardStyle: {
			width: '100%',
			textAlign: 'center',
			padding: '1rem',
			fontSize: '2rem',
		},
	},
});
export default theme;
