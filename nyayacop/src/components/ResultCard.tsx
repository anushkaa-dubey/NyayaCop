import React from 'react';
import '../styles/ResultCard.css';

interface ResultCardProps {
  section: string;
  description: string;
  act: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ section, description, act }) => {
  return (
    <div className="result-card">
      <h3 className="section-title">{section}</h3>
      <p className="section-description">{description}</p>
      <div className="act-badge">{act}</div>
    </div>
  );
};

export default ResultCard; 