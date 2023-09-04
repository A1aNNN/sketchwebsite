// AnimatedScribble.js
import React from 'react';
import './AnimatedScribble.css'; // Import your CSS styles for the animation

const AnimatedScribble = ({ isVisible }) => {
  return isVisible ? <div className="animated-scribble"></div> : null;
};

export default AnimatedScribble;
