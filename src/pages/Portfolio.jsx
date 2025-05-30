import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/portfolio.css'

const portfolioCategories = [
  { id: 'all ', name: 'All' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'event', name: 'Event' },
  { id: 'commercial', name: 'Commercial' }
];

const portfolioImages = [
  { id: 1, category: 'portrait', image: 'https://cdn.pixabay.com/photo/2020/11/20/16/26/labrador-5762115_640.jpg' },
  { id: 2, category: 'wedding', image: 'https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_640.jpg' },
  { id: 3, category: 'event', image: 'https://cdn.pixabay.com/photo/2020/06/07/13/33/fireworks-5270439_640.jpg' },
  { id: 4, category: 'commercial', image: 'https://cdn.pixabay.com/photo/2020/04/01/12/46/city-4991094_640.jpg' },
  { id: 5, category: 'portrait', image: 'https://cdn.pixabay.com/photo/2020/05/30/03/15/girl-5237508_640.jpg' },
  { id: 6, category: 'wedding', image: 'https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg' },
  { id: 7, category: 'event', image: 'https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233_640.jpg' },
  { id: 8, category: 'commercial', image: 'https://cdn.pixabay.com/photo/2019/09/17/14/48/street-4483722_640.jpg' },
  { id: 9, category: 'portrait', image: 'https://cdn.pixabay.com/photo/2023/12/06/15/40/woman-8433924_640.jpg' },
  { id: 10, category: 'wedding', image: 'https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_640.jpg' },
  { id: 11, category: 'event', image: 'https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_640.jpg' },
  { id: 12, category: 'commercial', image: 'https://cdn.pixabay.com/photo/2022/05/17/16/26/tractor-7203148_640.jpg' }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? portfolioImages
    : portfolioImages.filter(item => item.category === activeCategory);
  
  return  (
    <div className='portfolio-page'>
      <section className='portfolio-hero'>
        <div className='hero-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
          <div className="hero-text" style={{ textAlign: 'center', width: '100%' }}>
            <h1 data-aos="fade-up">Captured Moments</h1>
            <p data-aos="fade-up" data-aos-delay="200">Witness Our Visual Storytelling Journey</p>
            <p className="hero-highlight">Every click tells a story. Explore our best shots and creative vision.</p>
          </div>
        </div>
      </section>

      <section className='portfolio-content'>
        <div className='container'>
          <div className='portfolio-filter' data-aos="fade-up">
            {portfolioCategories.map(category => (
              <button 
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                <span className="underline"></span>
              </button>
            ))}
          </div>

          <div className='portfolio-grid'>
            {filteredImages.map((item, index) => (
              <div 
                key={item.id}
                className='portfolio-item'
                data-aos="zoom-in"
                data-aos-delay={index % 6 * 50}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className='image-container'>
                  <img 
                    src={item.image} 
                    alt={`Portfolio ${item.category} ${item.id}`} 
                    loading="lazy"
                  />
                  <div className='image-overlay'>
                    <div className='overlay-content'>
                      <span className='category-tag'>{item.category}</span>
                      <button className='view-btn'>View Fullscreen</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className='image-modal' onClick={() => setSelectedImage(null)}>
          <div className='modal-content portfolio-modal-content' onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Enlarged portfolio" 
              data-aos="zoom-in"
            />
            <div className="portfolio-modal-details">
              <h3>Image Details</h3>
              <p className="portfolio-modal-desc">This is a featured photograph from our portfolio. For more details or to book a similar shoot, contact us below.</p>
              <div className="portfolio-modal-actions">
                <Link to="/contact" className="portfolio-modal-btn">Contact Photographer</Link>
                <Link to="/services" className="portfolio-modal-btn secondary">Book This Style</Link>
              </div>
            </div>
            <button className='close-btn' onClick={() => setSelectedImage(null)}>&times;</button>
          </div>
        </div>
      )}

      <section className="portfolio-cta">
        <div className="container">
          <h2>Ready to Book Your Own Photoshoot?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn">Contact Us</Link>
            <Link to="/services" className="cta-btn cta-secondary">View Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
