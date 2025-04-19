import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Section, Container, SectionTitle, Card, BulletPoints } from '../styles/shared';

const ExperienceSection = Section;
const ExperienceContainer = Container;

const ExperienceCard = styled(Card)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    &::before {
      transform: translateX(100%);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const CompanyLogo = styled.div<{ logo: string; company: string }>`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: white;
  padding: ${props => props.company === 'Ernst & Young - EY' ? '0' : '0'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    ${props => props.company === 'Ernst & Young - EY' && `
      object-position: center;
      transform: scale(1.1);
    `}
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
`;

const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  color: var(--accent-primary);
  margin: 0;
`;

const Role = styled.h4`
  font-size: 1.4rem;
  margin: 0;
  font-weight: 500;
  color: var(--accent-secondary);
  opacity: 0.9;
`;

const Duration = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--accent-primary);
    border-radius: 50%;
    display: inline-block;
  }
`;

const experiences = [
  {
    company: 'Ernst & Young - EY',
    role: 'Financial Services Risk Management Consulting Intern',
    duration: 'Remote, Jan 2025 – March 2025',
    logo: 'https://i.ibb.co/Kcr6QF9r/EY-Logo.jpg',
    points: [
      'Researched API-driven payment processing platform for PaaS solutions which can aims to reduce payment processing time by up to 70%.',
      'Investigating payment fraud prevention metrics and AI/ML-driven detection systems along with CBPs in 20+ regions and 45+ countries.'
    ]
  },
  {
    company: 'Centre for Railway Information Systems - CRIS',
    role: 'Summer Intern - PRS',
    duration: 'Delhi, May 2024 – July 2024',
    logo: 'https://i.ibb.co/mVC6w4Mp/images.jpg',
    points: [
      'Optimized user experience & features for the Concession Management Portal with over 53 categories of passengers & 400+ concessions.',
      'Enhanced portal functionality by integrating Angular components & improved performance for the CMP for 1100+ Indian Railways officials to operate.'
    ]
  },
  {
    company: 'Air India Express (AirAsia)',
    role: 'Product Intern',
    duration: 'Remote, Feb 2024 – May 2024',
    logo: 'https://i.ibb.co/CsSCRYFL/channels4-profile.jpg',
    points: [
      'Conducted competitive benchmarking for 50+ LCCs & 10+ OTAs, strategically positioned product features for passengers using AIX booking portal.',
      'Identified new revenue streams like university partnerships and ancillaries for implementation, focusing on e-commerce monetization.',
      'Proposed PRDs & redesigned over 7 flows, including payments, flights discovery, cart, & flight status, optimizing user experience & functionality.'
    ]
  },
  {
    company: 'FastCut AI',
    role: 'Co-Founder',
    duration: 'Goa, July 2023 – Dec 2023',
    logo: 'https://i.ibb.co/0jh6CkzB/fastcutai-logo.jpg',
    points: [
      'Pioneered AI-powered short-form content tool in a market having 10.2% YoY growth, to streamline content creation & boost engagement.',
      'Ranked #4 on Product Hunt Daily at launch with 400+ upvotes, 200+ pre-launch waitlisted users, and 150+ early access users.'
    ]
  },
  {
    company: 'OnePlus',
    role: 'Product Test & Development',
    duration: 'Remote, Sept 2020 – Feb 2022',
    logo: 'https://i.ibb.co/BbJ69Jf/images.png',
    points: [
      'Analyzed & validated OnePlus TV U1S & Q1 CBT software & hardware in the PVT phase with the R&D team ensuring high-quality product release.',
      'Launched pre-release India-level campaigns with the marketing team, achieved over 81K engagements & increasing brand visibility & credibility.',
      'Developed TV Aftersales DBMS prototype using Python & MySQL, prioritized service transparency & speed for improved customer support.',
      'Transformed OnePlus Connect app with 20+ wireframes, incorporated new features like FTP, OxygenPlay & storage browsing to enrich & enhance UX.',
      'Deployed a feedback integration bot using Slack API & Google Sheets scripting for OnePlus QA, cutting processing time by 60% in the beta phase.'
    ]
  }
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '50px 0px',
  });

  return (
    <ExperienceSection>
      <ExperienceContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </SectionTitle>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            ref={index === 0 ? ref : undefined}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            role="article"
            aria-label={`Experience at ${exp.company}`}
          >
            <CompanyLogo 
              logo={exp.logo} 
              company={exp.company}
              role="img"
              aria-label={`${exp.company} logo`}
            >
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                loading="lazy"
                width="100"
                height="100"
              />
            </CompanyLogo>
            <ExperienceContent>
              <CompanyName>{exp.company}</CompanyName>
              <Role>{exp.role}</Role>
              <Duration>{exp.duration}</Duration>
              <BulletPoints>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </BulletPoints>
            </ExperienceContent>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 