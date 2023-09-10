import { Box } from '@chakra-ui/react'
import React from 'react'
import linkedin from './../images/LinkedinCircle.png'
import youtube from './../images/YoutubeCircle.png'
import github from './../images/GithubCircle.png'

const Socials = () => {

    // FOR THE CLOUD
    function randomText() {
        var text = "abcdefghijklmnopqrstuvwxyz";
        var letter = text[Math.floor(Math.random() * text.length)];
        return letter;
    }
    function rain() {
        let cloud = document.querySelector(".cloud");
        let e = document.createElement("div");
        let left = Math.floor(Math.random() * 310);
        let size = Math.floor(Math.random() * 1.5);
        let duration = Math.random() * 1;
        e.classList.add("text");
        cloud.appendChild(e);
        e.innerText = randomText();
        e.style.left = left + "px";
        e.style.fontSize = 0.5 + size + "em";
        e.style.animationDuration = 1 + duration + "s";

        setTimeout(function () {
            cloud.removeChild(e);
        }, 2000);
    }

    setInterval(function () {
        rain();
    }, 20);



  return (
    <Box className='componentCard'>
        <h1>Socials</h1>
        <h2 className='socialsDescription'>If you want to connect with me on other platforms!</h2>

        <Box className='container'>
            <Box className='cloud'></Box>
        </Box>

        {/* <Box display="flex" flexDirection="row" justifyContent="center" paddingTop='40px'>
            <a className='socialsAnchor' href='https://www.linkedin.com/in/alan-wang-a577b81b5/' target='_blank'>
                <img className='socials linkedinSocials' src={linkedin}/>
            </a>
            <a className='socialsAnchor' href='https://www.youtube.com/@alanwang093/featured' target='_blank'>
                <img className='socials youtubeSocials' src={youtube}/>
            </a>
            <a className='socialsAnchor' href='https://github.com/A1aNNN' target='_blank'>
                <img className='socials githubSocials' src={github}/>
            </a>
        </Box> */}
    </Box>
  )
}

export default Socials
