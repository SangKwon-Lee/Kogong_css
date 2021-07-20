import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100vw;
	height: 4500px;
	background: black;
	padding-top: 3000px;
`;

export const VideoWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

export const V1 = styled.div`
	position: absolute;
	top: 0;
	left: -${(props) => props.Test};
	width: 100%;
	height: 100%;

	clip-path: polygon(0 0, 0% 100%, 100% 100%);
`;

export const V2 = styled.div`
	position: absolute;
	top: 0;
	left: ${(props) => props.Test};
	width: 100%;
	height: 100%;
	clip-path: polygon(0 0, 100% 0%, 100% 100%);
`;

export const Video1 = styled.video`
	position: absolute;
	top: 0;
	left: 0px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const Video2 = styled.video`
	position: absolute;
	top: 0;
	left: 0px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Cotent = styled.div`
	color: white;
	font-size: 150px;
`;

export const SMContent = styled.div`
	font-size: 20px;
`;
