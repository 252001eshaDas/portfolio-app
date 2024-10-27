import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactRef = useRef();
  const formGroupsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    formGroupsRef.current.forEach((group) => observer.observe(group));

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
      formGroupsRef.current.forEach((group) => observer.unobserve(group));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_v3qrakp',
      'template_317rj6q',
      templateParams,
      'PPt-pGVp0pxZKWPg5'
    )
    .then((response) => {
      console.log('SUCCESS!', response);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send message, please try again later.');
    });
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <h2>Let's discuss your project</h2>
      <h2 className="section-header">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {['name', 'email', 'message'].map((field, index) => (
          <div
            key={field}
            className="form-group"
            ref={(el) => (formGroupsRef.current[index] = el)}
          >
            <label htmlFor={field}>
              Your {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button className="submitContact" type="submit" ref={(el) => (formGroupsRef.current[3] = el)}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
