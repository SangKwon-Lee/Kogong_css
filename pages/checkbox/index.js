import { useState } from 'react'
import { Check, Label, CheckSpan, Wrapper, Circle } from '../../src/checkbox'

export default function CheckBoxUI() {

  const [isTrue, setIsTrue] = useState(false)


  const handelClick = () => {
    setIsTrue(prev => !prev)
  }


  return (
    <Wrapper isTrue={isTrue}>
      <Label htmlFor="check">
        <Check id="check" type="checkbox"></Check>
        <CheckSpan onClick={handelClick} isTrue={isTrue}>
          <Circle isTrue={isTrue}></Circle>
        </CheckSpan>
      </Label>
    </Wrapper>
  )

}
