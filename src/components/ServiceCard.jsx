import React from 'react'
import { Link } from 'react-router-dom'
import '../style/service-card.css';


const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <img src={service.image} alt={service.title} />
      <div className="card-content">
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default ServiceCard;