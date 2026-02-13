import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import i18n initialization promise
import { i18nInitPromise } from './lib/i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Show loading state immediately while i18n initializes
rootElement.innerHTML = `
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: white;">
    <div style="font-size: 1.875rem; font-weight: 700; letter-spacing: -0.025em; color: #27013D;">
      BIRD&
    </div>
  </div>
`;

// Function to render the React app
const renderApp = () => {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

// ALWAYS wait for i18n initialization to complete before rendering
// This prevents the race condition that causes blank text
i18nInitPromise
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error('Failed to initialize i18n:', error);
    // Still render the app even if i18n fails - will use fallback language
    renderApp();
  });
