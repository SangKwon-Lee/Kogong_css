import { Test } from '../../src/test2';

export default function Test2() {
	const List = ['사과', '딸기', '바나나'];

	return (
		<>
			{List.map((data) => (
				<Test>{data}</Test>
			))}
		</>
	);
}
