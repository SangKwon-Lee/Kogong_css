import { useState } from 'react';
import { Background, Container, Button, Text, Sun } from '../../src/sun';

export default function SunLight() {
	const [isTrue, setIsTrue] = useState(false);

	const handleIsTrue = () => {
		setIsTrue(true);
	};
	const handleIsFalse = () => {
		setIsTrue(false);
	};
	return (
		<Background>
			<Container>
				<Button onMouseOver={handleIsTrue} onMouseLeave={handleIsFalse}>
					<Text>Sun</Text>
				</Button>
				<Sun isTrue={isTrue}></Sun>
			</Container>
		</Background>
	);
}
