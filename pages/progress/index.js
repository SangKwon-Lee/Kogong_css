import { useState } from 'react';
import {
	Box,
	Percent,
	SVG,
	Circle,
	Circle2,
	Number,
	Text,
	Container,
} from '../../src/progress';

export default function ProgressUI() {
	const [per, setPer] = useState(80);
	const [late, setLate] = useState(440 - (440 * per) / 100);

	return (
		<>
			<Container>
				<Box>
					<Percent>
						<SVG>
							<Circle cx="70" cy="70" r="70"></Circle>
							<Circle2 late={late} cx="70" cy="70" r="70"></Circle2>
						</SVG>
						<Number>{per}%</Number>
					</Percent>
					<Text>progress</Text>
				</Box>
			</Container>
		</>
	);
}
