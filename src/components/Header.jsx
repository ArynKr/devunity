import { Button } from './styles/Button.styled';
import Container from './styles/Container.styled';
import StyledHeader, { Logo, Nav } from './styles/Header.styled';

function Header() {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='images/logo.svg' alt='logo' />
					<Button>Try It Free</Button>
				</Nav>
			</Container>
		</StyledHeader>
	);
}

export default Header;
