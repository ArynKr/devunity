import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	margin: 40px 0;
	padding: 60px;
	flex-direction: ${(props) =>
		props.layout === 'row-reverse' ? 'row-reverse' : 'row'};

	img {
		width: 80%;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		align-items: flex-start;
		img {
			width: 100%;
		}
	}
`;

export default StyledCard;
