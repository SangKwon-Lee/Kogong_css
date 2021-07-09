import { useEffect } from 'react';
import {
	Example,
	Wrapper,
	Text,
	Box1,
	Box,
	Box2,
	Box3,
	Box4,
	Box5,
	Box6,
	Box7,
	Box8,
	Box9,
	Box10,
	Box11,
	Box12,
	Box13,
	Box14,
	Box15,
	Box16,
	Box17,
	Box18,
	Box19,
	Box20,
	TextWrapper,
} from '../../src/intersection';
export default function Transition() {
	useEffect(() => {
		let options = {
			root: null,
			rootMargin: '0px 0px 0px 0px',
			threshold: 0.1,
		};
		setTimeout(() => {
			const io = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style = `animation-name: move;`;
					} else {
						entry.target.style = 'animation-name: back;';
					}
				});
			}, options);
			for (let i = 0; i < 20; i++) {
				const boxElList = document.getElementById(`${i}`);
				io.observe(boxElList);
			}
		}, 1000);
	}, []);
	return (
		<>
			<Example id="Container">
				<Wrapper>
					<TextWrapper>
						<Text>Intersection Observer</Text>
					</TextWrapper>
					<Box id="0"></Box>
					<Box1 id="1"></Box1>
					<Box2 id="2"></Box2>
					<Box3 id="3"></Box3>
					<Box4 id="4"></Box4>
					<Box5 id="5"></Box5>
					<Box6 id="6"></Box6>
					<Box7 id="7"></Box7>
					<Box8 id="8"></Box8>
					<Box9 id="9"></Box9>
					<Box10 id="10"></Box10>
					<Box11 id="11"></Box11>
					<Box12 id="12"></Box12>
					<Box13 id="13"></Box13>
					<Box14 id="14"></Box14>
					<Box15 id="15"></Box15>
					<Box16 id="16"></Box16>
					<Box17 id="17"></Box17>
					<Box18 id="18"></Box18>
					<Box19 id="19"></Box19>
					{/* <Box20 id="20"></Box20> */}
				</Wrapper>
			</Example>
		</>
	);
}
