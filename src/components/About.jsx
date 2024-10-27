import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, { threshold: 0.1 });
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section id="about-me" className="about-me fade-in-section" ref={aboutRef}>
      <h2 className="section-header" style={{ marginBottom: "50px" }}>About</h2>
      <div className="container">
        <div className="about-me-content"><br />
          <div className="about-image">
            <img src="/images/dp3.jpg" alt="Esha Das" />
          </div>
          <div className="about-details">
            <h3>Artist & Developer</h3>
            <p>
              Nomoskar...!! Myself Esha Das. I live in West Bengal. I am a Web Developer as well as an Artist.
              If you want your personal website you can contact me. You can buy crafts. You can contact me for
              paid Commission artworks.
            </p>
            <a href="#resume" className="download-btn">More info</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
