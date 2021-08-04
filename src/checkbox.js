import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.isTrue ? "#092c3e" : "#fff"};
    transition: 0.8s;
`

export const Check = styled.input`
  -webkit-appearance: none;
  visibility: hidden;
  display: none;
`

export const Label = styled.label`
`

export const CheckSpan = styled.span`
position: relative;
  display: block;
  width: 40px;
  height: 20px;
  background: ${props => props.isTrue ? "#fff" : "#092c3e"};
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
`

export const Circle = styled.div`
  position: absolute;
  top:2px;
  left: 2px;
  background: ${props => props.isTrue ? "#092c3e" : "#fff"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: 0.5s;
  transform:  ${(props) =>
    props.isTrue ? `translate(20px)` : `translate(0px)`};
`