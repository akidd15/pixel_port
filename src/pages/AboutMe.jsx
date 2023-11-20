import React from 'react';
import '../assets/styles/AboutMe.css';
const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img
        src="/path/to/your/photo.jpg" // Replace with the actual path to your photo
        alt="Developer Avatar"
        style={{ maxWidth: '100%', borderRadius: '50%' }}
      />
      <p>
        Hi, I'm Allison! I am a passionate developer and am always wanting to learn new things. I love building web applications that
        provide meaningful experiences to users. When I'm not coding, you can
        find me spending time with friends and family, camping, binge watching a good tv show or in the kitchen cooking up something delicous!
        I decided to learn to code to challenge myself and to learn something new! 
        I value growth and seeing all the hard work that pays off. 
        Let's connect and build something
        amazing together!
      </p>
    </div>
  );
};

export default AboutMe;
