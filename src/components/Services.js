import React from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
import { FcHome, FcMoneyTransfer } from "react-icons/fc";
import { MdAutoGraph } from "react-icons/md";
import './component.css';

// A reusable card component for each service
const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon-wrapper">
      {icon}
    </div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FcHome className="service-icon" />,
      title: "Find Your Materials",
      description: "Discover the best quality construction materials for your new home or project."
    },
    {
      id: 2,
      icon: <MdAutoGraph className="service-icon" />,
      title: "Wide Variety",
      description: "Explore a vast selection of products and brands to meet your specific needs."
    },
    {
      id: 3,
      icon: <FcMoneyTransfer className="service-icon" />,
      title: "Sell Your Surplus",
      description: "Easily sell your remaining construction materials and get the best value for them."
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-heading">Our Services</h2>
        <div className="services-grid">
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;