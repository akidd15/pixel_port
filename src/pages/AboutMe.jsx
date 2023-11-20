import React from 'react';
import '../assets/styles/AboutMe.css';
import Portfolio from '../assets/images/Portfolio.jpeg';

const AboutMe = () => {
  return (
    <div>
    <h2>About Me</h2>
    <img
      src={Portfolio}
      alt="Developer Avatar" className='about-me-image'
      style={{ maxWidth: '40%', borderRadius: '50%' }}
    />
      <p>
        Hi, I'm Allison! I am a passionate developer and am always wanting to learn new things. I love building web applications that
        provide meaningful experiences to users. When I'm not coding, you can
        find me spending time with friends and family, camping, binge watching a good tv show or in the kitchen cooking up something delicious!
        </p>
        <p>
        I decided to learn to code to challenge myself and to learn something new! 
        I value growth and seeing all the hard work that pays off. 
        Let's connect and build something
        amazing together!
      </p>
    </div>
    
  );
};

export default AboutMe;
