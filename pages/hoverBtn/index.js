import { useState } from 'react';
import {
	Container,
	Btn,
	BtnBack,
	BtnWrapper,
	Text,
	BtnWrapper2,
} from '../../src/hoverbtn';

export default function HoverBtn() {
	const [isTrue, setIsTrue] = useState(false);
	const [isTrue2, setIsTrue2] = useState(false);

	const hadleIsTrue = () => {
		setIsTrue(true);
	};
	const handleIsfalse = () => {
		setIsTrue(false);
	};
	const handleClick = () => {
		setIsTrue2((prev) => !prev);
	};
	return (
		<Container>
			<BtnWrapper>
				<Btn
					onMouseOver={hadleIsTrue}
					onMouseLeave={handleIsfalse}
					onClick={handleClick}
					isTrue2={isTrue2}
				></Btn>
				<BtnWrapper2 onMouseOver={hadleIsTrue} onMouseLeave={handleIsfalse}>
					<Text>Hover And Click</Text>
					<BtnBack isTrue={isTrue} onClick={handleClick}></BtnBack>
				</BtnWrapper2>
			</BtnWrapper>
		</Container>
	);
}
