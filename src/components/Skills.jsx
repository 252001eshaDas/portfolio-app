import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('Front-end');

  const skills = {
    'Front-end': [
      { name: 'HTML', progress: 90 },
      { name: 'CSS', progress: 85 },
      { name: 'JavaScript', progress: 80 },
      { name: 'React', progress: 75 },
    ],
    'Back-end': [
      { name: 'Node.js', progress: 80 },
      { name: 'Express.js', progress: 75 },
      { name: 'PHP', progress: 70 },
      { name: 'Python', progress: 85 },
    ],
    'Logo Design': [
      { name: 'Adobe Illustrator', progress: 90 },
      { name: 'CorelDRAW', progress: 80 },
      { name: 'Sketch', progress: 75 },
      { name: 'Figma', progress: 70 },
    ],
    'Database': [
      { name: 'MySQL', progress: 85 },
      { name: 'MongoDB', progress: 80 },
      { name: 'PostgreSQL', progress: 75 },
      { name: 'SQLite', progress: 70 },
    ],
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="skills">
      <h2 className='section-header'>Skills</h2>
      <div className="skills-content">
        <div  className="buttons-card">
          {Object.keys(skills).map((skill, index) => (
           <div  className="buttons-card">
              <button 
              key={index} 
              className={selectedSkill === skill ? 'active' : ''} 
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </button>
           </div>
          ))}
        </div>
        <div className="details-column">
          {skills[selectedSkill].map((skill, index) => (
            <div key={index} className="skill-detail">
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <div 
                  className="progress"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
