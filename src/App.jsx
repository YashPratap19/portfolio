import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Experience from './components/Experience';
import Education from './components/Education';
import Competitions from './components/Competitions';
import Responsibilities from './components/Responsibilities';
import FloatingNav from './components/FloatingNav';
import './styles/global.css';

const AppContainer = styled.div`
  min-height: 100vh;
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  position: relative;
  background: var(--bg-primary);
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  background: transparent;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  position: relative;
  pointer-events: none;
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  & > * {
    pointer-events: auto;
  }
`;

const ProfileSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  background: rgba(10, 25, 47, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
    border-radius: inherit;
    z-index: -1;
    animation: rotate 5s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--bg-primary);
`;

const Name = styled(motion.h1)`
  font-size: 4.5rem;
  margin: 0;
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 219, 222, 0.3);
  white-space: nowrap;
  
  @media (max-width: 968px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    white-space: normal;
  }
`;

const Role = styled(motion.h2)`
  font-size: 1.8rem;
  margin: 0;
  color: var(--text-secondary);
  font-weight: 400;
  
  @media (max-width: 968px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ContactLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    border-color: var(--accent-primary);
    box-shadow: 0 0 20px rgba(0, 219, 222, 0.2);
  }

  svg {
    font-size: 1.2rem;
    color: var(--accent-primary);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  scroll-margin-top: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);
  
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleScrollClick = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <FloatingNav />
      
      <HeroSection ref={heroRef}>
        <HeroContent>
          <ProfileSection
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: contentOpacity }}
          >
            <Name
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Yash Pratap Singh
            </Name>
            <Role
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Product Manager & Technology Enthusiast
            </Role>
            <ContactInfo
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <ContactLink 
                href="mailto:yashpratap19.singh@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> yashpratap19.singh@gmail.com
              </ContactLink>
              <ContactLink 
                href="tel:+919818190310"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone /> +91-9818190310
              </ContactLink>
              <ContactLink 
                href="https://linkedin.com/in/yashpratap19" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin /> LinkedIn
              </ContactLink>
            </ContactInfo>
          </ProfileSection>
          
          <ImageContainer
            style={{ scale: imageScale, opacity: imageOpacity }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileImage 
              src="https://i.ibb.co/FLGsFXRb/upscalemedia-transformed-1.png"
              alt="Yash Pratap Singh"
            />
          </ImageContainer>
        </HeroContent>
      </HeroSection>

      <Section id="experience">
        <Experience />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="responsibilities">
        <Responsibilities />
      </Section>
      <Section id="competitions">
        <Competitions />
      </Section>
    </AppContainer>
  );
};

export default App; 