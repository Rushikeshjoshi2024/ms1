import React from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
import { FcHome } from "react-icons/fc";
import { MdAutoGraph } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import './component.css';

const Services = () => {
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
      title: "Wide Variety of Products",
      description: "Explore a vast selection of products from trusted brands to meet your specific needs."
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
      {/* This div creates the animated aurora background effect */}
      <div className="aurora-background"></div>

      <div className="services-container">
        <div className="section-header">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            We provide a complete ecosystem for all your construction material needs.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div className="service-card" key={service.id}>
              <div className="card-glow"></div>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services