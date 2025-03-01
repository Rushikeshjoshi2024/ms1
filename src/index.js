import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // Import HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* Wrap your App component with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

// For performance measuring (optional)
reportWebVitals();
