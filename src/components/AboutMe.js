import { Box } from '@chakra-ui/react'
import React from 'react'
import WordsTypewriter from './WordsTypewriter'

const AboutMe = () => {
  return (
    <Box className='componentCard'>
      <h1>
        About me
      </h1>

      <h2 className='introduction'>
        Hey! My name's Alan!
      </h2>

      <WordsTypewriter/>

      {/* <h2 className='aboutText'>
        Just an undergraduate student trekking through life.
      </h2> */}
      <h2 className='aboutText'>
        Just an undergraduate student trekking through life. 
        When I'm not in class or working, you might catch me at the gym getting a workout in, or chilling at home struggling to make a 3D donut on Blender.
      </h2>
    </Box>
  )
}

export default AboutMe