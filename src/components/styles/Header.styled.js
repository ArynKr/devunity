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
`;

const Logo = styled.img`
	/* width: 100px; */
`;

export default StyledHeader;
export { Nav, Logo };
