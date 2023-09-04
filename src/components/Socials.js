import { Box } from '@chakra-ui/react'
import React from 'react'
import linkedin from './../images/LinkedIn.png'
import youtube from './../images/YouTube.png'
import github from './../images/Github.png'

const Socials = () => {
  return (
    <Box className='componentCard'>
        <h1>Socials</h1>
        <h2 className='socialsDescription'>If you want to connect with me on other platforms!</h2>

        <Box display="flex" flexDirection="row" justifyContent="center" paddingTop='40px'>
            <a className='' href='https://www.linkedin.com/in/alan-wang-a577b81b5/' target='_blank'>
                <img className='socials linkedin' src={linkedin}/>
            </a>
            <a className='' href='https://www.youtube.com/@alanwang093/featured' target='_blank'>
                <img className='socials youtube' src={youtube}/>
            </a>
            <a className='' href='https://github.com/A1aNNN' target='_blank'>
                <img className='socials github' src={github}/>
            </a>
        </Box>
    </Box>
  )
}

export default Socials
