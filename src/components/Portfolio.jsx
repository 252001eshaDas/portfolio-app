import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    { category: 'arts', title: 'Farmer', image: "https://ik.imagekit.io/qjwof6w9fff/Drawings/IMG_20201209_203735_460_a3mZA8O3d.jpg?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1656571449420", description: 'Pencil shade' },
    { category: 'arts', title: 'Flavour of Rajansthan', image: "https://ik.imagekit.io/qjwof6w9fff/Drawings/IMG_20190421_091722_299_gy-E1CrJg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656571298373", description: 'Transparent watercolor' },
    { category: 'arts', title: 'Ray', image: "https://ik.imagekit.io/qjwof6w9fff/Drawings/IMG_20200502_103843_919_1g8X6Vi3A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656571317985", description: 'Pencil shade' },
    { category: 'arts', title: 'Hope', image: "https://ik.imagekit.io/qjwof6w9fff/Drawings/IMG_20201010_215135_405_map9oNxVU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656571321187", description: 'Inktober challange, her inner child is in hope, that one day she will fly away' },
    { category: 'ui-ux-design', title: 'Share-O-Media', image: 'https://ik.imagekit.io/qjwof6w9fff/WEBSITES/Share_o_media.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656609436384' },
    { category: 'craft', title: 'Vintage', image: 'https://ik.imagekit.io/qjwof6w9fff/Drawings/1658076999810__Z_-ykwEi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658077141877' },
    { category: 'photography', title: 'flower', image: 'https://ik.imagekit.io/qjwof6w9fff/Drawings/1657034833824_ljGbnzsFZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657036053504'},
    { category: 'photography', title: 'sunset', image: 'https://ik.imagekit.io/qjwof6w9fff/Drawings/1657016460965_qQP5EYvnm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657036080415'},
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio">
      <h2 className='section-header'>PORTFOLIO</h2>
      <p>If you don't believe in yourself, who will?</p>
      <div className="portfolio-categories">
        <span className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>All</span>
        <span className={selectedCategory === 'arts' ? 'active' : ''} onClick={() => setSelectedCategory('arts')}>Arts</span>
        <span className={selectedCategory === 'ui-ux-design' ? 'active' : ''} onClick={() => setSelectedCategory('ui-ux-design')}>UI UX Design</span>
        <span className={selectedCategory === 'craft' ? 'active' : ''} onClick={() => setSelectedCategory('craft')}>Craft</span>
        <span className={selectedCategory === 'photography' ? 'active' : ''} onClick={() => setSelectedCategory('photography')}>Photography</span>
      </div>
      <div className="portfolio-content">
        {filteredItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
