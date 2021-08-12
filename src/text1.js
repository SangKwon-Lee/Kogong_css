import styled from '@emotion/styled'

export const Text = styled.div`
top: 0;
left: 0;
font-size: 100px;
color: #252839;
-webkit-text-stroke: 0.3vw #383d52;
text-transform: uppercase;

`
export const Text2 = styled.div`
  font-size: 14vw;
  color: #252839;
  -webkit-text-stroke: 0.3vw #383d52;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 100px;
  color: #01fe87;
  -webkit-text-stroke: 0vw #383d52;
  border-top: 0.3px solid #01fe87;
  border-bottom: 0.3px solid #01fe87;
  overflow: hidden;
  animation: animate 3s linear infinite;

  @keyframes animate {
    0%{
      width: 0%;
    }100%{
  width:100%;
    }
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #252839;
`
export const TextWrapper = styled.div`
  position: relative;
`


