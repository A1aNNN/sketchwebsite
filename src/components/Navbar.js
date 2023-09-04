import { useRef } from "react"
import {FaTimes, FaBars} from "react-icons/fa"
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import "../App.css"


const Navbar = ({ setActiveSlide }) => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


  return (
    <header className="header">
        <Text className="name">Alan Wang.</Text>
        <Box paddingBottom="20px">
            <nav ref={navRef}>
            <button onClick={() => setActiveSlide(0)} className="navbarHeading">
                About me
            </button>
            <button onClick={() => setActiveSlide(1)} className="navbarHeading">
                Experiences
            </button>
            <button onClick={() => setActiveSlide(2)} className="navbarHeading">
                Projects
            </button>
            <button onClick={() => setActiveSlide(3)} className="navbarHeading">
                For Fun
            </button>
            <button onClick={() => setActiveSlide(4)} className="navbarHeading">
                Socials
            </button>
            </nav>
        </Box>
    </header>
  )
}

export default Navbar