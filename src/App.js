import { Box, ChakraProvider } from '@chakra-ui/react'
import React, { useState } from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Navbar from './components/Navbar';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ChakraProvider>
      <Box className='website'>
        <Navbar setActiveSlide={setActiveSlide}/>
        <div className="App">
          <ImageSlider slides={SliderData} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;

