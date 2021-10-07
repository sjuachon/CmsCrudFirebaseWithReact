import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
       domain="dev-hcjnu8uu.us.auth0.com"
       clientId="APQ45V2wqkuyUyOhHY6cAus17LKD1C0k"
       redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
  document.getElementById('root')
);
