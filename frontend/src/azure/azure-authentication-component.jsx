/* eslint-disable */
import React, { useState } from 'react';
import AzureAuthenticationContext from './azure-authentication-context';
import { useHistory } from "react-router-dom";

const ua = window.navigator.userAgent;
const msie = ua.indexOf('MSIE ');
const msie11 = ua.indexOf('Trident/');
const isIE = msie > 0 || msie11 > 0;
// Log In, Log Out button
const AzureAuthenticationButton = ({ onAuthenticated }) => {
  // Azure client context
  const authenticationModule = new AzureAuthenticationContext();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState();
  let history = useHistory();

  const logIn = (method) => {
    const typeName = 'loginPopup';
    const logInType = isIE ? 'loginRedirect' : typeName;
    // Azure Login
    authenticationModule.login(logInType, returnedAccountInfo);
  };
  const logOut = () => {
    if (user) {
      onAuthenticated(undefined);
      // Azure Logout
      authenticationModule.logout(user);
      history.push("/");
    }
  };
  const returnedAccountInfo = (user) => {
    // set state
    setAuthenticated((user === null || user === void 0 ? void 0 : user.name) ? true : false);
    onAuthenticated(user);
    setUser(user);

    if (authenticated) {
      history.push("/dashboard");
    }
  };
  const showLogInButton = () => {
    return (
      <button type="button" onClick={() => logIn('loginPopup')} id='authenticationButton' className="microsoft-btn">
        <img
          src="https://res.cloudinary.com/die52atcc/image/upload/v1613277980/ms-symbollockup_signin_light_zhagnz.png"
          alt="login button"
        />
      </button>
    );
  };
  const showLogOutButton = () => {
    return (React.createElement('div', { id: 'authenticationButtonDiv' },
        React.createElement('div', { id: 'authentication' },
            React.createElement('button', { id: 'authenticationButton', onClick: () => logOut() }, 'Log out'))));
  };
  const showButton = () => {
    return authenticated ? showLogOutButton() : showLogInButton();
  };
  return (React.createElement('div', { id: 'authentication' }, authenticationModule.isAuthenticationConfigured ? (showButton()) : (React.createElement('div', null, 'Authentication Client ID is not configured.'))));
};
export default AzureAuthenticationButton;