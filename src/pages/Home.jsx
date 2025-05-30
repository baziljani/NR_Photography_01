import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../style/home.css';
import photographer1 from '../assets/photographer2.png';
import photographer2 from '../assets/photographer2.png';
import testimonial1 from '../assets/testmonial1.png';
import { FaCameraRetro, FaUserFriends, FaBuilding, FaRegCalendarCheck, FaPalette, FaFilm } from 'react-icons/fa';
import certificateImg from '../assets/certificate.png';


function useAutoScrollCarousel(carouselRef, cardSelector, gap = 16, interval = 3500) {
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;
    let scrollAmount = 0;
    let cardWidth = 0;
    let intervalId;
    let isHovered = false;

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    const scrollNext = () => {
      if (!track || isHovered) return;
      const cards = track.querySelectorAll(cardSelector);
      if (!cards.length) return;
      cardWidth = cards[0].offsetWidth + gap;
      scrollAmount += cardWidth;
      if (scrollAmount >= track.scrollWidth - track.offsetWidth) {
        scrollAmount = 0;
      }
      track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
    intervalId = setInterval(scrollNext, interval);
    return () => {
      clearInterval(intervalId);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [carouselRef, cardSelector, gap, interval]);
}

const blogPosts = [
  {
    image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_640.jpg",
    title: "10 Tips for Perfect Portrait Photography",
    date: "May 15, 2023",
    desc: "Learn professional techniques to capture stunning portraits in any lighting condition, from natural light to studio setups. Discover posing secrets and editing tricks for flawless results.",
    link: "/blog/portrait-tips"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_640.jpg",
    title: "How to Prepare for Your Wedding Photoshoot",
    date: "April 28, 2023",
    desc: "Essential preparation tips to ensure your wedding photos are everything you dreamed of. From timelines to must-have shots, get expert advice for your big day.",
    link: "/blog/wedding-tips"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg",
    title: "Creative Editing: Transform Your Photos",
    date: "March 10, 2023",
    desc: "Explore the latest editing trends and tools. Learn how to add drama, color, and style to your images with advanced Photoshop and Lightroom techniques.",
    link: "/blog/creative-editing"
  },
  {
    image: "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_640.jpg",
    title: "Event Photography: Capturing the Moment",
    date: "February 18, 2023",
    desc: "Discover how to capture the energy and emotion of live events. Tips for working in challenging lighting and fast-paced environments.",
    link: "/blog/event-photography"
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/photographer-690293_640.jpg",
    title: "Gear Guide: Cameras & Lenses for Every Photographer",
    date: "January 5, 2023",
    desc: "A comprehensive guide to choosing the right camera and lens for your style, whether you're a beginner or a pro. Compare top brands and models for portraits, weddings, and more.",
    link: "/blog/gear-guide"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/adult-1868750_640.jpg",
    title: "Lighting 101: Mastering Natural & Studio Light",
    date: "December 12, 2022",
    desc: "Master the art of lighting for photography. Learn how to use natural light, reflectors, and studio setups to create stunning, professional images in any environment.",
    link: "/blog/lighting-101"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/08/06/00/03/people-2588594_640.jpg",
    title: "Posing Tips for Flattering Photos",
    date: "November 20, 2022",
    desc: "Get the best out of your subjects with these easy posing tips. Perfect for family, couples, and solo portraits to make everyone look their best.",
    link: "/blog/posing-tips"
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/photographer-820390_640.jpg",
    title: "How to Build Your Photography Portfolio",
    date: "October 8, 2022",
    desc: "Step-by-step advice for building a standout photography portfolio that attracts clients and showcases your unique style.",
    link: "/blog/build-portfolio"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/03/23/18/58/camera-1274699_640.jpg",
    title: "Editing Workflow: From Shoot to Share",
    date: "September 15, 2022",
    desc: "Streamline your editing process with these workflow tips. Learn how to organize, cull, and edit your photos efficiently for faster delivery.",
    link: "/blog/editing-workflow"
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/01/28/23/35/woman-615421_640.jpg",
    title: "Outdoor Portraits: Making the Most of Natural Light",
    date: "August 22, 2022",
    desc: "Discover how to use natural light to your advantage for beautiful outdoor portraits. Includes tips for golden hour, shade, and backlighting.",
    link: "/blog/outdoor-portraits"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/adult-1867889_640.jpg",
    title: "Wedding Storytelling: Capturing the Day",
    date: "July 30, 2022",
    desc: "How to tell a compelling story with your wedding photography. Learn about must-have shots, candid moments, and creating a narrative.",
    link: "/blog/wedding-storytelling"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/people-1990184_640.jpg",
    title: "Client Communication: Building Trust & Comfort",
    date: "June 18, 2022",
    desc: "Tips for communicating with clients before, during, and after the shoot to ensure a smooth experience and great results.",
    link: "/blog/client-communication"
  }
];

function BlogCarousel() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const length = blogPosts.length;

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % (length - visibleCount + 1));
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, length, visibleCount]);

  // For sliding effect
  const getTrackStyle = () => {
    const percent = (100 / visibleCount) * current;
    return {
      transform: `translateX(-${percent}%)`,
      transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)'
    };
  };

  return (
    <div className='blog-carousel'>
      <div className='carousel-track blog-carousel-multi' style={getTrackStyle()}>
        {blogPosts.map((post, idx) => (
          <div className='blog-card' key={idx} style={{ minWidth: `${100 / visibleCount}%`, maxWidth: `${100 / visibleCount}%` }}>
            <div className='blog-image'>
              <img src={post.image} alt={post.title} />
            </div>
            <div className='blog-content'>
              <h3>{post.title}</h3>
              <p className='date'>{post.date}</p>
              <p>{post.desc}</p>
              <Link to={post.link} className='read-more'>Read More →</Link>
            </div>
          </div>
        ))}
      </div>
      <div className='blog-carousel-dots'>
        {Array.from({ length: length - visibleCount + 1 }).map((_, idx) => (
          <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "NR Photography captured our wedding perfectly! The photos are stunning.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    quote: "The team is professional and creative. Our product photos increased sales by 30%!",
    author: "Michael Chen",
    role: "Business Owner"
  },
  {
    quote: "Best portrait experience I've ever had. The results were worth every penny.",
    author: "Emma Johnson",
    role: "Model"
  },
  {
    quote: "NR Photography made our event unforgettable. Highly recommended!",
    author: "Priya Singh",
    role: "Event Client"
  },
  {
    quote: "Creative, reliable, and always on time. The best photography team!",
    author: "David Lee",
    role: "Corporate Client"
  },
  {
    quote: "Our family portraits are beautiful. Thank you for your patience and talent!",
    author: "The Martins",
    role: "Family Session"
  }
];

function TestimonialsCarousel() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const length = testimonials.length;

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000); // Change interval to 2 seconds
    return () => clearTimeout(timeoutRef.current);
  }, [current, length]);

  // Looping logic for visible cards
  const getVisibleTestimonials = () => {
    let cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(testimonials[(current + i) % length]);
    }
    return cards;
  };

  return (
    <div className='testimonials-carousel'>
      <div className='carousel-track testimonials-carousel-multi'>
        {getVisibleTestimonials().map((testimonial, idx) => (
          <div className='testimonial-card' key={idx}>
            <div className='testimonial-image'>
              <img src={testimonial1} alt={testimonial.author} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto'}} />
            </div>
            <div className='testimonial-content'>
              <p className='quote' style={{wordBreak: 'break-word', maxHeight: '110px', overflow: 'auto'}}>
                "{testimonial.quote}"
              </p>
              <div className='author'>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-dots'>
        {testimonials.map((_, idx) => (
          <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}

// --- ServicesCarousel for mobile, matching BlogCarousel/TestimonialCarousel logic ---
function ServicesCarousel({ services }) {
  const [current, setCurrent] = React.useState(0);
  const length = services.length;

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2500);
    return () => clearInterval(interval);
  }, [current, length]);

  const getVisibleServices = () => {
    let cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(services[(current + i) % length]);
    }
    return cards;
  };

  return (
    <div className='services-carousel-multi'>
      {getVisibleServices().map((service, idx) => (
        <div className='service-tile' key={idx}>
          <div className='service-icon-large service-icon-circle logo-shadow'>
            {service.icon}
          </div>
          <div className='service-info'>
            <h3 className='service-title-alt'>{service.title}</h3>
            <p className='service-desc-alt'>{service.description}</p>
            <div className='service-actions'>
              <Link to={`/services#${service.title.replace(/\s+/g, '-').toLowerCase()}`} className='service-action-link yellow-btn service-btn'>View Details</Link>
              <Link to='/#booking-section' className='service-action-link yellow-btn service-btn'>Book Now</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const heroImages = [
  // Studio lighting setup (matches your screenshot)
  "https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213_1280.jpg", // studio with lights
  // Camera closeup
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80", // camera on tripod
  // Video camera setup
  "https://cdn.pixabay.com/photo/2020/04/20/18/10/cinema-5069314_1280.jpg", // video camera in studio
  // Behind the scenes photoshoot
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80", // model photoshoot
  // More lighting/camera action
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" // camera in hand
];

function HeroSection() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero-section'>
      <div className='hero-image-wrapper'>
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Photo Studio Slide ${idx + 1}`}
            className={`hero-image${idx === current ? ' active' : ''}`}
            style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 2 : 1, transition: 'opacity 1s' }}
          />
        ))}
        <div className='hero-overlay'></div>
      </div>
      <div className='hero-content hero-flex-row'>
        <div className='hero-mobile-overlay'>
          <div className='logo-title'>
            <h1 className='brand-name highlight-font'>NR <span>PHOTOGRAPHY</span></h1>
          </div>
          <div className='hero-text-content'>
            <h2 className='hero-title'>
              Capturing Life's Beautiful<br />
              Moments
            </h2>
            {/* <p className='hero-description'>
              Specializing in wedding, portrait, and event photography with a<br />
              timeless, elegant style that tells your unique story.
            </p> */}
            <div className='hero-buttons'>
              <Link to="/portfolio" className='btn btn-portfolio'>
                <span className='btn-content'>View Portfolio</span>
              </Link>
              <Link to="/contact" className='btn btn-contact'>
                <span className='btn-content'>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Home = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with our artistic wedding photography services.",
      icon: <FaCameraRetro />
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that reveal your true personality.",
      icon: <FaUserFriends />
    },
    {
      title: "Commercial Photography",
      description: "High-quality images for your business and marketing needs.",
      icon: <FaBuilding />
    },
    {
      title: "Event Coverage",
      description: "Comprehensive coverage for all your important events.",
      icon: <FaRegCalendarCheck />
    },
    {
      title: "Creative Editing",
      description: "Expert retouching and creative editing to make your photos stand out.",
      icon: <FaPalette />
    },
    {
      title: "Video Production",
      description: "Professional video shoots and editing for events and promotions.",
      icon: <FaFilm />
    }
  ];

  const blogCarouselRef = useRef(null);
  const servicesCarouselRef = useRef(null);
  const testimonialsCarouselRef = useRef(null);

  useAutoScrollCarousel(blogCarouselRef, '.blog-card');
  useAutoScrollCarousel(servicesCarouselRef, '.service-tile');
  useAutoScrollCarousel(testimonialsCarouselRef, '.testimonial-card');

  // Responsive state for mobile detection
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='home-page'>
      <Helmet>
        <title>NR Photography | Professional Photography Services</title>
        <meta name="description" content="Capture life's precious moments with NR Photography. Professional wedding, portrait, and commercial photography services." />
        <meta name="keywords" content="photography, wedding photos, portrait photography, commercial photography" />
      </Helmet>
      <HeroSection />

      <section className='services-section'>
        <div className='container'>
          <h2 className='services-title-alt'>Our Services</h2>
          {/* Use carousel on mobile, grid on desktop */}
          {isMobile ? (
            <ServicesCarousel services={services} />
          ) : (
            <div className='services-list-alt'>
              {services.map((service, index) => (
                <div className='service-tile' key={index}>
                  <div className='service-icon-large service-icon-circle logo-shadow'>{service.icon}</div>
                  <div className='service-info'>
                    <h3 className='service-title-alt'>{service.title}</h3>
                    <p className='service-desc-alt'>{service.description}</p>
                    <div className='service-actions'>
                      <Link to={`/services#${service.title.replace(/\s+/g, '-').toLowerCase()}`} className='service-action-link yellow-btn service-btn'>View Details</Link>
                      <Link to='/#booking-section' className='service-action-link yellow-btn service-btn'>Book Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      <section className='about-section'>
        <div className='container'>
          <div className='about-content-alt simple-about-layout'>
            <div className='about-image-alt'>
              <img src={photographer1} alt="Lead Photographer" className='about-main-img highlight-border'/>
              <div className='about-img-overlay'></div>
            </div>
            <div className='about-text-alt'>
              <h2 className='about-title-alt'>Why Choose <span className='highlight-text'>NR PHOTOGRAPHY</span>?</h2>
              <ul className='about-features'>
                <li><strong className='highlight-text'>10+ Years Experience:</strong> Trusted by hundreds of clients for weddings, portraits, and commercial shoots.</li>
                <li><strong className='highlight-text'>Award-Winning Team:</strong> Our photographers are recognized nationally for creativity and professionalism.</li>
                <li><strong className='highlight-text'>Cutting-Edge Equipment:</strong> We use the latest cameras and editing tools for stunning results.</li>
                <li><strong className='highlight-text'>Personalized Service:</strong> Every session is tailored to your unique story and style.</li>
                <li><strong className='highlight-text'>Fast Turnaround:</strong> Receive your edited photos quickly, without compromising on quality.</li>
              </ul>
              <div className='about-cta'>
                <Link to='/portfolio' className='about-btn highlight-btn'>See Our Work</Link>
                <Link to='/contact' className='about-btn secondary highlight-btn'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='portfolio-section'>
        <div className='container'>
          <h2>Our Portfolio</h2>
          <div className='work-grid'>
            {[
              { url: 'https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_640.jpg', header: 'Wedding Moments' },
              { url: 'https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg', header: 'Studio Portraits' },
              { url: 'https://cdn.pixabay.com/photo/2019/12/03/13/25/lantern-4670043_1280.jpg', header: 'Event Highlights' },
              { url: 'https://cdn.pixabay.com/photo/2017/03/27/13/25/city-2178705_1280.jpg', header: 'Aerial Views' },
              { url: 'https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_1280.jpg', header: 'Candid Emotions' },
              { url: 'https://cdn.pixabay.com/photo/2022/10/22/16/57/prewedding-7539612_1280.jpg', header: 'Pre-Wedding Shoot' }
            ].map((item, index) => (
              <div className='work-item' key={index}>
                <div className='portfolio-img-header'>{item.header}</div>
                <img src={item.url} alt={item.header} />
              </div>
            ))}
          </div>
          <div className='portfolio-cta' style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/portfolio" className='cta-button portfolio-btn-bg'>View Full Portfolio</Link>
          </div>
        </div>
      </section>

      <section className='testimonials-section'>
        <div className='container'>
          <div className='testimonials-header'>
            <h2>Client Testimonials</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className='blog-section'>
        <div className='container'>
          <div className='blog-header'>
            <h2>Latest From Our Blog</h2>
          </div>
          {/* Automated Blog Carousel: auto-scrolls, pauses on hover, responsive */}
          <div className='blog-carousel-wrapper'>
            <BlogCarouselAuto />
          </div>
        </div>
      </section>

      <section className='booking-form-section' id='booking-section'>
        <div className='booking-form-center-wrapper'>
          <div className='booking-header'>
            <h2>Ready to Create Memories?</h2>
            <p>Book your session today and let us capture your special moments</p>
          </div>
          <BookingForm/>
        </div>
      </section>

      <section className='contact-cta'>
        <div className='container question-section'>
          <div className='question-content'>
            <h2>Have Questions?</h2>
            <p>We'd love to hear from you. Contact us for more information about our services.</p>
            <div className='contact-buttons'>
              <a href="tel:+919390228526" className='cta-button'>
                <span className='phone-icon'>📞</span> Call Us
              </a>
              <a href="mailto:info@nrphotography.com" className='cta-button secondary'>
                <span className='email-icon'>✉️</span> Email Us
              </a>
            </div>
          </div>
          <div className='question-image'>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Contact NR Photography" />
          </div>
        </div>
      </section>
    </div>
  );
};

// Automated Blog Carousel with auto-scroll, pause on hover, and responsive design
function BlogCarouselAuto() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const length = blogPosts.length;

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isHovered) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % (length - visibleCount + 1));
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, length, visibleCount, isHovered]);

  // For sliding effect
  const getTrackStyle = () => {
    const percent = (100 / visibleCount) * current;
    return {
      transform: `translateX(-${percent}%)`,
      transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)'
    };
  };

  return (
    <div className='blog-carousel' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='carousel-track blog-carousel-multi' style={getTrackStyle()}>
        {blogPosts.map((post, idx) => (
          <div className='blog-card' key={idx} style={{ minWidth: `${100 / visibleCount}%`, maxWidth: `${100 / visibleCount}%` }}>
            <div className='blog-image'>
              <img src={post.image} alt={post.title} />
            </div>
            <div className='blog-content'>
              <h3>{post.title}</h3>
              <p className='date'>{post.date}</p>
              <p>{post.desc}</p>
              <Link to={post.link} className='read-more'>Read More →</Link>
            </div>
          </div>
        ))}
      </div>
      <div className='blog-carousel-dots'>
        {Array.from({ length: length - visibleCount + 1 }).map((_, idx) => (
          <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}

export default Home;