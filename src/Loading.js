import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #1c1c1c;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Loading = styled.div`
	display: flex;
	background: linear-gradient(#616161 0%, #333 10%, #222);
	border: 2px solid #000;
	padding: 20px;
	width: 400px;
	border-radius: 8px;
	box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
	align-items: center;
`;

export const Text = styled.span`
	color: white;
`;

export const Percent = styled.div`
	width: 100%;
	height: 20px;
	background: #151515;
	border-radius: 20px;
	overflow: hidden;
	margin-left: 10px;
`;

export const Progress = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background: linear-gradient(45deg, #22ffde, #2196f3);
	animation: move 3s ease-in-out infinite;

	@keyframes move {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
`;
