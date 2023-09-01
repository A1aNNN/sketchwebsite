import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Typewriter from "typewriter-effect"


const WordsTypewriter = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "my name is",
    titleThree: "Alan Wang"
  });

  return(
    <Box className='typer' display="flex" flexDirection={{base: "column", md: "column", lg: "row"}} alignItems="center">
      <div>
        <Text paddingBottom={{base: "10px", md: "10px", lg: "0px"}} paddingRight="10px">I'm a</Text>
      </div>
      <div className='typewriterText' id='WordsTypewriter'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Biochemistry + Computer Science student.",
                "coffee enthusiast.",
                "scuffed animator.",
                "retired swimmer.",
                "Mario Kart fanatic."
              ],
            }}/>
        </div>
    </Box>
  )
};

export default WordsTypewriter