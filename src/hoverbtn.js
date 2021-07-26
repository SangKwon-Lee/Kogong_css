import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
`;

export const Btn = styled.button`
	position: absolute;
	z-index: ${(props) => (props.isTrue2 ? 0 : 1)};
	width: 220px;
	height: 50px;
	border: none;
	outline: none;
	color: #fff;
	background: #111;
	cursor: pointer;
	border-radius: 10px;
`;
export const BtnBack = styled.div`
	display: flex;
	justify-content: center;
	color: white;
	align-items: center;
	background: linear-gradient(
		135deg,
		#fd1d1d,
		#d62976,
		#fa7e1e,
		#feda75,
		#48ff00,
		#00ffd5,
		#4f5bd5,
		#7a00ff,
		#962fbf,
		#ff0000
	);
	background-size: 400%;
	filter: blur(5px);
	width: 222px;
	height: 52px;
	transition: opacity 0.3s ease-in-out;
	opacity: ${(props) => (props.isTrue ? 1 : 0)};
	border-radius: 10px;
	animation: moving-gradient 10s linear infinite;
	@keyframes moving-gradient {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 400% 0;
		}
	}
`;

export const BtnWrapper2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BtnWrapper = styled.div`
	display: flex;
`;

export const Text = styled.div`
	position: absolute;
	z-index: 2;
	color: white;
`;
