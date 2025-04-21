import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import RetroContent from './RetroContent';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1B1B1B;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
    min-height: 100vh;
    padding: 1rem;
  }
`;

const PokedexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0;
    height: auto;
    min-height: 100vh;
  }
`;

const PokedexOuter = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 90%;
  background: #DC0A2D;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  box-shadow: 
    inset -10px -10px 15px rgba(0, 0, 0, 0.3),
    inset 10px 10px 15px rgba(255, 255, 255, 0.2),
    0 0 50px rgba(220, 10, 45, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 15px;
    border-radius: 10px;
  }

  &::before {
    content: 'Yash Portfolio Dex';
    position: absolute;
    top: 35px;
    left: 100px;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 1;
    font-family: 'VT323', monospace;
    letter-spacing: 2px;
    margin-left: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    border: 8px solid #1B1B1B;
    box-shadow: 
      0 0 0 5px #DC0A2D,
      inset 0 0 10px rgba(0, 0, 0, 0.5);
    animation: glow 2s infinite;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      top: 15px;
      left: 15px;
      border-width: 6px;
    }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 0 5px #DC0A2D, inset 0 0 10px rgba(0, 0, 0, 0.5); }
    50% { box-shadow: 0 0 20px #89c4ff, inset 0 0 10px rgba(0, 0, 0, 0.5); }
  }
`;

const Screen = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 100px;
  background: #98CB98;
  border: 20px solid #1B1B1B;
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin-top: 60px;
    height: auto;
    min-height: calc(100vh - 160px);
    border-width: 10px;
    padding: 15px;
    grid-template-columns: 1fr;
    gap: 15px;
  }

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

const MenuCard = styled(motion.div)`
  background: #1B1B1B;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  min-height: 200px;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 150px;
    padding: 15px;
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    image-rendering: pixelated;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
    }
  }

  span.icon {
    font-size: 64px;
    margin-bottom: 20px;
    display: block;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 48px;
      margin-bottom: 15px;
    }
  }

  span.label {
    color: #98CB98;
    font-size: 18px;
    text-align: center;
    text-shadow: 2px 2px 0 #000;
    font-family: 'Press Start 2P', monospace;
    line-height: 1.4;
    display: block;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.4),
      inset 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    gap: 10px;
  }
`;

const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #1B1B1B;
  color: #98CB98;
  font-family: 'Press Start 2P', monospace;
  cursor: pointer;
  box-shadow: 
    0 5px 10px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(255, 255, 255, 0.1);

  &:active {
    transform: translateY(2px);
    box-shadow: 
      0 2px 5px rgba(0, 0, 0, 0.3),
      inset 0 0 10px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 12px;
  }
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: auto;
  margin: 10px 0;
  object-fit: contain;
  image-rendering: auto;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.2rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }

  .duration {
    color: #DC0A2D;
    font-size: 14px;
    margin: 5px 0;
  }

  .role {
    font-weight: bold;
    margin: 5px 0;
  }
`;

const CertificationCard = styled(ExperienceCard)`
  background: rgba(27, 27, 27, 0.9);
  border: 2px solid #98CB98;
  margin: 15px 0;
  
  h4 {
    color: #98CB98;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.9rem;
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
      background: white;
      border-radius: 4px;
      padding: 2px;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;

    @media (max-width: 768px) {
      padding-left: 15px;
    }
  }

  li {
    color: #98CB98;
    margin: 8px 0;
    font-size: 0.9rem;
    
    &::marker {
      content: '>';
      color: #DC0A2D;
    }

    ul {
      margin-top: 8px;
      
      li::marker {
        content: '*';
      }
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .cert-date {
    color: #DC0A2D;
    font-size: 0.8rem;
    font-family: 'Press Start 2P', monospace;

    @media (max-width: 768px) {
      font-size: 0.7rem;
      display: block;
      margin-top: 5px;
    }
  }
`;

