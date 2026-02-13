import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import i18n initialization promise - must complete before rendering
import { i18nInitPromise } from './lib/i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Render the React app
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

// Wait for i18n initialization to complete before rendering
// This ensures translations are ready when components mount
i18nInitPromise
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error('Failed to initialize i18n:', error);
    // Still render the app even if i18n fails - will use fallback language
    renderApp();
  });
