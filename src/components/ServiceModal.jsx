import React from 'react'
import '../style/service-modal.css';

const ServiceModal = ({ service, onClose, onBookNow }) => {
  if (!service) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <button className='close-btn' onClick={onClose}>&times;</button>
        <h2>{service.title}</h2>
        <p className='service-description'>{service.description}</p>
        <div className='price-section'>
          <h3>Starting from</h3>
          <p className='price'>₹{service.price}</p>
        </div>
        {/* Add more details if available */}
        {service.details && (
          <ul className='service-details-list'>
            {service.details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <div className='sample-images'>
          <h3>Sample Photos</h3>
          <div className='image-grid'>
            {service.sampleImages.map((img, index) => (
              <img key={index} src={img} alt={`Sample ${index + 1}`} className='sample-img-small' />
            ))}
          </div>
        </div>
        {/* Render extra sections if present */}
        {service.sections && service.sections.length > 0 && (
          <div className='service-extra-sections'>
            {service.sections.map((section, idx) => (
              <div className='service-section-block' key={idx}>
                <h4 className='service-section-title'>{section.title}</h4>
                <p className='service-section-desc'>{section.description}</p>
                <div className='image-grid'>
                  {section.images.map((img, i) => (
                    <img key={i} src={img} alt={section.title + ' ' + (i+1)} className='sample-img-small' />
                  ))}
                </div>
                {/* Add a view button for each section */}
                <div className='section-view-btn-row'>
                  <button className='section-view-btn yellow-btn'>View {section.title}</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='cta-section'>
          <button 
            className='book-now-btn attractive-btn yellow-btn'
            onClick={() => {
              onClose();
              onBookNow();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;