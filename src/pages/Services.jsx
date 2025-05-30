import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
// import servicesHero from '../assets/services_hero.jpg'
import '../style/services.css';



const servicesData = [
  {
    id: 1,
    title: 'Portrait Photography',
    shortDescription: 'Beautiful indivudal and group portraits that capture personality and emotion.',
    description: 'Our portrait photography sessions are designed to capture the essence of who you are. Wheather you need professional headshots, family potraits, or creative individual shots , we create images you\'ll cherish forever. Session include 1-2 hours of shooting time, multiple locations/backgrounds and professional editing.',
    price: 199,
    image: 'https://cdn.pixabay.com/photo/2020/05/09/14/10/camera-5149838_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_640.jpg',
      'https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_640.jpg',
      'https://cdn.pixabay.com/photo/2016/03/26/20/36/young-1281293_640.jpg'
    ]
  },
  {
    id: 2,
    title: 'Weding Photography',
    shortDescription: 'Beautiful indivudal and group portraits that capture personality and emotion.',
    description: 'your wedding day one of the most important days of your life, and we\'re honored to capture every special moment.Our wedding photography packages include full-day coverage, a second shooter, engagement session, and beautifully edited high-resolutions images. We specialize in both traditional and photojournalistic styles.',
    price: 1499,
    image: 'https://cdn.pixabay.com/photo/2021/08/24/11/32/couple-6570391_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2023/02/05/00/21/handsome-7768451_640.jpg',
      'https://cdn.pixabay.com/photo/2017/11/09/07/02/indian-2932548_640.jpg',
      'https://cdn.pixabay.com/photo/2022/06/12/15/59/wedding-7258300_1280.jpg'
    ]
  },
  {
    id: 3,
    title: 'Event Photography',
    shortDescription: 'Professional coverage for corporate events, parties and special occasions.',
    description: 'From corporate events to borthday parties, we provide professional event photography that captures the energy and emotions of your occasions. Our services include pre-event consultations, full coverage of the event and quick turnaround times for edited images. Perfect for business needing conference coverage or families celebrating milestones.',
    price: 399,
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2024/08/02/10/05/ai-generated-8939356_640.jpg',
      'https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_640.jpg',
      'https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_640.jpg'
      
    ]
  },
  {
    id: 4,
    title: 'Product photography',
    shortDescription: 'High-quality images that make your products stand out and sell.',
    description: 'Great product photography is essential for e-commerce and marketing. We create clean, professional images that showcase your products in the best light. Services include studio setup with professional lighting, multiple angles per product and editing to ensure color accurancy. Perfect for online stores, catalogs and adverting.',
    price: 99,
    image: 'https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_640.jpg',
      'https://cdn.pixabay.com/photo/2021/06/30/20/28/cheese-6377657_640.jpg',
      'https://cdn.pixabay.com/photo/2018/08/29/14/47/perfume-3640056_640.jpg'
    ]
  },
  {
    id: 5,
    title: 'Comercial Photography',
    shortDescription: 'Professional images for businesses, adversting and branding.',
    description: 'Our commercial photography services help business create powerful visual content for marketing and branding. We work with you to understand your brand identify and create images that communicate your message effectivly. Service include location scouting, professional models (if needed), and post-production editing to meet your brand guidelines.',
    price: 499,
    image: 'https://cdn.pixabay.com/photo/2015/07/22/08/14/wedding-854977_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2017/03/19/07/00/commercial-photography-2155712_640.jpg',
      'https://cdn.pixabay.com/photo/2015/07/22/08/14/wedding-854977_640.jpg',
      'https://cdn.pixabay.com/photo/2019/10/25/09/09/city-4576421_1280.jpg'
    ]
  },
  {
    id: 6,
    title: 'Newborn Photography',
    shortDescription: 'Capture precious early moments of your baby',
    description: 'Our newborn photography sessions are designed to capture the beauty and innocence of your new baby. We create a comfortable and safe environment for your little one, using props and backgrounds that enhance their natural beauty. Sessions include 2-3 hours of shooting time, multiple setups and professional editing.',
    price: 299,
    image: 'https://cdn.pixabay.com/photo/2024/12/26/17/31/newborn-photography-9292505_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2024/12/26/17/31/newborn-photography-9292504_640.jpg',
      'https://cdn.pixabay.com/photo/2024/12/26/17/31/newborn-photography-9292504_640.jpg',
      'https://cdn.pixabay.com/photo/2015/05/26/12/31/baby-784609_640.jpg'
    ]
  },
  {
    id: 7,
    title: 'Drone Shots',
    shortDescription: 'Stunning aerial perspectives for your special events.',
    description: 'Capture breathtaking aerial views of your wedding, event, or property with our professional drone photography and videography services. Perfect for adding a cinematic touch to your memories.',
    price: 799,
    image: 'https://cdn.pixabay.com/photo/2016/11/29/02/07/drone-1866742_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2017/06/20/19/22/drone-2424067_640.jpg',
      'https://cdn.pixabay.com/photo/2016/11/29/09/32/drone-1866742_640.jpg'
    ]
  },
  {
    id: 8,
    title: 'Cinematic',
    shortDescription: 'Movie-like shots with creative lighting and storytelling.',
    description: 'Our cinematic photography brings a film-like quality to your events, using advanced techniques in lighting, composition, and editing for a dramatic, memorable look.',
    price: 999,
    image: 'https://cdn.pixabay.com/photo/2016/03/15/17/05/portrait-1258721_1280.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2016/11/29/09/32/wedding-1866742_640.jpg'
    ]
  },
  {
    id: 9,
    title: 'Print & Albums',
    shortDescription: 'Beautifully designed albums and high-quality prints.',
    description: 'Preserve your memories with custom-designed albums and professional prints. Choose from a variety of styles and finishes to match your taste.',
    price: 399,
    image: 'https://cdn.pixabay.com/photo/2016/06/09/06/33/love-1445269_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2017/01/20/00/30/photo-album-1996924_640.jpg'
    ]
  },
  {
    id: 10,
    title: 'Regular',
    shortDescription: 'Classic photography for all your important moments.',
    description: 'Our regular photography service covers all the essential moments, group shots, and candid emotions in a timeless style.',
    price: 499,
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233_640.jpg',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233_640.jpg'
    ]
  },
  {
    id: 11,
    title: 'Baby Shower',
    shortDescription: 'Creative and candid baby shower photography.',
    description: 'Celebrate the joy of welcoming your baby with our baby shower photography, capturing the love and excitement of your special day.',
    price: 599,
    image: 'https://img.freepik.com/free-photo/brunette-pregnant-lady-kisses-her-man-while-they-stand-field_8353-1096.jpg?ga=GA1.1.66629728.1748455373&semt=ais_hybrid&w=740',
    sampleImages: [
      'https://cdn.pixabay.com/photo/2017/01/20/00/30/photo-album-1996924_640.jpg',
      'https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_640.jpg'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPackages = () => {
    document.getElementById('services-list-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='services-page'>
      <section className='services-hero'  style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), 
                    url('https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_640.jpg') center/cover`
      }}>
        <div className='hero-content'>
          <h1>Capture Your Special Moments</h1>
          <p className='hero-subtitle'>Premium Photography Services in India</p>
          <div className='hero-cta'>
            <button className='cta-btn yellow-btn' onClick={scrollToBooking}>Book Now</button>
            <button className='cta-btn yellow-btn' onClick={scrollToPackages}>View Packages</button>
          </div>
        </div>
      </section>
      <section className='services-list' id='services-list-section'>
        <div className='container'>
          <h2 className='section-title'>Our Photography Services</h2>
          <div className='services-grid'>
            {servicesData.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>
  
      <div id='booking-section'></div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
};

export default Services;