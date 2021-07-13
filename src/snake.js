import styled from '@emotion/styled';

export const Container = styled.div`
	width: 1100px;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: black;
`;

export const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 300px;
	height: 400px;
	background-color: #0c002b;
	margin: 30px;
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
	overflow: hidden;
`;

export const Line = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px;
	opacity: ${(props) => (props.isTrue ? 1 : 0)};
	background: linear-gradient(to right, transparent, #1779ff);
	animation: animate1 2s linear infinite;
	@keyframes animate1 {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(100%);
		}
	}
`;

export const Line2 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	width: 3px;
	height: 100%;
	background: linear-gradient(to bottom, transparent, #1779ff);
	animation: animate2 2s linear infinite;
	animation-delay: 1s;
	opacity: ${(props) => (props.isTrue ? 1 : 0)};
	@keyframes animate2 {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
`;

export const Line3 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(to left, transparent, #1779ff);
	animation: animate3 2s linear infinite;
	opacity: ${(props) => (props.isTrue ? 1 : 0)};
	@keyframes animate3 {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;

export const Line4 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 3px;
	height: 100%;
	background: linear-gradient(to top, transparent, #1779ff);
	animation: animate4 2s linear infinite;
	animation-delay: 1s;
	opacity: ${(props) => (props.isTrue ? 1 : 0)};
	@keyframes animate4 {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(-100%);
		}
	}
`;

export const Text = styled.div`
	color: white;
	font-size: 30px;
`;

export const Line5 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px;
	opacity: ${(props) => (props.isTrue2 ? 1 : 0)};
	background: linear-gradient(to right, transparent, #ffd600);
	animation: animate1 2s linear infinite;
	@keyframes animate1 {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(100%);
		}
	}
`;

export const Line6 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	width: 3px;
	height: 100%;
	background: linear-gradient(to bottom, transparent, #ffd600);
	animation: animate2 2s linear infinite;
	animation-delay: 1s;
	opacity: ${(props) => (props.isTrue2 ? 1 : 0)};
	@keyframes animate2 {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
`;

export const Line7 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(to left, transparent, #ffd600);
	animation: animate3 2s linear infinite;
	opacity: ${(props) => (props.isTrue2 ? 1 : 0)};
	@keyframes animate3 {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;

export const Line8 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 3px;
	height: 100%;
	background: linear-gradient(to top, transparent, #ffd600);
	animation: animate4 2s linear infinite;
	animation-delay: 1s;
	opacity: ${(props) => (props.isTrue2 ? 1 : 0)};
	@keyframes animate4 {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(-100%);
		}
	}
`;

export const Line9 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px;
	opacity: ${(props) => (props.isTrue3 ? 1 : 0)};
	background: linear-gradient(to right, transparent, #ff3399);
	animation: animate1 2s linear infinite;
	@keyframes animate1 {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(100%);
		}
	}
`;

export const Line10 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	width: 3px;
	height: 100%;
	background: linear-gradient(to bottom, transparent, #ff3399);
	animation: animate2 2s linear infinite;
	animation-delay: 1s;
	opacity: ${(props) => (props.isTrue3 ? 1 : 0)};
	@keyframes animate2 {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
`;

export const Line11 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(to left, transparent, #ff3399);
	animation: animate3 2s linear infinite;
	opacity: ${(props) => (props.isTrue3 ? 1 : 0)};
	@keyframes animate3 {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;

export const Line12 = styled.span`
	transition: 0.5;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 3px;
	height: 100%;
	background: linear-gradient(to top, transparent, #ff3399);
	animation: animate4 2s linear infinite;
	animation-delay: 1s;
	opacity: ${(props) => (props.isTrue3 ? 1 : 0)};
	@keyframes animate4 {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(-100%);
		}
	}
`;
