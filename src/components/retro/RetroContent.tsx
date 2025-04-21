import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContentContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ContentCard = styled(motion.div)`
  width: 90%;
  max-width: 800px;
  height: 80vh;
  background: #98CB98;
  border: 20px solid #1B1B1B;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 
    inset 0 0 20px rgba(0, 0, 0, 0.3),
    0 0 50px rgba(152, 203, 152, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(152, 203, 152, 0.2) 50%,
      transparent 100%
    );
    background-size: 100% 4px;
    animation: scan 8s linear infinite;
    pointer-events: none;
  }

  @keyframes scan {
    0% { background-position: 0 -100vh; }
    100% { background-position: 0 100vh; }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 3px solid #1B1B1B;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #1B1B1B;
  text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.5);
  margin: 0;
  font-family: 'Press Start 2P', monospace;
`;

const Icon = styled.span`
  font-size: 32px;
  filter: drop-shadow(2px 2px 0 rgba(255, 255, 255, 0.5));
`;

const ContentScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: monospace;
  font-size: 16px;
  line-height: 1.6;
  color: #1B1B1B;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);

  h3 {
    font-family: 'Press Start 2P', monospace;
    font-size: 18px;
    margin: 20px 0 10px;
    color: #DC0A2D;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin: 10px 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 10px 0;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;

      &::before {
        content: '>';
        position: absolute;
        left: 0;
        color: #DC0A2D;
        font-weight: bold;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #1B1B1B;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #DC0A2D;
    border-radius: 6px;
    border: 2px solid #1B1B1B;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: #DC0A2D;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  box-shadow: 
    0 5px 10px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 7px 15px rgba(0, 0, 0, 0.3),
      inset 0 0 15px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 2px 5px rgba(0, 0, 0, 0.3),
      inset 0 0 10px rgba(255, 255, 255, 0.1);
  }
`;

interface RetroContentProps {
  item: {
    id: string;
    icon?: string;
    label?: string;
    title?: string;
    content: React.ReactNode;
  };
  onClose: () => void;
}

const RetroContent: React.FC<RetroContentProps> = ({ item, onClose }) => {
  return (
    <ContentContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ContentCard
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          {item.icon && <Icon>{item.icon}</Icon>}
          <Title>{item.label || item.title}</Title>
        </Header>
        <ContentScroll>
          {item.content}
        </ContentScroll>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ContentCard>
    </ContentContainer>
  );
};

export default RetroContent; 