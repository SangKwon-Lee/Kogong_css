import styled from '@emotion/styled';

export const Example = styled.div`
	width: 100%;
	background: black;
	display: flex;
	padding: 200px;
	justify-content: center;
`;

export const Box = styled.div`
	position: relative;
	margin: 100px;
	width: 100px;
	height: 300px;
	border-radius: 5px;
	background: #7de2fc linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(-100px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 0px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;

export const Wrapper = styled.div`
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
export const Text = styled.div`
	color: white;
	text-align: center;
	font-size: 50px;
	font-family: 'Roboto';
	margin-bottom: 1000px;
`;

export const Box1 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	border-radius: 5px;
	margin: 150px 100px;
	background: #ee9ca7;
	background: -webkit-linear-gradient(to top, #ffdde1, #ee9ca7);
	background: linear-gradient(to top, #ffdde1, #ee9ca7);

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box2 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	margin: 20px 100px;
	border-radius: 5px;
	background: #2193b0; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#6dd5ed,
		#2193b0
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#6dd5ed,
		#2193b0
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box3 = styled.div`
	position: relative;
	width: 100px;
	margin: 50px 100px;
	height: 300px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #c6ffdd; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#f7797d,
		#fbd786,
		#c6ffdd
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#f7797d,
		#fbd786,
		#c6ffdd
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box4 = styled.div`
	position: relative;
	width: 100px;
	margin: 70px 100px;
	height: 300px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #373b44; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#4286f4,
		#373b44
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#4286f4,
		#373b44
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box5 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	margin: 300px 100px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #2980b9; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#ffffff,
		#6dd5fa,
		#2980b9
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#ffffff,
		#6dd5fa,
		#2980b9
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box6 = styled.div`
	position: relative;
	width: 100px;

	margin: -20px 100px;
	height: 300px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #ff0099; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#493240,
		#ff0099
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#493240,
		#ff0099
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box7 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	margin: 400px 100px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #aa4b6b; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#3b8d99,
		#6b6b83,
		#aa4b6b
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#3b8d99,
		#6b6b83,
		#aa4b6b
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box8 = styled.div`
	position: relative;
	width: 100px;
	margin: -20px 100px;
	height: 300px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #8e2de2; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#4a00e0,
		#8e2de2
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#4a00e0,
		#8e2de2
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box9 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	border-radius: 5px;
	margin: 200px 100px;
	background: #1f4037; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#99f2c8,
		#1f4037
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#99f2c8,
		#1f4037
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box10 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	margin: -100px 100px;
	border-radius: 5px;
	background: #f953c6; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#b91d73,
		#f953c6
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#b91d73,
		#f953c6
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box11 = styled.div`
	position: relative;
	width: 100px;

	height: 300px;
	margin: 120px 100px;
	border-radius: 5px;
	background: #7f7fd5; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#91eae4,
		#86a8e7,
		#7f7fd5
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#91eae4,
		#86a8e7,
		#7f7fd5
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box12 = styled.div`
	position: relative;
	margin: -300px 100px;
	width: 100px;
	height: 300px;
	border-radius: 5px;
	background: #f12711; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#f5af19,
		#f12711
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#f5af19,
		#f12711
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box13 = styled.div`
	position: relative;

	width: 100px;
	height: 300px;
	margin: 00px 100px;
	border-radius: 5px;
	background: #8360c3; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#2ebf91,
		#8360c3
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#2ebf91,
		#8360c3
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box14 = styled.div`
	position: relative;
	width: 100px;
	margin: -200px 100px;
	height: 300px;
	border-radius: 5px;
	background: #654ea3; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#eaafc8,
		#654ea3
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#eaafc8,
		#654ea3
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box15 = styled.div`
	position: relative;
	width: 100px;
	margin: -200px 100px;
	height: 300px;
	border-radius: 5px;
	background: #009fff; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#ec2f4b,
		#009fff
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#ec2f4b,
		#009fff
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box16 = styled.div`
	position: relative;
	width: 100px;
	margin: -100px 100px;
	height: 300px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #ff416c; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#ff4b2b,
		#ff416c
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#ff4b2b,
		#ff416c
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box17 = styled.div`
	position: relative;
	width: 100px;
	margin: 100px 100px;
	height: 300px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #59c173; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#5d26c1,
		#a17fe0,
		#59c173
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#5d26c1,
		#a17fe0,
		#59c173
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box18 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	margin: -70px 100px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #a8c0ff; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#3f2b96,
		#a8c0ff
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#3f2b96,
		#a8c0ff
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
export const Box19 = styled.div`
	position: relative;
	width: 100px;
	height: 300px;
	margin: 120px 100px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #11998e; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#38ef7d,
		#11998e
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#38ef7d,
		#11998e
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;

export const Box20 = styled.div`
	width: 100px;
	height: 300px;
	margin: 100px;
	margin-bottom: 30px;
	border-radius: 5px;
	background: #ee9ca7;
	background: -webkit-linear-gradient(to top, #ffdde1, #ee9ca7);
	background: linear-gradient(to top, #ffdde1, #ee9ca7);

	animation-duration: 3s;
	animation-fill-mode: forwards;
	@keyframes move {
		from {
			opacity: 0;
			transform: translate(0px, 0px);
		}
		to {
			opacity: 1;
			transform: translate(0px, 100px);
		}
	}
	@keyframes back {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
