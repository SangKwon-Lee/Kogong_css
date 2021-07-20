import { useEffect, useState } from 'react';
import {
	Video1,
	Video2,
	VideoWrapper,
	Cotent,
	SMContent,
	Wrapper,
	V1,
	V2,
} from '../../src/split';

export default function Split() {
	const [Test, setTest] = useState();
	useEffect(() => {
		setTimeout(() => {
			window.addEventListener('scroll', function () {
				setTest(window.scrollY * 0.5 + 'px');
			});
		}, 300);
	}, []);

	return (
		<>
			<Wrapper>
				<VideoWrapper>
					<V1 Test={Test}>
						<Video1 id="video1" autoPlay loop muted src="video.mp4"></Video1>
					</V1>

					<V2 Test={Test}>
						<Video2 id="video2" autoPlay loop muted src="video.mp4"></Video2>
					</V2>
				</VideoWrapper>
				<Cotent>
					Split Video <SMContent>asdasdadasdghfksgfhjasfasjhf</SMContent>
				</Cotent>
			</Wrapper>
		</>
	);
}
