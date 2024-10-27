import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        '<span style="color:#a771ebd4;">Developer</span>', 
        '<span style="color:#a771ebd4;">Artist</span>', 
        '<span style="color:#a771ebd4;">UI/UX Specialist</span>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('#typed', options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/Resume.docx'; 
    link.download = 'Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, My Name Is</h1>
          <h2>Esha Das</h2>
          <h3>I'm a <span id="typed"></span></h3>
          
          <p>From India, Kolkata. I have rich experience in web and app developement, also I am a logo designer. I love to talk with you about our unique journey.</p>
          <div className="home-buttons">
            <button onClick={handleDownloadCV}>Download CV</button>
            <button onClick={handleScrollToContact}>Hire me</button>
          </div>
        </div>

        {/* Container for both images */}
        <div className="image-container">
          {/* Back Image (Moving Left-Right) */}
          

          {/* Front Image (Moving Up-Down) */}
          <motion.div
            className="front-image"
            animate={{ y: [0, -15, 0] }} /* Up-Down movement */
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/images/dp2.jpg" alt="Esha Das" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
