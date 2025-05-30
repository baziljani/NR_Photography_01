import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaCamera } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-content'>
    
        <div className='footer-section'>
          <div className='brand-header'>
            <FaCamera className='brand-icon' />
            <h3>NR PHOTOGRAPHY</h3>
          </div>
          <p className='brand-tagline'>Capturing life's precious moments with creativity and precision</p>
        </div>

     
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul className='footer-nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Services</h3>
          <ul className='footer-nav'>
            <li>Wedding Photography</li>
            <li>Portrait Sessions</li>
            <li>Event Coverage</li>
            <li>Commercial Photography</li>
            <li>Photo Editing</li>
          </ul>
        </div>

        <div className='footer-section newsletter-section'>
        <h3>Stay Connected</h3>
          <p>Subscribe for photography tips and exclusive offers</p>
          <div className='newsletter-form'>
            <input type="email" placeholder="Your email address" />
            <button className='subscribe-btn'>Subscribe</button>
          </div>
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

    
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} NR PHOTOGRAPHY. All rights reserved.</p>
        <div className='legal-links'>
          <Link to="/privacy">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;