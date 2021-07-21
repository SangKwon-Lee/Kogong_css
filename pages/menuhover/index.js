import { useState } from 'react';
import {
	Container,
	MenuWrapper,
	Menu,
	Menu1,
	Menu2,
} from '../../src/menuhover';

export default function MenuHover() {
	const [isTrue, setIsTrue] = useState(false);

	const handleIsTrue = (e) => {
		setIsTrue(e.target.id);
	};

	const handleIsFalse = () => {
		setIsTrue(false);
	};
	return (
		<Container>
			<MenuWrapper>
				<Menu
					id="home"
					isTrue={isTrue === 'home'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Home
				</Menu>
				<Menu1
					id="home"
					isTrue={isTrue === 'home'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Home
				</Menu1>
				<Menu2
					id="home"
					isTrue={isTrue === 'home'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Home
				</Menu2>
			</MenuWrapper>
			<MenuWrapper>
				<Menu
					id="about"
					isTrue={isTrue === 'about'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					About
				</Menu>
				<Menu1
					id="about"
					isTrue={isTrue === 'about'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					About
				</Menu1>
				<Menu2
					id="about"
					isTrue={isTrue === 'about'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					About
				</Menu2>
			</MenuWrapper>
			<MenuWrapper>
				<Menu
					id="port"
					isTrue={isTrue === 'port'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Portfolio
				</Menu>
				<Menu1
					id="port"
					isTrue={isTrue === 'port'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Portfolio
				</Menu1>
				<Menu2
					id="port"
					isTrue={isTrue === 'port'}
					onMouseOver={handleIsTrue}
					onMouseLeave={handleIsFalse}
				>
					Portfolio
				</Menu2>
			</MenuWrapper>
		</Container>
	);
}
