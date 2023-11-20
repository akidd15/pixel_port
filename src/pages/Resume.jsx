import React from 'react';
import '../assets/styles/Resume.css';

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1gyS_N90e5mIkMBZf6RPUSRM4DysU3j0n/view?usp=sharing'
  return (
    <div>
      <h2>Proficiencies</h2>
      <ul className="proficiency-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>NOSQL</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>API's</li>
        
        {/* Add more proficiencies as needed */}
      </ul>
      <p>
        Download my resume:{' '}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume.pdf
        </a>
      </p>
    </div>
  );
};

export default Resume;
