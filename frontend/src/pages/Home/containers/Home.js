import React from 'react';
import '../styles/home.scss';
// import { AccountInfo } from '@azure/msal-browser';
import AzureAuthenticationButton from '../../../azure/azure-authentication-component';

const Course = () => {

  // const [currentUser, setCurrentUser] = useState();

  // const onAuthenticated = async (userAccountInfo) => {
  //   setCurrentUser(userAccountInfo);
  // };

  return (
    <>
      <div className="landing-page">
        <div className="landing-description">
          <h1 className="landing-page__header">Basis</h1>
          <h2 className="landing-page__subheader">for students</h2>
          <div className="landing-page__description">
            to improve lives by improving <br />
            online education
          </div>
          <button type="button" className="microsoft-btn">
            <img
              src="https://res.cloudinary.com/die52atcc/image/upload/v1613277980/ms-symbollockup_signin_light_zhagnz.png"
              alt="login button"
              // onClick={}
            />
          </button>
          <AzureAuthenticationButton onAuthenticated={null} />
        </div>
        <img
          src="https://res.cloudinary.com/die52atcc/image/upload/v1613275637/1d924bf33464844560ad20680e53e03f_xht7q7.png"
          alt="home page"
          width="700"
          className="landing-image"
        />
      </div>
    </>
  );
};

export default Course;
