import { useRef, useState } from 'react';

export default function Web() {
	const inputEl = useRef();
	const [imgArr, setImgArr] = useState([]);

	const readImage = (input) => {
		// 인풋 태그에 파일이 있는 경우
		let newArr = [];
		if (input.target.files) {
			// FileReader 인스턴스 생성
			for (let i = 0; i < input.target.files.length; i++) {
				const reader = new FileReader();
				// reader가 이미지 읽도록 하기
				reader.onload = (e) => {
					newArr[i] = e.target.result;
					setImgArr([...newArr]);
				};
				reader.readAsDataURL(input.target.files[i]);
			}
		}
	};
	const handleFileBtn = () => {
		inputEl.current.click();
	};
	return (
		<>
			<div>
				{imgArr.length ? (
					imgArr.map((data) => (
						<img
							src={data}
							onClick={handleFileBtn}
							style={{ width: '500px' }}
							id="image"
							ref={inputEl}
						/>
					))
				) : (
					<div>이미지 없음</div>
				)}

				<input
					hidden={true}
					ref={inputEl}
					id="fileTag"
					type="file"
					multiple
					onChange={readImage}
				></input>
				<button onClick={handleFileBtn}>이미지 등록 버튼</button>
			</div>
		</>
	);
}
