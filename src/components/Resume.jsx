import React, { useEffect, useRef, useState } from 'react';
import './Resume.css';
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptop, FaPalette } from 'react-icons/fa';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');

  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active"); // Optional: remove active class when not intersecting
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, { threshold: 0.2 });

    // Capture current sectionsRef in a variable to use in cleanup
    const currentSections = sectionsRef.current.slice(); // Copy current refs to a variable

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Content for each section
  const sections = {
    education: (
      <div className="resume-section" ref={(el) => sectionsRef.current[0] = el}>
        <h2>Education</h2>
        <p>BTech in Computer Science & Engineering (CSE) from MAKAUT, WB with a CGPA of 9.21.</p>
        <p>Diploma in Computer Science & Technology with 73.5% distinction.</p>
        <p>Madhyamik from Chandernagore Lalbagan Balika Vidyalaya with a score of 78%.</p>
      </div>
    ),
    experience: (
      <div className="resume-section" ref={(el) => sectionsRef.current[1] = el}>
        <h2>Experience</h2>
        <p>Software Developer at Inspiring Life Technology Pvt Ltd., Kolkata since September 2022.</p>
        <p>Full-stack development, client projects, API integrations, and more.</p>
      </div>
    ),
    skills: (
      <div className="resume-section" ref={(el) => sectionsRef.current[2] = el}>
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: ReactJS, Angular, Meteor JS, Java.</li>
          <li>Databases: MySQL, MongoDB.</li>
          <li>Soft Skills: Fluent in English, Hindi, Bengali; excellent communication and patience.</li>
        </ul>
      </div>
    ),
    projects: (
      <div className="resume-section" ref={(el) => sectionsRef.current[3] = el}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project 1</strong> <br />
            <strong>Platform:</strong> Visual Studio, React JS, Express JS, Node JS, MongoDB <br />
            <strong>Description:</strong> A personal blogging website.
          </li>
          <li>
            <strong>Project 2</strong> <br />
            <strong>Platform:</strong> Visual Studio, React JS, Email JS <br />
            <strong>Team Size:</strong> Independent <br />
            <strong>Description:</strong> A professional portfolio website.
          </li>
        </ul>
      </div>
    ),
    interests: (
      <div className="resume-section" ref={(el) => sectionsRef.current[4] = el}>
        <h2>Interests</h2>
        <p>Blogging, Traveling, and teaching watercolor at Srishti Foundation since 2021.</p>
      </div>
    ),
  };

  return (
    <div>
      <h2 className='section-header'>Resume</h2>
      <section className="resume" id="resume">
        <div className="resume-sidebar">
          <nav>
            <ul>
              <li
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => setActiveSection('education')}
              >
                <FaGraduationCap className="icon" /> Education
              </li>
              <li
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setActiveSection('experience')}
              >
                <FaBriefcase className="icon" /> Experience
              </li>
              <li
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => setActiveSection('skills')}
              >
                <FaCode className="icon" /> Skills
              </li>
              <li
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setActiveSection('projects')}
              >
                <FaLaptop className="icon" /> Projects
              </li>
              <li
                className={activeSection === 'interests' ? 'active' : ''}
                onClick={() => setActiveSection('interests')}
              >
                <FaPalette className="icon" /> Interests
              </li>
            </ul>
          </nav>
        </div>
        <div className="resume-content">
          {sections[activeSection]}
        </div>
      </section>
    </div>
  );
};

export default Resume;