const WindowContent = styled.div`
  padding: 20px;
  color: #333;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RetroPortfolio: React.FC = () => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    {
      id: 'experience',
      icon: '🏢',
      label: 'Experience',
      content: (
        <div>
          <ExperienceCard>
            <h3>
              <CompanyLogo src="https://i.ibb.co/Kcr6QF9r/EY-Logo.jpg" alt="EY Logo" />
              Ernst & Young - EY
            </h3>
            <div className="duration">Remote, Jan 2025 – March 2025</div>
            <div className="role">Financial Services Risk Management Consulting Intern</div>
            <ul>
              <li>Researched API-driven payment processing platform for PaaS solutions which can aims to reduce payment processing time by up to 70%</li>
              <li>Investigating payment fraud prevention metrics and AI/ML-driven detection systems along with CBPs in 20+ regions and 45+ countries</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>
              <CompanyLogo src="https://i.ibb.co/CsSCRYFL/channels4-profile.jpg" alt="Air India Express Logo" />
              Air India Express (AirAsia)
            </h3>
            <div className="duration">Remote, Feb 2024 – May 2024</div>
            <div className="role">Product Intern</div>
            <ul>
              <li>Conducted competitive benchmarking for 50+ LCCs & 10+ OTAs, strategically positioned product features for passengers using AIX booking portal</li>
              <li>Identified new revenue streams like university partnerships and ancillaries for implementation, focusing on e-commerce monetization</li>
              <li>Proposed PRDs & redesigned over 7 flows, including payments, flights discovery, cart, & flight status, optimizing user experience & functionality</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>
              <CompanyLogo src="https://i.ibb.co/0jh6CkzB/fastcutai-logo.jpg" alt="FastCut AI Logo" />
              FastCut AI
            </h3>
            <div className="duration">Goa, July 2023 – Dec 2023</div>
            <div className="role">Co-Founder</div>
            <ul>
              <li>Pioneered AI-powered short-form content tool in a market having 10.2% YoY growth, to streamline content creation & boost engagement</li>
              <li>Ranked #4 on Product Hunt Daily at launch with 400+ upvotes, 200+ pre-launch waitlisted users, and 150+ early access users</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>
              <CompanyLogo src="https://i.ibb.co/BbJ69Jf/images.png" alt="OnePlus Logo" />
              OnePlus
            </h3>
            <div className="duration">Remote, Sept 2020 – Feb 2022</div>
            <div className="role">Product Test & Development</div>
            <ul>
              <li>Analyzed & validated OnePlus TV U1S & Q1 CBT software & hardware in the PVT phase with the R&D team ensuring high-quality product release</li>
              <li>Launched pre-release India-level campaigns with the marketing team, achieved over 81K engagements & increasing brand visibility & credibility</li>
              <li>Developed TV Aftersales DBMS prototype using Python & MySQL, prioritized service transparency & speed for improved customer support</li>
              <li>Transformed OnePlus Connect app with 20+ wireframes, incorporated new features like FTP, OxygenPlay & storage browsing to enrich & enhance UX</li>
              <li>Deployed a feedback integration bot using Slack API & Google Sheets scripting for OnePlus QA, cutting processing time by 60% in the beta phase</li>
            </ul>
          </ExperienceCard>
        </div>
      )
    },
    {
      id: 'education',
      icon: '🎓',
      label: 'Education',
      content: (
        <div>
          <ExperienceCard>
            <h3>
              <CompanyLogo src="https://i.ibb.co/tT49Wgdc/images.jpg" alt="BITS Pilani Logo" />
              BITS Pilani, KK Birla Goa Campus
            </h3>
            <div className="duration">Goa, Oct 2022 - May 2026</div>
            <div className="role">Bachelor of Engineering (B.E.) with Minor in Finance</div>
            <ul>
              <li>Relevant finance courses: Principles of Management, New Venture Creation, Financial Risk Management, Portfolio Management, Business Valuation</li>
              <li>Relevant engineering courses: Numerical Methods, Probability and Statistics, Process Design, Process Control, Computer Programming, Process Calculations</li>
            </ul>
          </ExperienceCard>
        </div>
      )
    },
    {
      id: 'certifications',
      icon: '🎯',
      label: 'Certs',
      content: (
        <div>
          <CertificationCard>
            <h4>
              <img src="https://i.ibb.co/Kcr6QF9r/EY-Logo.jpg" alt="Bloomberg Logo" />
              RECENT_ACHIEVEMENTS
            </h4>
            <ul>
              <li>Bloomberg Finance Fundamentals <span className="cert-date">[JAN 2025]</span></li>
              <li>Prompt Engineering (AI0117EN) - IBM <span className="cert-date">[SEP 2023]</span></li>
              <li>DSA Workshop - GeeksforGeeks <span className="cert-date">[MAR 2023]</span></li>
            </ul>
          </CertificationCard>

          <CertificationCard>
            <h4>
              <img src="https://i.ibb.co/M6zBB9f/microsoft-logo.png" alt="Microsoft Logo" />
              MICROSOFT_ADVERTISING
            </h4>
            <ul>
              <li>Certified Professional (MACP) <span className="cert-date">[MAY 2022]</span></li>
              <li>Native & Display Certification <span className="cert-date">[MAY 2022]</span></li>
              <li>Search Certification - SEO <span className="cert-date">[MAY 2022]</span></li>
              <li>Shopping Certification <span className="cert-date">[MAY 2022]</span></li>
            </ul>
          </CertificationCard>

          <CertificationCard>
            <h4>
              <img src="https://i.ibb.co/CsSCRYFL/ibm-logo.png" alt="IBM Logo" />
              IBM_DATA_SCIENCE
            </h4>
            <ul>
              <li>Big Data 101 <span className="cert-date">[APR 2022]</span></li>
              <li>Data Analysis with Python <span className="cert-date">[APR 2022]</span></li>
              <li>Data Visualization with Python <span className="cert-date">[APR 2022]</span></li>
            </ul>
          </CertificationCard>

          <CertificationCard>
            <h4>
              <img src="https://i.ibb.co/BbJ69Jf/google-logo.png" alt="Google Logo" />
              OTHER_SKILLS
            </h4>
            <ul>
              <li>Google Digital Marketing Fundamentals <span className="cert-date">[APR 2022]</span></li>
              <li>IoT Blockchain Network for Supply Chain - IBM <span className="cert-date">[APR 2022]</span></li>
            </ul>
          </CertificationCard>
        </div>
      )
    },
    {
      id: 'skills',
      icon: '⚡',
      label: 'Skills',
      content: (
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li>Frontend Development: React.js, TypeScript, HTML5, CSS3, JavaScript</li>
            <li>Backend Development: Node.js, Express.js, Python, Java</li>
            <li>Cloud Technologies: AWS (EC2, S3, Lambda), Azure, Google Cloud Platform</li>
            <li>DevOps: Docker, Kubernetes, Jenkins, Git</li>
            <li>Databases: MongoDB, PostgreSQL, MySQL</li>
            <li>Tools: Jira, Confluence, Figma, Adobe XD</li>
          </ul>

          <h3>Professional Skills</h3>
          <ul>
            <li>Product Management: Strategy, Roadmapping, User Stories, Agile/Scrum</li>
            <li>Leadership: Team Management, Stakeholder Communication, Project Planning</li>
            <li>Business: Market Analysis, Data Analytics, Strategic Planning</li>
            <li>Consulting: Client Relations, Process Optimization, Change Management</li>
          </ul>
        </div>
      )
    },
    {
      id: 'projects',
      icon: '🚀',
      label: 'Projects',
      content: (
        <div>
          <ExperienceCard>
            <h3>Impact of Green FinTech Adoption on ESG</h3>
            <div className="duration">Jan 2025 - Present</div>
            <div className="role">BITS Pilani Research Project</div>
            <ul>
              <li>Analyzed Green FinTech adoption's ESG impact on 85 selected Indian firms from 1000+ listed companies using Bloomberg Terminal and Refinitiv</li>
              <li>Conducted panel data regression in Stata with over 870 points to identify longitudinal ESG trends and insights for sustainable financial strategies</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>TextMine Pro</h3>
            <div className="duration">Feb 2025</div>
            <div className="role">Research Tool Development</div>
            <ul>
              <li>Launched an offline lexicographical keyword research tool capable of processing 100+ PDFs, reducing analysis time from 15 hours to ~100 seconds</li>
              <li>High-precision term frequency indexing system with per-10k normalization, achieving 100% accuracy and enabling robust multi-word analysis</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>Interfacing Fuel Cell with Electric Battery</h3>
            <div className="duration">Jan 2024 - May 2024</div>
            <div className="role">BITS Pilani Research Project</div>
            <ul>
              <li>Designed and simulated a DC-DC boost converter for efficient battery charging from low-voltage PEMFC, achieving a 700% increase in power efficiency</li>
              <li>Developed comprehensive voltage and current profiles in Matlab Simulink, identifying critical parameters for optimizing boost converter performance</li>
              <li>Explored and implemented advanced circuit design techniques to enhance energy storage solutions for sustainable and stable power delivery</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>Devs Fear This Bot</h3>
            <div className="duration">May 2023</div>
            <div className="role">OnePlus Project</div>
            <ul>
              <li>A feedback bot made using Slack API, and Google sheets scripting for OnePlus QA</li>
              <li>Takes responses from Google form and posts it directly to a slack channel</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>One Million OnePlus TVs</h3>
            <div className="duration">Apr 2022 - May 2022</div>
            <div className="role">OnePlus Campaign</div>
            <ul>
              <li>A contest page created for OnePlus TV's 1 million sales campaign</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>OnePlus Connect App Redesign</h3>
            <div className="duration">Jan 2022 - May 2022</div>
            <div className="role">UI/UX Design</div>
            <ul>
              <li>OnePlus Connect App redesigned for incorporating more features such as FTP, OxygenPlay library with remote play, TV local storage browsing, etc</li>
              <li>Technologies: Adobe XD, Android Studio, User Interface Design</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>OnePlus TV After Sales DBMS</h3>
            <div className="duration">Nov 2021 - Jan 2022</div>
            <div className="role">Database Development</div>
            <ul>
              <li>A TV (Service and Request) Database management system created by interfacing of MySQL and Python, with Tkinter GUI</li>
              <li>Technologies: SQL, Python, User Interface Design, MySQL</li>
            </ul>
          </ExperienceCard>
        </div>
      )
    },
    {
      id: 'competitions',
      icon: '🏆',
      label: 'Competitions',
      content: (
        <div>
          <ExperienceCard>
            <h3>EY CAFTA</h3>
            <div className="role">National Champion</div>
            <div className="duration">July 2024</div>
            <ul>
              <li>Secured 1st position in nationwide Finance & Treasury Risk Assessment Case Competition hosted by EY competing with a pool of 2000+ participants</li>
              <li>Awarded 2 months internship with EY India FRMS team to focus on banking & capital markets, insurance, asset management, & PE sectors</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard>
            <h3>Muthoot Finclusion Challenge</h3>
            <div className="role">2nd runners up</div>
            <div className="duration">July 2024</div>
            <ul>
              <li>Second runners up finish among 25,000+ participants—one of only 2 undergraduate team to reach finals competing against premier MBA colleges</li>
              <li>Devised a go-to-market plan and user-focused innovative solutions, navigating through complex RBI regulatory and market insights</li>
            </ul>
          </ExperienceCard>
        </div>
      )
    },
    {
      id: 'contact',
      icon: '📫',
      label: 'Contact',
      content: (
        <WindowContent>
          <h2>Contact Me</h2>
          <ContactSection>
            <ProfileImage src="/profile.jpg" alt="Yash Pratap Singh" />
            <ContactInfo>
              <ContactItem>
                <FaEnvelope />
                <a href="mailto:yashpratap19.singh@gmail.com">yashpratap19.singh@gmail.com</a>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <a href="tel:+919818190310">+91-9818190310</a>
              </ContactItem>
              <ContactItem>
                <FaLinkedin />
                <a href="https://linkedin.com/in/yashpratap19" target="_blank" rel="noopener noreferrer">linkedin.com/in/yashpratap19</a>
              </ContactItem>
              <LocationText>Based in New Delhi, India</LocationText>
              <AvailabilityText>Available for remote work and relocation</AvailabilityText>
            </ContactInfo>
          </ContactSection>
        </WindowContent>
      )
    }
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (isTransitioning) return;
    
    if (activeWindow === item.id) {
      // If clicking the same item, close the window
      setIsTransitioning(true);
      setActiveWindow(null);
      setSelectedItem(null);
    } else {
      // If clicking a different item, open its window
      setIsTransitioning(true);
      setSelectedItem(item);
      setActiveWindow(item.id);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
        break;
      case 'ArrowRight':
        setSelectedIndex((prev) => (prev + 1) % menuItems.length);
        break;
      case 'Enter':
        handleItemClick(menuItems[selectedIndex]);
        break;
      case 'Escape':
        setActiveWindow(null);
        setSelectedItem(null);
        break;
    }
  }, [selectedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Reset transitioning state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const selectedItemData = menuItems.find(item => item.id === activeWindow);

  return (
    <PageContainer>
      <PokedexContainer>
        <PokedexOuter>
          <Screen>
            <AnimatePresence>
              {menuItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    scale: index === selectedIndex ? 1.1 : 1,
                    border: index === selectedIndex ? '3px solid #DC0A2D' : 'none'
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                </MenuCard>
              ))}
            </AnimatePresence>
          </Screen>
          <Controls>
            <ControlButton 
              aria-label="Previous"
              onClick={() => setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length)}
            >
              ◀
            </ControlButton>
            <ControlButton 
              aria-label="Select"
              onClick={() => handleItemClick(menuItems[selectedIndex])}
            >
              ●
            </ControlButton>
            <ControlButton 
              aria-label="Next"
              onClick={() => setSelectedIndex((prev) => (prev + 1) % menuItems.length)}
            >
              ▶
            </ControlButton>
          </Controls>
        </PokedexOuter>

        <AnimatePresence>
          {selectedItemData && (
            <RetroContent
              item={selectedItemData}
              onClose={() => {
                setActiveWindow(null);
                setSelectedItem(null);
              }}
            />
          )}
        </AnimatePresence>
      </PokedexContainer>
    </PageContainer>
  );
};

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #DC0A2D;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  
  a {
    color: #DC0A2D;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF1A3D;
      text-decoration: underline;
    }
  }
`;

const LocationText = styled.p`
  margin-top: 10px;
  font-style: italic;
  color: #666;
`;

const AvailabilityText = styled.p`
  margin-top: 5px;
  color: #DC0A2D;
  font-weight: bold;
`;

export default RetroPortfolio; 