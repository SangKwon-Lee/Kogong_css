import styled from '@emotion/styled';

export const Test = styled.div`
	color: ${(props) => (props.isTrue ? 'red' : 'blue')};
`;
