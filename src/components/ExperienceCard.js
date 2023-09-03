import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ExperienceCard = ({title, titleTwo, location, points}) => {
  return (
    <Box className='componentCard'>
      <h1>Experiences</h1>

      <Box className='experienceTitles'>
        <Text className='experienceTitle'>
          {title}
        </Text>
        <Text className='experienceTitleTwo'>
          {titleTwo}
        </Text>
      </Box>
      
      <Text className='experienceLocation'>
        {location}
      </Text>

      {points.map((point, index) => {
        return <Text key={index} className="experienceText">
          - {point}
        </Text>
      })}

    </Box>
  )
}

export default ExperienceCard