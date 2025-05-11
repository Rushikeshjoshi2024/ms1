import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // Import HashRouter


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nu0ywg02q7o04x3e.us.auth0.com"
      clientId="cNZwzIb6M2BE3e02EFSg0bS398BBDxIw"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/#/`
      }}

    >
      <HashRouter>
        <App />
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// For performance measuring (optional)
reportWebVitals();
