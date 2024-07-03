import React from 'react';
import Image from '../images/about.jpg'; // Adjust the path to your image

export const About = () => {
  return (
    <div className="about-container">
      
      <div className="description-section">
        <div className="description-text">
          <h1>ADVANCED TECHNOLOGY</h1>
          <h2>Fraud Detection System</h2>
          <p>
            Our advanced fraud detection system leverages cutting-edge machine learning algorithms to safeguard your transactions.
            With an impressive accuracy of 99.14%, our solution ensures real-time protection against fraudulent activities.
            Designed to integrate seamlessly with your existing infrastructure, our system provides comprehensive security,
            boosting customer confidence and compliance with regulatory standards. Join us in making the online world a safer place.
          </p>
        </div>
        <img src={Image} className="description-image" alt="Fraud Detection" />
      </div>

      <div className="section-header">
        <h2>WHY CHOOSE US</h2>
        <h1>WHY WE ARE BEST</h1>
      </div>
      
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Clarified Vision & Target</h3>
          <p className="feature-description">
            Our system ensures clear objectives and precision in fraud detection, keeping your transactions secure.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">High Performance</h3>
          <p className="feature-description">
            Our fraud detection system uses Decision Trees with an accuracy of 99.14%, ensuring top-notch performance.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3 className="feature-title">Maintain Security</h3>
          <p className="feature-description">
            We prioritize security, protecting your transactions from fraudulent activities with advanced algorithms.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3 className="feature-title">Better Strategy & Quality</h3>
          <p className="feature-description">
            Our innovative technology and strategic approach ensure high-quality fraud detection and prevention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
