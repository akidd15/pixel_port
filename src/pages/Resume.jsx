import React from 'react';

const Resume = () => {
  const proficiencyList = [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
    'SQL',
    'RESTful APIs',
    // Add more proficiencies as needed
  ];

  return (
    <div>
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a
          href="/path/to/your/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume.pdf
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencyList.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
