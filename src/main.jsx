import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-tsulkq8lr4x7myca.us.auth0.com"
    clientId="onecTxmBzFbCdL6QxffH5Yim1ZIM0WXG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >    <App />
  </Auth0Provider>,
)
