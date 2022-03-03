import styled from 'styled-components';

const StyledHeader = styled.header`
	background: ${({ theme }) => theme.colors.header};
	padding: 40px 0;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		/* align-items: flex-start; */
		margin-bottom: 20px;
	}
`;

const Logo = styled.img`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-bottom: 20px;
	}
`;

const Image = styled.img`
	width: 375px;
	margin-left: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-block: 40px;
		margin-inline: auto;
	}
`;

export default StyledHeader;
export { Nav, Logo, Image };
