import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Box = styled.div`
	width: 100px;
	height: 100px;
	background-color: skyblue;
	transition-duration: 2s;
	:hover {
		background-color: red;
		transform: translate(100px);
		border-radius: 50px;
		box-shadow: 0px 0px 30px 20px rgba(0, 0, 0, 1);
	}
`;
