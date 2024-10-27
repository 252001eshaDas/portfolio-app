import React from 'react';
import { motion } from 'framer-motion';
// import './Section.css';

const Section = ({ id, title }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>{title}</h2>
      <p>This is the {title} section.</p>
    </motion.section>
  );
};

export default Section;
