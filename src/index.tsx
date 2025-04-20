import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #13131a;
    --bg-card: rgba(255, 255, 255, 0.03);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --accent-primary: #00dbde;
    --accent-secondary: #fc00ff;
    --card-border: rgba(255, 255, 255, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: var(--bg-primary);
  }

  body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    color: var(--text-primary);
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 5px;
  }

  ::selection {
    background: var(--accent-primary);
    color: var(--bg-primary);
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Press+Start+2P&display=swap');
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 