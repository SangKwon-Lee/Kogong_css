import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: black;
	overflow: hidden;
`;

export const Wave1 = styled.div`
	position: absolute;
	bottom: 0;
	left: 0px;
	width: 100%;
	height: 198px;
	background: url('/wave.svg');
	animation-name: 'wave';
	z-index: 1000;
	opacity: 1;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	@keyframes wave {
		from {
			background-position-x: 0px;
		}
		to {
			background-position-x: 1600px;
		}
	}
`;

export const Wave2 = styled.div`
	position: absolute;
	bottom: 10px;
	left: 0;
	width: 100%;
	height: 198px;
	background: url('/wave.svg');
	animation-name: 'wave2';
	z-index: 999;
	opacity: 0.5;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	animation-delay: -5s;
	@keyframes wave2 {
		from {
			background-position-x: 0px;
		}
		to {
			background-position-x: -1600px;
		}
	}
`;
export const Wave3 = styled.div`
	position: absolute;
	bottom: 15px;
	left: 0;
	width: 100%;
	height: 198px;
	background: url('/wave.svg');
	animation-name: 'wave3';
	z-index: 998;
	opacity: 0.2;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	animation-delay: -2s;
	@keyframes wave3 {
		from {
			background-position-x: 0px;
		}
		to {
			background-position-x: 1600px;
		}
	}
`;
export const Wave4 = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	width: 100%;
	height: 198px;
	background: url('/wave.svg');
	animation-name: 'wave4';
	z-index: 997;
	opacity: 0.7;
	animation-delay: -5s;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	@keyframes wave4 {
		from {
			background-position-x: 0px;
		}
		to {
			background-position-x: -1600px;
		}
	}
`;
