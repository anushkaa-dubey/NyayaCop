import React, { useState } from 'react';
import type { Language } from '../types';
import '../styles/ComplaintForm.css';

interface ComplaintFormProps {
  onAnalyze: (complaint: string, language: Language) => void;
  isCitizenMode: boolean;
}

const ComplaintForm: React.FC<ComplaintFormProps> = ({ onAnalyze, isCitizenMode }) => {
  const [complaint, setComplaint] = useState('');
  const [language, setLanguage] = useState<Language>('English');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(complaint, language);
  };

  const handleVoiceInput = () => {
    setIsRecording(true);
    // Simulate voice input processing
    setTimeout(() => {
      setComplaint('This is a simulated voice input text...');
      setIsRecording(false);
    }, 2000);
  };

  return (
    <form className="complaint-form" onSubmit={handleSubmit}>
      <div className="form-controls">
        <div className="language-select">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Tamil">Tamil</option>
          </select>
          <span className="tooltip">Multilingual support coming soon</span>
        </div>
      </div>

      <div className="input-container">
        <textarea
          className="complaint-textarea"
          placeholder={isCitizenMode ? "What happened? Tell us your story..." : "Enter your complaint here..."}
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          rows={6}
        />
        <button
          type="button"
          className="voice-input-button"
          onClick={handleVoiceInput}
          disabled={isRecording}
        >
          {isRecording ? '🎤 Processing...' : '🎤'}
        </button>
      </div>

      <button type="submit" className="analyze-button">
        {isCitizenMode ? "Get Help" : "Analyze Complaint"}
      </button>
    </form>
  );
};

export default ComplaintForm; 