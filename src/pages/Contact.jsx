import React, { useState } from 'react';
import '../style/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return (
    <div className='contact-page'>
      <section className='contact-hero'>
        <div className='container'>
          <div className='hero-content hero-content-column'>
            <div className='hero-text'>
              <h1>Contact Us</h1>
              <p>Let's connect and make your moments unforgettable. Reach out for bookings, collaborations, or any photography inquiries. Our team is here to help you every step of the way.</p>
              <p className='hero-highlight'>Professional. Creative. Reliable.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-content'>
        <div className='container'>
          <div className='contact-grid'>
            <div className='contact-info'>
              <h2>Contact Information</h2>
              <div className='info-item'>
                <h3>Studio Address</h3>
                <p>123 Photography Street, Studio 45<br />New York, NY 10001</p>
              </div>
              <div className='info-item'>
                <h3>Phone</h3>
                <a href="tel:+11234567890" className='info-link'>+1 (123) 456-7890</a>
              </div>
              <div className='info-item'>
                <h3>Email</h3>
                <a href="mailto:contact@nrphotography.com" className='info-link'>contact@nrphotography.com</a>
              </div>
              <div className='info-item'>
                <h3>Follow Us</h3>
                <div className='social-links'>
                  <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className='social-icon instagram'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='social-icon facebook'>
                    <i className='fab fa-facebook'></i>
                  </a>
                  <a href="https://youtube.com" target='_blank' rel='noopener noreferrer' className='social-icon youtube'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='contact-form'>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor="name">Your Name</label>
                  <input type="text"
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor="subject">Subject</label>
                  <input type="text"
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor="message">Message</label>
                  <textarea name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type='submit' className='submit-btn'>Send Message</button>
              </form>
            </div>
          </div>
          <div className='map-container'>
            <h2>Our Location</h2>
            <div className='map'>
              <iframe title='NR Photography Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.987844924164!3d40.74844047138971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus"
                frameBorder="0"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact