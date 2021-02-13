/* eslint-disable */
import React, { useState } from 'react';
import { AccountInfo } from '@azure/msal-browser';
import AzureAuthenticationButton from '../../../azure/azure-authentication-component';
// import { AccountInfo } from '@azure/msal-browser';

const Dashboard = () => {

  const [currentUser, setCurrentUser] = useState();

  const onAuthenticated = async (userAccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <AzureAuthenticationButton onAuthenticated={onAuthenticated} />
      {/* <button type='button'>CLICK ME</button> */}
    </div>
  );
};

export default Dashboard;
