import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 219, 222, 0.3);
  position: relative;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 2px;

    @media (max-width: 768px) {
      width: 60px;
    }
  }
`;

export const Card = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  &:hover {
    border-color: var(--accent-primary);
    box-shadow: 0 10px 30px rgba(0, 219, 222, 0.1);
    transform: translateY(-5px);
  }
`;

export const BulletPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;

  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-primary);
    line-height: 1.6;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
      font-size: 1.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: 4rem 0;
  background: var(--bg-primary);
  position: relative;
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`; 