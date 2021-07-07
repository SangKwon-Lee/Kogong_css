import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
`;

export const Img1 = styled.div`
	flex: 1;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	background: url('/back1.jpeg') no-repeat center/cover;
	transition: all 0.5s;
	:hover {
		flex: 2;
		font-size: 30px;
		color: white;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}
	:not(:hover) {
		flex: 0.7;
	}
`;
export const Img2 = styled.div`
	flex: 1;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('/back2.jpeg') no-repeat center/cover;
	transition: all 0.5s;
	:hover {
		flex: 2;
		font-size: 30px;
		color: white;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}
	:not(:hover) {
		flex: 0.7;
	}
`;
export const Img3 = styled.div`
	flex: 1;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('/back3.png') no-repeat center/cover;
	transition: all 0.5s;
	:hover {
		flex: 2;
		font-size: 30px;
		color: white;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}
	:not(:hover) {
		flex: 0.7;
	}
`;
export const Img4 = styled.div`
	flex: 1;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('/back4.jpeg') no-repeat center/cover;
	transition: all 0.5s;
	:hover {
		flex: 2;
		font-size: 30px;
		color: white;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}
	:not(:hover) {
		flex: 0.7;
	}
`;

export const Text = styled.div`
	font-size: 30px;
`;
