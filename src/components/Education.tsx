import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, Container, SectionTitle, Card } from '../styles/shared';

const EducationSection = styled(Section)`
  padding: 6rem 2rem;
`;

const EducationContainer = styled(Container)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const EducationCard = styled(Card)`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 0% 0%, rgba(0, 219, 222, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, rgba(255, 89, 100, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const UniversityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

const UniversityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UniversityLogo = styled(motion.img)`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  object-fit: contain;
  background: white;
  padding: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const University = styled(motion.h3)`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin: 0;
  
  span {
    color: var(--accent-primary);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent-primary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Duration = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1.1rem;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 219, 222, 0.1);
  border-radius: 20px;
  border: 1px solid var(--accent-primary);
`;

const Degree = styled(motion.h4)`
  font-size: 1.4rem;
  color: var(--accent-secondary);
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-secondary), transparent);
  }
`;

const CoursesSection = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

const CourseType = styled(motion.p)`
  font-style: italic;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: var(--accent-primary);
    font-size: 1.5rem;
  }
`;

const Courses = styled(motion.p)`
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1.2rem;
  padding-left: 1rem;
  border-left: 2px solid var(--accent-primary);
  
  span {
    color: var(--accent-secondary);
    font-weight: 500;
  }
`;

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <EducationSection>
      <EducationContainer>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Education
        </SectionTitle>
        <EducationCard
          as={motion.div}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <UniversityHeader>
            <UniversityInfo>
              <UniversityLogo 
                src="https://i.ibb.co/tT49Wgdc/images.jpg" 
                alt="BITS Pilani Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
              <University
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span>BITS Pilani</span>, KK Birla Goa Campus
              </University>
            </UniversityInfo>
            <Duration
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Goa, Oct 2022 - May 2026
            </Duration>
          </UniversityHeader>
          <Degree
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Bachelor of Engineering (B.E.) with Minor in Finance
          </Degree>
          
          <CoursesSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CourseType>Relevant finance courses:</CourseType>
              <Courses>
                <span>Principles of Management</span>, <span>New Venture Creation</span>,{' '}
                <span>Financial Risk Management</span>, <span>Portfolio Management</span>,{' '}
                <span>Business Valuation</span>
              </Courses>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <CourseType>Relevant engineering courses:</CourseType>
              <Courses>
                <span>Numerical Methods</span>, <span>Probability and Statistics</span>,{' '}
                <span>Process Design</span>, <span>Process Control</span>,{' '}
                <span>Computer Programming</span>, <span>Process Calculations</span>
              </Courses>
            </motion.div>
          </CoursesSection>
        </EducationCard>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education; 