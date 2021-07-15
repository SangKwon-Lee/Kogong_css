import { useState } from 'react';
import { Background, Box, Btn, Search, Img } from '../../src/searchBar';
export default function SearchBar() {
	const [isTrue, setIsTrue] = useState(false);
	const [value, setValue] = useState('');
	const handleIsTrue = () => {
		setIsTrue((prev) => !prev);
		if (!isTrue) {
			setValue('');
		}
	};

	const handleOnChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<Background>
			<Box isTrue={isTrue}>
				<Search
					placeholder="Search"
					onChange={handleOnChange}
					value={value}
					isTrue={isTrue}
				></Search>
				<Btn onClick={handleIsTrue}>
					<Img isTrue={isTrue}></Img>
				</Btn>
			</Box>
		</Background>
	);
}
