import { Button } from './styles/Button.styled';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import StyledHeader, {
	Image,
	Logo,
	Nav,
} from './styles/Header.styled';

function Header() {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='images/Devunity.svg' alt='logo' />
					<Button>Try It Free</Button>
				</Nav>

				<Flex>
					<div>
						<h1>The Developer's Community</h1>
						<p>
							Devunity re-imagines the way we build communities. You
							have a voice, you share ideas, you get help from other
							developers, you build projects, you get paid and you
							have fun. Create connetions with other developers and
							share your knowledge.
						</p>

						<Button bg='#ff0099' color='#fff'>
							Get Started for Free
						</Button>
					</div>
					<Image
						src='./images/illustration-mockups.svg'
						alt='illustration'
					/>
				</Flex>
			</Container>
		</StyledHeader>
	);
}

export default Header;
