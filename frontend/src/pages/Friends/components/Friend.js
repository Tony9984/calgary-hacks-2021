import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// eslint-disable-next-line react/prop-types
const Friend = ({ name, imageUrl, faculty, connection }) => {
  return (
    <>
      <div className="friend-container">
        <div className="flex-container">
          <img src={imageUrl} alt="Profile" className="profile-picture" />
          <div className="center-vertical">
            <h1 className="profile-name">{name}</h1>
            <div className="profile-faculty">{faculty}</div>
          </div>
        </div>
        <div className="center-vertical">{connection}</div>
        <button type="button" className="connect-btn">
          <AddCircleOutlineIcon className="connect-icon" />
        </button>
      </div>
      <hr className="hr2" />
    </>
  );
};

export default Friend;
