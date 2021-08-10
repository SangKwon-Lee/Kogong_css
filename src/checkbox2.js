import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

export const Wrapper = styled.div`
margin:10px;
`
export const Check = styled.input`
  display: none;
`

export const Label = styled.label`
  cursor: pointer;
`

export const Text = styled.span`
  display: inline-block;
  background: ${props => props.isCheck ? "#e91e63" : "#424242"};
  color: ${props => props.isCheck ? "#fff" : "#555"};
  box-shadow: ${props => props.isCheck ? "0 2px 20px #e91e63" : "none"};;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  border-radius: 30px;
  transition: 0.5s;
  padding: 15px 30px;
  user-select: none;
  overflow: hidden;

`
