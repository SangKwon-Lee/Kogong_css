import styled from '@emotion/styled';
import SearchIcon from '@material-ui/icons/Search';
export const Background = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	padding-top: 200px;
	background: #ff5d68;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	background: #2f3640;
	height: 40px;
	padding: 10px;
	border-radius: 40px;
	outline: none;
	transition: all 0.5s ease-in-out;
	:hover {
		box-shadow: 0 0 24px #2f3640, 0 0 24px rgba(0, 0, 0, 0.8);
	}
`;

export const Search = styled.input`
	border: none;
	background: none;
	float: left;
	color: white;
	font-size: 16px;
	transition: 0.4s;
	width: ${(props) => (props.isTrue ? '240px' : '0px')};
	padding: 0px ${(props) => (props.isTrue ? '6px' : '0px')};
	outline: none;
`;

export const Btn = styled.button`
	width: 20px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	color: #eb5757;
	background: transparent;
	border: none;
	transition: 0.4s;
`;

export const Img = styled(SearchIcon)`
	color: ${(props) => (props.isTrue ? 'white' : '#eb5757')};

	background: #2f3640;
`;
