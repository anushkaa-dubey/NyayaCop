import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About NyayaCop</h1>
        
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            NyayaCop is an AI-powered legal assistant designed to bridge the gap between citizens and the legal system. 
            Our mission is to make legal information accessible, understandable, and actionable for everyone.
          </p>
        </section>

        <section className="features-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📝 Smart Analysis</h3>
              <p>AI-powered analysis of legal complaints to suggest relevant sections and procedures</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Multilingual Support</h3>
              <p>Access legal information in multiple Indian languages</p>
            </div>
            <div className="feature-card">
              <h3>👥 Citizen-Friendly</h3>
              <p>Simplified explanations for non-legal professionals</p>
            </div>
            <div className="feature-card">
              <h3>⚖️ Legal Expertise</h3>
              <p>Detailed legal information for professionals</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            We are a team of passionate developers, legal experts, and AI researchers working together 
            to make the legal system more accessible to all citizens of India.
          </p>
        </section>

        <section className="hackathon-section">
          <h2>Smart India Hackathon 2025</h2>
          <p>
            This project is being developed as part of the Smart India Hackathon 2025, 
            with the goal of creating innovative solutions for India's legal system.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 