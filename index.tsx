
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    console.log('NexusTech: Initializing UI Layer...');
    const root = createRoot(rootElement);
    root.render(<App />);
    // Force immediate dismissal of loading screen after render start
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
