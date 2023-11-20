import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      imageUrl: '/path/to/project1-image.jpg', // Replace with actual image path
      deployedUrl: 'https://example.com/project1', // Replace with the deployed URL
      githubUrl: 'https://github.com/yourusername/project1', // Replace with the GitHub repository URL
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img
              src={project.imageUrl}
              alt={`${project.title} Screenshot`}
              className="project-image"
            />
            <div className="project-links">
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
