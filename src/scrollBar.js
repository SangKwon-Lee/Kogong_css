import styled from '@emotion/styled'

export const Wrapper = styled.div`
background: black;
width: 100vw;
height: 4000px;
`

export const Text = styled.div`
  color: white;
  padding: 50px;
  font-size: 50px;
`

export const MeterWrapper = styled.div`
  position: fixed;
  top:0;
  width: 100vw;
  height: 10px;
  /* background: #ff0; */
  pointer-events: none;
  z-index: 999;
`

export const Percent = styled.div`
position: absolute;
top:0px;
left: 0px;
font-size: 1.2em;
padding: 2px 5px;
background: white;
`

export const ScrollPath = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: #333;
`

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to left, #008aff, #00ffe7);
  animation: move 5s linear infinite;
  box-shadow: 0px 0px 36px 1px #008aff;
  @keyframes move{
    0%, 100%{
      filter: hue-rotate(0deg);
    } 
    50%{
      filter: hue-rotate(360deg);
    }
  }

`


