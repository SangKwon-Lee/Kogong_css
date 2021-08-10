import { useState } from "react"
import { Check, Label, Text, Container, Wrapper } from "../../src/checkbox2"

export default function Checkbox2() {

  const [isCheck, setIsCheck] = useState(false)

  const handleCheck = () => {
    setIsCheck(prev => !prev)
    console.log(isCheck)

  }

  return (
    <Container>
      <Wrapper>
        <Label htmlFor="seoul">
          <Check onClick={handleCheck} type="checkbox" id="seoul" name="seoul"></Check>
          <Text isCheck={isCheck}>Seoul</Text>
        </Label>
      </Wrapper>

    </Container>
  )
}