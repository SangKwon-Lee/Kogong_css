import { useEffect } from 'react'
import { Wrapper, Text, MeterWrapper, Percent, ScrollPath, ProgressBar } from '../../src/scrollBar'

export default function ScrollBarUI() {

  useEffect(() => {
    setTimeout(() => {
      let cursorMeter = document.getElementById("MeterWrapper");


      let percent = document.getElementById("percent");
      let pregressBar = document.getElementById("progressBar");

      let totalHeight = document.body.scrollHeight - window.innerHeight;

      window.onscroll = function () {
        let progress = (window.pageYOffset / totalHeight) * 100;
        pregressBar.style.width = progress + "%";
      }


    }, 1000);


  }, [])

  return <Wrapper>
    <Text>Please Scroll Down</Text>

    <MeterWrapper id="MeterWrapper">
      <ScrollPath id="scrollPath">
        <ProgressBar id="progressBar"></ProgressBar>
      </ScrollPath>
    </MeterWrapper>
  </Wrapper>
}