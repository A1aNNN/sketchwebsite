import React from 'react'
import { Box } from '@chakra-ui/react';


const Youtube = () => {
  return (
    <Box className='youtube'>
        <div className="ratio ratio-16x9 youtubeVideo">
            <iframe src="https://www.youtube.com/embed/0N3PAzlHetk" title="My Handstand Pushup Progression" allowfullscreen
                width="580" height="327" />
        </div>
        <Box className="youtubeText">
            My handstand pushup progression!
        </Box>
    </Box>
  )
}

export default Youtube