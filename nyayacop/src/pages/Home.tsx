import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/Home.css';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43a047;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a237e;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a237e;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const WhySection = styled.section`
  background-color: white;
  padding: 4rem 2rem;
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const WhyCard = styled.div`
  padding: 2rem;
  border-radius: 8px;
  background-color: #f8f9fa;
`;

const WhyTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a237e;
  margin-bottom: 1rem;
`;

const WhyDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Transforming FIR Filing with AI-Powered Legal Intelligence</HeroTitle>
        <HeroSubtitle>
          Making legal assistance accessible, efficient, and user-friendly for everyone
        </HeroSubtitle>
        <CTAButton onClick={handleGetStarted}>Get Started</CTAButton>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why NyayaCop?</SectionTitle>
        <WhyGrid>
          <WhyCard>
            <WhyTitle>No More Incorrect Legal Sections</WhyTitle>
            <WhyDescription>
              Our AI ensures accurate application of legal sections in your FIR, reducing errors and improving case outcomes.
            </WhyDescription>
          </WhyCard>
          <WhyCard>
            <WhyTitle>Landmark Judgments at Your Fingertips</WhyTitle>
            <WhyDescription>
              Access relevant legal precedents instantly to strengthen your case and understand your rights better.
            </WhyDescription>
          </WhyCard>
          <WhyCard>
            <WhyTitle>Multilingual & Voice Support</WhyTitle>
            <WhyDescription>
              File complaints in your preferred language or use voice input for a more natural experience.
            </WhyDescription>
          </WhyCard>
          <WhyCard>
            <WhyTitle>Citizen Mode for Self-Help</WhyTitle>
            <WhyDescription>
              Get preliminary legal guidance before reaching the police station, saving time and effort.
            </WhyDescription>
          </WhyCard>
        </WhyGrid>
      </FeaturesSection>

      <FeaturesSection>
        <SectionTitle>Key Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🔍</FeatureIcon>
            <FeatureTitle>Real-Time Analysis</FeatureTitle>
            <FeatureDescription>
              Get instant analysis of your complaint with relevant legal sections and procedures.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>⚖️</FeatureIcon>
            <FeatureTitle>Legal Section Suggestions</FeatureTitle>
            <FeatureDescription>
              Accurate suggestions for IPC/CrPC sections based on your complaint details.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Legal Precedents</FeatureTitle>
            <FeatureDescription>
              Access to relevant case laws and judgments to strengthen your case.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🗣️</FeatureIcon>
            <FeatureTitle>Voice Input</FeatureTitle>
            <FeatureDescription>
              Coming soon: File complaints using voice input for a more natural experience.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home; 