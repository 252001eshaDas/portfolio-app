import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
      {
        name: 'John Doe',
        role: 'CEO at TechCorp',
        message: 'Esha is an exceptional web designer! Her attention to detail and ability to bring our vision to life was remarkable.',
      },
      {
        name: 'Jane Smith',
        role: 'Marketing Manager at Webify',
        message: 'Working with Esha was a pleasure. She is highly professional and delivered the project on time, exceeding our expectations!',
      },
      {
        name: 'David Wilson',
        role: 'Freelance Developer',
        message: 'Esha is a talented and creative individual. Her designs are stunning and her work ethic is commendable. Highly recommend!',
      },
    ];
  
    return (
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials-list">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <p>"{testimonial.message}"</p>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
 export default Testimonials;  