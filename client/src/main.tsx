import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@emotion/react';
import '@mui/material';
<<<<<<< HEAD
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
=======
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-rlbnqg405rl5zmak.us.auth0.com"
      clientId="XKstvdcjCKBZgYFVGsgXwjkCcRbQvODK"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
>>>>>>> SahitM
