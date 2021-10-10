import React from 'react';
import ReactDOM from 'react-dom';
//git import './index.css';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
       domain="dev-hcjnu8uu.us.auth0.com"
       clientId="APQ45V2wqkuyUyOhHY6cAus17LKD1C0k"
       redirectUri={window.location.origin}np
    >
        <App />
    </Auth0Provider>,
  document.getElementById('root')
);
