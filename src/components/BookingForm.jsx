import React, { useState } from 'react';
import { sendForm } from '@emailjs/browser';
import { 
  FaCamera, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarAlt,
  FaComment,
  FaGlassCheers
} from 'react-icons/fa';
import { 
  MdPortrait, 
  MdEvent, 
  MdShoppingBag, 
  MdBusiness 
} from 'react-icons/md';
// import { FaGlassCheers } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import '../style/booking.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '', 
    date: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const services = {
        'Portrait Photography': 'Portrait',
        'Wedding Photography': 'Wedding',
        'Event Photography': 'Event',
        'Product Photography': 'Product',
        'Commercial Photography': 'Commercial'
      };

      const whatsappMessage = `*New Booking Request*%0A%0A
      *Name:* ${formData.firstName} ${formData.lastName}%0A
      *Email:* ${formData.email}%0A
      *Phone:* ${formData.phone}%0A
      *Service:* ${services[formData.service]}%0A
      *Date:* ${formData.date}%0A
      *Message:* ${formData.message}`;

      window.open(`https://wa.me/919390228526?text=${whatsappMessage}`, '_blank');

      await sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
      e.target.reset();

    } catch (error) {
      console.error('Error:', error);
      alert('Booking submitted! We will contact you shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking-section" className='booking-form-section'>
      <div className='booking-form'>
        <h2 className="booking-title">
          <span className="icon-frame"><FaCamera /></span>
          Book Your Photoshoot
        </h2>
        <form onSubmit={handleSubmit} className="booking-grid-form">
          <div className="form-row">
            <div className='form-group'>
              <input
                type="text"
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="firstName" className="booking-label">First Name</label>
            </div>
            <div className='form-group'>
              <input
                type="text"
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="lastName" className="booking-label">Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className='form-group'>
              <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="email" className="booking-label">Email Address</label>
            </div>
            <div className='form-group'>
              <input
                type="tel"
                id='phone'
                name='phone'
                pattern='[0-9]{10}'
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="phone" className="booking-label">Phone Number</label>
            </div>
          </div>
          <div className='form-group'>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Select Service</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Event Photography">Event Photography</option>
              <option value="Product Photography">Product Photography</option>
              <option value="Commercial Photography">Commercial Photography</option>
            </select>
            <label htmlFor="service" className="booking-label">Service</label>
          </div>
          <div className='form-group'>
            <input
              type="date"
              id='date'
              name='date'
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={handleChange}
              required
            />
            <label htmlFor="date" className="booking-label">Preferred Date</label>
          </div>
          <div className='form-group'>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder=" "
            />
            <label htmlFor="message" className="booking-label">Additional Details</label>
          </div>
          <button 
            type="submit" 
            className='submit-btn' 
            disabled={loading}
          >
            <span className="button-content">
              {loading ? 'Sending...' : 'Book Now'}
              <span className="button-hover-effect"></span>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;