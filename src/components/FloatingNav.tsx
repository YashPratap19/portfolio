import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaUserTie } from 'react-icons/fa';

const NavWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
`;

const NavContainer = styled(motion.nav)`
  display: flex;
  gap: 0.8rem;
  padding: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 35px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 90vw;
  pointer-events: auto;
`;

const NavTooltip = styled(motion.span)`
  position: absolute;
  bottom: calc(100% + 0.8rem);
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg-card);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.9rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--card-border);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--bg-card);
  }
`;

interface NavItemProps {
  $isActive?: boolean;
}

const NavItem = styled(motion.button)<NavItemProps>`
  background: var(--bg-card);
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${props => props.$isActive ? 'var(--accent-primary)' : 'var(--card-border)'};
  flex-shrink: 0;
  
  svg {
    color: ${props => props.$isActive ? 'var(--accent-primary)' : 'var(--text-secondary)'};
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  &:focus {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  &:hover {
    background: rgba(0, 219, 222, 0.1);
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    
    svg {
      color: var(--accent-primary);
      transform: scale(1.2);
    }
    
    .nav-tooltip {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;

interface NavLink {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'education', icon: <FaGraduationCap />, label: 'Education' },
  { id: 'responsibilities', icon: <FaUserTie />, label: 'Responsibilities' },
  { id: 'competitions', icon: <FaTrophy />, label: 'Competitions' },
];

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(id);
    }
  };

  return (
    <NavWrapper>
      <NavContainer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <AnimatePresence>
          {navLinks.map(({ id, icon, label }) => (
            <NavItem
              key={id}
              $isActive={activeSection === id}
              onClick={() => handleClick(id)}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => handleKeyDown(e, id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to ${label} section`}
              aria-current={activeSection === id ? 'true' : 'false'}
              tabIndex={0}
            >
              {icon}
              <NavTooltip className="nav-tooltip" role="tooltip">{label}</NavTooltip>
            </NavItem>
          ))}
        </AnimatePresence>
      </NavContainer>
    </NavWrapper>
  );
};

export default FloatingNav; 