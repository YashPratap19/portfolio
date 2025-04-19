import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card, BulletPoints } from '../styles/shared';

const ResponsibilitiesSection = styled(Section)`
  padding: 6rem 2rem;
`;

const ResponsibilitiesContainer = Container;

const ResponsibilityCard = styled(Card)`
  margin-bottom: 2rem;
`;

const RoleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
`;

const Duration = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const Organization = styled.h4`
  color: var(--accent-secondary);
  font-size: 1.2rem;
  margin: 0;
`;

const Responsibilities: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ResponsibilitiesSection>
      <ResponsibilitiesContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Position of Responsibilities
        </SectionTitle>
        <ResponsibilityCard
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <RoleHeader>
            <LogoContainer>
              <Logo 
                src="https://i.ibb.co/gbcBv9tw/BGCC-Black-background.png" 
                alt="BITS Goa Consulting Club Logo" 
              />
            </LogoContainer>
            <HeaderContent>
              <TitleRow>
                <Role>President</Role>
                <Duration>Apr 2024 - May 2025</Duration>
              </TitleRow>
              <Organization>BITS Goa Consulting Club</Organization>
            </HeaderContent>
          </RoleHeader>
          <BulletPoints>
            <li>
              Led a team of <strong>40+ consultants</strong> addressing diverse business problems for EdTech, FinTech, & other startups across India to deliver strategic solutions.
            </li>
            <li>
              Cultivated client relationships with <strong>25+ clients</strong> and hosted case competitions and guest lectures, boosting <strong>campus consulting culture</strong>.
            </li>
            <li>
              Elevated the consulting club to top-tier status via <strong>partnerships</strong> with IITs, SRCC, and IIMs and ensuring <strong>500,000+ reach</strong> through social media channels.
            </li>
          </BulletPoints>
        </ResponsibilityCard>
      </ResponsibilitiesContainer>
    </ResponsibilitiesSection>
  );
};

export default Responsibilities; 