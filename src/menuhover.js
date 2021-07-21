import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const MenuWrapper = styled.div`
	position: relative;
`;

export const Menu = styled.div`
	-webkit-text-stroke: 3px #fff;
	font-size: 130px;
	font-weight: 900;
	text-decoration: none;
	transition: all 0.5s;
	color: ${(props) => (props.isTrue ? 'white' : 'transparent')};
	:hover {
		-webkit-text-stroke: 2px black;
	}
`;
export const Menu1 = styled.div`
	position: absolute;
	top: 0;
	color: ${(props) => (props.isTrue ? 'red' : 'transparent')};
	-webkit-text-stroke: 2px ${(props) => (props.isTrue ? 'black' : 'white')};
	font-size: 130px;
	font-weight: 900;
	transition: all 0.5s;
	transform: ${(props) =>
		props.isTrue ? `translate(10px, -10px)` : `translate(0px, 0px)`};
`;
export const Menu2 = styled.div`
	position: absolute;
	top: 0;
	color: ${(props) => (props.isTrue ? '#0ff' : 'transparent')};
	-webkit-text-stroke: 2px ${(props) => (props.isTrue ? 'black' : 'white')};
	font-size: 130px;
	font-weight: 900;
	transition: all 0.5s;
	transform: ${(props) =>
		props.isTrue ? `translate(20px, -20px)` : `translate(0px, 0px)`};
`;
