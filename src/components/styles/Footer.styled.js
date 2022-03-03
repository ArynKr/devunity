import styled from 'styled-components';

const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.footer};
	color: ${({ theme }) => theme.colors.body};
	padding: 100px 0 10px;

	ul {
		list-style-type: none;
	}
	ul li {
		margin-bottom: 20px;
	}
	p {
		text-align: center;
		padding-top: 10px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		text-align: center;
		ul {
			padding: 0;
		}
		p {
			text-align: center;
		}
	}
`;

export default StyledFooter;
