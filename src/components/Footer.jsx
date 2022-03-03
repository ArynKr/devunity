import SocialIcons from './SocialIcons';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import StyledFooter from './styles/Footer.styled';

import { IoMdCall } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';

function Footer() {
	return (
		<StyledFooter>
			<Container>
				<img src='./images/logo_white.svg' alt='' />

				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut.
						</li>

						<li>
							{' '}
							<IoMdCall />
							&nbsp; +1-543-123-4567
						</li>
						<li>
							<HiMail />
							&nbsp; mail@devunity.com
						</li>
					</ul>

					<ul>
						<li>
							<a href='#about'>About Us</a>
						</li>
						<li>
							<a href='#about'>What We Do</a>
						</li>
						<li>
							<a href='#about'>FAQ</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href='#career'>Career</a>
						</li>
						<li>
							<a href='#career'>Blog</a>
						</li>
						<li>
							<a href='#career'>Contact Us</a>
						</li>
					</ul>

					<SocialIcons />
				</Flex>

				<p>&copy; 2022 Devunity. All rights reserved</p>
			</Container>
		</StyledFooter>
	);
}

export default Footer;
