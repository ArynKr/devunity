import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import StyledSocialIcons from './styles/SocialIcons.styled';

export default function SocialIcons() {
	return (
		<StyledSocialIcons>
			<div>
				<a href='https://twitter.com/'>
					<FaTwitter />
				</a>
				<a href='https://www.facebook.com/'>
					<FaFacebook />
				</a>
				<a href='https://www.linkedin.com/'>
					<FaLinkedin />
				</a>
			</div>
		</StyledSocialIcons>
	);
}
