import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import i18n and wait for initialization
import i18n, { i18nInitPromise } from './lib/i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Show loading state
rootElement.innerHTML = `
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: white;">
    <div style="text-align: center;">
      <div style="font-size: 1.875rem; font-weight: 700; letter-spacing: -0.025em; color: #27013D;">
        BIRD&
      </div>
    </div>
  </div>
`;

// Wait for i18n to be ready, then render the app
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

// Check if i18n is already initialized (resources are bundled, so it should be fast)
if (i18n.isInitialized) {
  renderApp();
} else {
  // Wait for initialization to complete
  i18nInitPromise.then(() => {
    renderApp();
  });
}
