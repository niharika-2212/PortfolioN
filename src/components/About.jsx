import React from 'react';
import '../styles/About.css';
import image from '../assets/about-image.webp'; // Replace with your image path
function About() {
  return (
    <div className='about'>
      <div className='left-about'>
        <div className='heading'>
          About Me
        </div>
        <div className='content'>
          I'm a Full-Stack Web Developer with a passion for building functional, user-friendly websites and web applications. I specialize in creating everything from simple static websites to complex, real-time collaborative platforms.
          <br/>
          <br/>
          I enjoy working across the full development stack — designing responsive frontends and building powerful backends. Whether it's crafting clean UI with React or developing scalable APIs with Node.js and Express, I love turning ideas into interactive digital experiences.
        </div>
      </div>
      <div className="right-about">
        <img src={image} alt='about-image' className='about-image' />
      </div>
    </div>
  )
}

export default About;