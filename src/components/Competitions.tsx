import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card } from '../styles/shared';

const CompetitionsSection = Section;
const CompetitionsContainer = Container;

const CompetitionCard = styled(Card)`
  margin-bottom: 2rem;
`;

const CompetitionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--card-border);
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

const CompetitionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
`;

const Date = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const Achievement = styled.p`
  color: var(--accent-secondary);
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const BulletPoints = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-primary);
    line-height: 1.6;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
    }

    strong {
      color: var(--accent-secondary);
      font-weight: 500;
    }
  }
`;

const competitions = [
  {
    title: 'EY CAFTA',
    subtitle: 'National Champion',
    date: 'July 2024',
    icon: <FaTrophy />,
    points: [
      <>Secured <strong>1st position</strong> in nationwide Finance & Treasury Risk Assessment Case Competition hosted by EY competing with a pool of <strong>2000+ participants</strong>.</>,
      <>Awarded <strong>2 months internship</strong> with EY India FRMS team to focus on banking & capital markets, insurance, asset management, & PE sectors.</>
    ]
  },
  {
    title: 'Muthoot Finclusion Challenge',
    subtitle: '2nd runners up',
    date: 'July 2024',
    icon: <FaMedal />,
    points: [
      <>Second runners up finish among <strong>25,000+ participants</strong>—one of only 2 undergraduate team to reach finals competing against premier MBA colleges.</>,
      <>Devised a <strong>go-to-market plan</strong> and user-focused innovative solutions, navigating through complex RBI regulatory and market insights.</>
    ]
  }
];

const Competitions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <CompetitionsSection>
      <CompetitionsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Competitions
        </SectionTitle>
        {competitions.map((competition, index) => (
          <CompetitionCard
            key={index}
            ref={index === 0 ? ref : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <CompetitionHeader>
              <IconWrapper>
                {competition.icon}
              </IconWrapper>
              <HeaderContent>
                <TitleRow>
                  <CompetitionTitle>{competition.title}</CompetitionTitle>
                  <Date>{competition.date}</Date>
                </TitleRow>
                <Achievement>{competition.subtitle}</Achievement>
              </HeaderContent>
            </CompetitionHeader>
            <BulletPoints>
              {competition.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </BulletPoints>
          </CompetitionCard>
        ))}
      </CompetitionsContainer>
    </CompetitionsSection>
  );
};

export default Competitions; 