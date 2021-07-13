import { useState } from 'react';
import {
	Container,
	Card,
	Line,
	Line2,
	Line3,
	Line4,
	Line5,
	Line6,
	Line7,
	Line8,
	Line9,
	Line10,
	Line11,
	Line12,
	Text,
} from '../../src/snake';
export default function Snake() {
	const [isTrue, setIsTrue] = useState(false);
	const [isTrue2, setIsTrue2] = useState(false);
	const [isTrue3, setIsTrue3] = useState(false);
	const handleIsTure = () => {
		setIsTrue(true);
	};
	const handleIsFalse = () => {
		setIsTrue(false);
	};
	const handleIsTure2 = () => {
		setIsTrue2(true);
	};
	const handleIsFalse2 = () => {
		setIsTrue2(false);
	};
	const handleIsTure3 = () => {
		setIsTrue3(true);
	};
	const handleIsFalse3 = () => {
		setIsTrue3(false);
	};
	return (
		<Container>
			<Card onMouseOver={handleIsTure} onMouseLeave={handleIsFalse}>
				<Text>Snake__Border</Text>
				<Line isTrue={isTrue}></Line>
				<Line2 isTrue={isTrue}></Line2>
				<Line3 isTrue={isTrue}></Line3>
				<Line4 isTrue={isTrue}></Line4>
			</Card>
			<Card onMouseOver={handleIsTure2} onMouseLeave={handleIsFalse2}>
				<Text>Snake__Border</Text>
				<Line5 isTrue2={isTrue2}></Line5>
				<Line6 isTrue2={isTrue2}></Line6>
				<Line7 isTrue2={isTrue2}></Line7>
				<Line8 isTrue2={isTrue2}></Line8>
			</Card>
			<Card onMouseOver={handleIsTure3} onMouseLeave={handleIsFalse3}>
				<Text>Snake__Border</Text>
				<Line9 isTrue3={isTrue3}></Line9>
				<Line10 isTrue3={isTrue3}></Line10>
				<Line11 isTrue3={isTrue3}></Line11>
				<Line12 isTrue3={isTrue3}></Line12>
			</Card>
		</Container>
	);
}
