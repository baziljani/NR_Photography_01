import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon1 from '../assets/icon1.jpg';
import '../style/header.css';

const Header = () => {
  const iconRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scale = Math.max(0.8, 1 - scrollTop / 500);
      if (iconRef.current) {
        iconRef.current.style.transform = `scale(${scale})`;
      }

      if (headerRef.current) {
        headerRef.current.style.boxShadow = scrollTop > 50 ? 
          '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleBookingClick = (e) => {
    e.preventDefault();
    closeMenu();
    
    if (location.pathname === '/') {

      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {

      window.location.href = '/#booking-section';
    }
  };

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img ref={iconRef} src={icon1} alt='Camera Icon' className='logo-icon' />
          </Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'nav-link active-link' : 'nav-link'}>Home</Link></li>
            <li><Link to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'nav-link active-link' : 'nav-link'}>Services</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu} className={location.pathname === '/portfolio' ? 'nav-link active-link' : 'nav-link'}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'nav-link active-link' : 'nav-link'}>Contact</Link></li>
            <li>
              <a
                href="/#booking-section"
                onClick={handleBookingClick}
                className={`booking-link${location.hash === '#booking-section' || location.pathname === '/book' ? ' active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                Book Session
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;