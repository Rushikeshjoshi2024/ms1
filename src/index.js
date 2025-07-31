import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // Import HashRouter
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId = "952339138614-n4jja1bk5mc9mksahc093ogq33ggp1ac.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>

      <HashRouter>  {/* Wrap your App component with HashRouter */}
        <App />
      </HashRouter>
    </GoogleOAuthProvider>

  </React.StrictMode>

);

// For performance measuring (optional)
reportWebVitals();