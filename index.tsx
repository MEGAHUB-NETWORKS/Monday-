
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    console.log('NexusTech: Initializing React Root...');
    const root = createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error('NexusTech: Root element not found.');
  }
};

// Ensure DOM is fully loaded before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
