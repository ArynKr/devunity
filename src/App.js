import { ThemeProvider } from 'styled-components';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme = {
	colors: {
		header: '#ebfbff',
		body: 'white',
		footer: '#003333',
	},
	breakpoints: {
		mobile: '768px',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				<Cards contents={content} />
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
