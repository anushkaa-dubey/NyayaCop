import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import '../styles/Home.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #f8f9fa 70%, #e3e6f3 100%);
  padding: 6rem 2rem 2rem 2rem;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 3rem 1rem 1rem 1rem;
    min-height: auto;
  }
`;

const HeroLeft = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 2rem;
  @media (max-width: 900px) {
    align-items: center;
    padding-right: 0;
    margin-top: 2rem;
  }
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  @media (max-width: 900px) {
    min-width: 0;
    margin-bottom: 2rem;
  }
`;

const HeroHeadline = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  color: #1a237e;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

const HeroSubheading = styled.p`
  font-size: 1.3rem;
  color: #283593;
  margin-bottom: 2.2rem;
  max-width: 500px;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 1.05rem;
  }
`;

const HeroImage = styled.img`
  width: 340px;
  height: 340px;
  object-fit: contain;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(26,35,126,0.07);
  background: #e0e0e0;
  @media (max-width: 500px) {
    width: 90vw;
    height: 200px;
  }
`;

const ScrollDown = styled.button`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  animation: bounce 2s infinite;
  svg {
    width: 36px;
    height: 36px;
    color: #1a237e;
    opacity: 0.7;
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
  }
`;

const Section = styled.section`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background: white;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(26,35,126,0.04);
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    padding: 2.5rem 0.5rem 2rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #1a237e;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 800;
`;

const SectionText = styled.p`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  text-align: center;
`;

const CoreValuesList = styled.ul`
  margin: 2rem auto 0 auto;
  padding: 0;
  list-style: none;
  max-width: 600px;
`;

const CoreValue = styled.li`
  font-size: 1.05rem;
  color: #222;
  margin-bottom: 0.7rem;
  font-weight: 500;
  span {
    color: #1a237e;
    font-weight: 700;
    margin-right: 0.5rem;
  }
`;

const Footer = styled.footer`
  background: #1a237e;
  color: white;
  padding: 6rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
`;

const CTAButton = styled.button`
  padding: 1.2rem 3.5rem;
  font-size: 1.4rem;
  background: white;
  color: #1a237e;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(26, 35, 126, 0.2);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:hover::after {
    animation: ripple 1s ease-out;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
`;

