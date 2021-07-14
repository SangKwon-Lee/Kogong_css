import styled from '@emotion/styled';

export const Background = styled.div`
	background: linear-gradient(180deg, #1c0138 0%, #2c0055 100%);
	height: 100vh;
	display: flex;
	position: absolute;
	width: 100%;
	z-index: -2;
	justify-content: center;
`;

export const Container = styled.div`
	margin-top: 200px;
	width: 200px;
	height: 200px;
`;

export const Button = styled.div`
	width: 200px;
	height: 65px;
	background: #2c0055;
	box-shadow: 0 0 16px #c80de0;
	border-radius: 10px;
	box-shadow: 0 0 36px #c80de0;
	transition: all 1s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.span`
	font-size: 35px;
	left: 65px;
	color: #ffdc2a;
`;

export const Sun = styled.div`
	position: absolute;
	z-index: -1;
	width: 64px;
	margin-left: 70px;

	margin-top: ${(props) => (props.isTrue ? '-100px' : '-65px')};
	height: 64px;
	background: linear-gradient(180deg, #ffdc2a 0%, #fb2182 41.54%);
	box-shadow: ${(props) =>
		props.isTrue ? '0 0 10px #ffdc2a;' : '0 0 36px #ffdc2a;'};

	border-radius: 65px;
	transition: all 1s ease-in-out;
`;
