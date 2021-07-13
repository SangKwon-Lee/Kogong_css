import { useRef } from 'react';

export default function Web() {
	const inputEl = useRef();

	const readImage = (input) => {
		// 인풋 태그에 파일이 있는 경우
		if (input.target.files && input.target.files[0]) {
			// FileReader 인스턴스 생성
			const reader = new FileReader();
			// reader가 이미지 읽도록 하기
			reader.readAsDataURL(input.target.files[0]);
			// 이미지가 로드가 된 경우
			reader.onload = (e) => {
				const previewImage = document.getElementById('image');
				previewImage.src = e.target.result;
			};
		}
	};

	


	const handleFileBtn = () => {
		inputEl.current.click();
	};

	return (
		<>
			<div>
				<img onClick={handleFileBtn} style={{ width: '500px' }} id="image" />
				<input
					hidden={true}
					ref={inputEl}
					id="fileTag"
					type="file"
					onChange={readImage}
				></input>
				<button onClick={handleFileBtn}>이미지 등록 버튼</button>
			</div>
		</>
	);
}
