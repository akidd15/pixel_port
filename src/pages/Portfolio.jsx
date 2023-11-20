import React from 'react';
import '../assets/styles/Portfolio.css';
import '../assets/styles/Footer.css';
import MoneyMagnetImage from '../assets/images/MoneyMagnet.png';
import DatePlannerImage from '../assets/images/DatePlanner.png';
import PasswordGeneratorImage from '../assets/images/PasswordGenerator.png';
import NoteTakerImage from '../assets/images/NoteTaker.png';
import IntelliStock from '../assets/images/IntelliStock.jpeg';
import DuckCreek from '../assets/images/DuckCreek.jpeg';

const Portfolio = () => {
  const projects = [
    {
      title: "Money Magnet",
      imageUrl: MoneyMagnetImage,
      deployedUrl: 'https://moneymagnet.up.railway.app/', 
      githubUrl: 'https://github.com/MrPolkadot/notyomamasfinances', 
    
},
{
  title: "Date Planner",
  imageUrl: DatePlannerImage,
  deployedUrl: 'https://greeny467.github.io/date-planning-project-website/', 
  githubUrl: 'https://github.com/Greeny467/date-planning-project-website', 
},
{
  title:"Password Generator",
  imageUrl: PasswordGeneratorImage,
  deployedUrl: 'https://akidd15.github.io/passGen/',
  githubUrl:'https://github.com/akidd15/passGen'
},
{
  title:"Note Taker",
  imageUrl: NoteTakerImage,
  deployedUrl: 'https://notifyme11-1554b9a337e7.herokuapp.com/notes',
  githubUrl:'https://github.com/akidd15/notifyme'
},
{
  title:"IntelliStock Sample Photo",
  imageUrl: IntelliStock,
  deployedUrl: "https://www.google.com/",
  githubUrl: "https://github.com/akidd15/IntelliStock"
},
{
  title:"Duck Creek",
  imageUrl: DuckCreek,
  deployedUrl:"https://www.google.com/",
  githubUrl: "https://github.com/akidd15"
}

]

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className='project-title'>{project.title}</h3>
            <div className='project-image-container'>
            <img
              src={project.imageUrl}
              alt={`${project.title} Screenshot`}
              className="project-image"
            />
            <div className="project-links">
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                Deployed App
                <br>
                </br>
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
      </div>
        ))}
     </div>
    
    </div>
  );
};

export default Portfolio;
