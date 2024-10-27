import React from 'react';
import Slider from 'react-slick';
import { FaMobileAlt, FaLaptopCode, FaPencilAlt, FaPortrait, FaPalette } from 'react-icons/fa';
import './Services.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const services = [
    { 
      title: "Responsive Mobile Apps", 
      description: "Design and development of responsive mobile applications.", 
      icon: <FaMobileAlt />,
      image: "/images/mobile-app.jpg" 
    },
    { 
      title: "Responsive Websites", 
      description: "Creation of high-performance, responsive websites.", 
      icon: <FaLaptopCode />,
      image: "/images/website.jpg" 
    },
    { 
      title: "Logo Design", 
      description: "Professional logo design to enhance brand identity.", 
      icon: <FaPencilAlt />,
      image: "/images/logo.jpg" 
    },
    { 
      title: "Portraits", 
      description: "Custom portraits and illustrations.", 
      icon: <FaPortrait />,
      image: "/images/portrait.jpg" 
    },
    { 
      title: "UI & UX Design", 
      description: "User interface and user experience design for applications.", 
      icon: <FaPalette />,
      image: "/images/ui-ux.jpg" 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="services" className="services">
      <h2 className='section-header'>My Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            {/* <img className="service-image" src={service.image} alt={service.title} /> */}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
