import { debounce } from 'lodash';
export default function Test2() {
  
	const handleOnChange = debounce((e) => {
		console.log(e.target.value);
	}, 500);

	return (
		<>
			<input onChange={handleOnChange}></input>
		</>
	);
}
