import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #03a9f4;
`;

export const Box = styled.div`
	width: 300px;
	position: relative;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	flex-direction: column;
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
`;

export const Percent = styled.div`
	width: 150px;
	height: 150px;
`;

export const SVG = styled.svg`
	width: 150px;
	height: 150px;
`;

export const Circle = styled.circle`
	width: 150px;
	height: 150px;
	fill: none;
	stroke-width: 10;
	stroke: #000;
	transform: translate(5px, 5px);
	stroke-dasharray: 440;
	stroke-dashoffset: 0;
	stroke: #f3f3f3;
`;

export const Circle2 = styled.circle`
	width: 150px;
	height: 150px;
	fill: none;
	stroke-width: 10;
	stroke: #000;
	transform: translate(5px, 5px);
	stroke-dasharray: 440;
	stroke-linecap: round;
	stroke: #03a9f4;
	animation: move 2s forwards;
	@keyframes move {
		from {
			stroke-dashoffset: 440;
		}
		to {
			stroke-dashoffset: ${(props) => props.late};
		}
	}
`;

export const Number = styled.div`
	position: absolute;
	top: -16px;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #999;
	font-size: 30px;
`;

export const Text = styled.div`
	font-size: 24px;
	color: #999;
`;
