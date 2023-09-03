import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const experienceList = [
  {
    title: "Web Developer at ",
    titleTwo: "The Debtless Students",
    location: "📍 Vancouver, BC (2023 - Present)",
    points: [
        "Develop and maintain the company website using Angular, TypeScript, HTML, and CSS, ensuring optimal functionality, usability and website responsiveness."
    ]
  },
  {
    title: "Bioinformatics Co-op Student at ",
    titleTwo: "Tokuyama lab",
    location: "📍 Vancouver, BC (2022 - 2022)",
    points: [
      "Worked with the terminal, R, and Python scripts to handle bulk RNA sequencing data to observe the transcription levels of endogenous retroviruses within patients of differing conditions.",
      "Implemented and developed a pipeline for data analysis of single cell RNA sequencing."
    ]
  },
  {
    title: "Computer Science Teaching Assistant at ",
    titleTwo: "University of British Columbia",
    location: "📍 Vancouver, BC (2020 - 2021)",
    points: [
      "Assisted in the understanding of computational concepts for over 600 non-computer-science students.",
      "Hosted office hours, lead lab sessions, held review sessions, and created solution video to lab problem sets."
    ],
  },
]

const Experience = () => {
  return (

    <Box className='componentCard'>
        <h1>
            Experiences
        </h1>

        {experienceList.map((experience, index) => {
            return (
                <Box paddingBottom="20px">
                    <h2 className='experienceTitle'>
                        {experience.title} 
                        <span className='titleTwo'>
                            {experience.titleTwo}
                        </span>
                    </h2>
                    <h2 className='experienceLocation'>
                        {experience.location}
                    </h2>
                </Box>
            )
        })}

    </Box>

    // <Box>
    //   <Text alignSelf="center" className='title' id='experiences' paddingBottom="40px">~ Experiences ~</Text>

    //   {experienceList.map((experience, index) => {
    //     return <ExperienceCard
    //       title={experience.title}
    //       titleTwo={experience.titleTwo}
    //       location={experience.location}
    //       points={experience.points}
    //       key={index}/>
    //   })}
    // </Box>
  )
}

export default Experience