const Card = styled.div`
  background: #f8f9fa;
  padding: 2.5rem 1.5rem;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(26,35,126,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0 6px 18px rgba(26,35,126,0.10);
    transform: translateY(-4px) scale(1.03);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  color: #1a237e;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a237e;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const CardText = styled.p`
  color: #444;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate('/login');
  };

  const scrollToVision = () => {
    const el = document.getElementById('vision-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection>
        <HeroLeft>
          <HeroHeadline>AI Legal Copilot for FIR Filing</HeroHeadline>
          <HeroSubheading>
            NyayaCop bridges the gap between citizens and law enforcement. Instantly analyze complaints, get legal section suggestions, and file FIRs with confidence—powered by AI.
          </HeroSubheading>
          <CTAButton onClick={handleTryNow}>Try Now</CTAButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage src="/images/ladyjustice.png" alt="NyayaCop Hero" />
        </HeroRight>
        <ScrollDown onClick={scrollToVision} aria-label="Scroll to Our Vision">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </ScrollDown>
      </HeroSection>

      <Section id="vision-section">
        <SectionTitle>Our Vision</SectionTitle>
        <SectionText>
          To be a globally recognized legal tech platform pioneering transformative legal services of innovation and excellence.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Our Core Values</SectionTitle>
        <CoreValuesList>
          <CoreValue><span>Integrity:</span> We uphold the highest ethical standards.</CoreValue>
          <CoreValue><span>Professionalism:</span> Delivering expert legal solutions.</CoreValue>
          <CoreValue><span>Innovation:</span> Embracing creativity in every case.</CoreValue>
          <CoreValue><span>Client-Centric:</span> Prioritizing your unique needs.</CoreValue>
          <CoreValue><span>Excellence:</span> Striving for unmatched quality.</CoreValue>
        </CoreValuesList>
      </Section>

      <Section>
        <SectionTitle>Why NyayaCop?</SectionTitle>
        <SectionContent>
          <Card>
            <CardIcon>🧩</CardIcon>
            <CardTitle>The Problem</CardTitle>
            <CardText>
              In India, there's a critical gap in legal expertise at the FIR level. Many police stations lack immediate access to legal experts, leading to incorrect FIRs and delayed justice.
            </CardText>
          </Card>
          <Card>
            <CardIcon>🤖</CardIcon>
            <CardTitle>The AI Solution</CardTitle>
            <CardText>
              Our AI-powered platform bridges this gap by providing instant legal assistance, ensuring accurate FIRs and faster justice delivery.
            </CardText>
          </Card>
          <Card>
            <CardIcon>⚡</CardIcon>
            <CardTitle>Real Impact</CardTitle>
            <CardText>
              By combining AI with legal expertise, we're transforming how FIRs are filed and processed, making justice more accessible and efficient.
            </CardText>
          </Card>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <SectionContent>
          <Card theme="dark">
            <CardIcon theme="dark">📝</CardIcon>
            <CardTitle theme="dark">File Your Complaint</CardTitle>
            <CardText theme="dark">
              Submit your complaint in any Indian language. Our AI will analyze and suggest relevant legal sections.
            </CardText>
          </Card>
          <Card theme="dark">
            <CardIcon theme="dark">⚖️</CardIcon>
            <CardTitle theme="dark">Legal Analysis</CardTitle>
            <CardText theme="dark">
              Get instant recommendations for IPC/CrPC sections and relevant case laws.
            </CardText>
          </Card>
          <Card theme="dark">
            <CardIcon theme="dark">📱</CardIcon>
            <CardTitle theme="dark">Track Progress</CardTitle>
            <CardText theme="dark">
              Monitor your FIR status and receive updates on case progress in real-time.
            </CardText>
          </Card>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Who is it for?</SectionTitle>
        <SectionContent>
          <Card>
            <CardIcon>👮</CardIcon>
            <CardTitle>Police Officers</CardTitle>
            <CardText>
              Get instant legal assistance while filing FIRs, ensuring accuracy and compliance.
            </CardText>
          </Card>
          <Card>
            <CardIcon>👥</CardIcon>
            <CardTitle>Citizens</CardTitle>
            <CardText>
              Draft complaints correctly with AI guidance and track FIR status in real-time.
            </CardText>
          </Card>
          <Card>
            <CardIcon>⚖️</CardIcon>
            <CardTitle>Legal Researchers</CardTitle>
            <CardText>
              Explore mapped sections and case laws for comprehensive legal research.
            </CardText>
          </Card>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Key Features</SectionTitle>
        <SectionContent>
          <Card theme="dark">
            <CardIcon theme="dark">🔒</CardIcon>
            <CardTitle theme="dark">Secure Access</CardTitle>
            <CardText theme="dark">
              Role-based authentication for police officers and citizens.
            </CardText>
          </Card>
          <Card theme="dark">
            <CardIcon theme="dark">📊</CardIcon>
            <CardTitle theme="dark">Smart Dashboards</CardTitle>
            <CardText theme="dark">
              Track FIRs, analyze trends, and monitor case progress.
            </CardText>
          </Card>
          <Card theme="dark">
            <CardIcon theme="dark">🌐</CardIcon>
            <CardTitle theme="dark">Multilingual Support</CardTitle>
            <CardText theme="dark">
              File complaints in multiple Indian languages with accurate translations.
            </CardText>
          </Card>
        </SectionContent>
      </Section>

      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/legal-guide">Legal Guide</a></li>
              <li><a href="/find-police-station">Find Police Station</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Contact</h3>
            <ul>
              <li>Email: contact@nyayacop.com</li>
              <li>GitHub: github.com/nyayacop</li>
              <li>Twitter: @nyayacop</li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Team</h3>
            <ul>
              <li>Smart India Hackathon 2025</li>
              <li>Team NyayaCop</li>
              <li>Made with ❤️ in India</li>
            </ul>
          </FooterSection>
        </FooterContent>
        <Copyright>
          © 2024 NyayaCop. All rights reserved.
        </Copyright>
      </Footer>
    </>
  );
};

export default Home; 