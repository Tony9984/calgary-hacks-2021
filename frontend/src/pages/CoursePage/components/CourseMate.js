import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import DuoIcon from '@material-ui/icons/Duo';

const CourseMate = ({ name, imageUrl, faculty, connection }) => {
  return (
    <>
      <div className="friend">
        <div className="friend-info">
          <div className="friend-info-container">
            <p className="friend-info-container__name">{name}</p>
            <div className="friend-info-container__faculty">{faculty}</div>
          </div>
        </div>
        <div className="friend-status">{connection}</div>
        <IconButton>
          <DuoIcon className="friend__icon" />
        </IconButton>
      </div>
      <hr className="hr2" />
    </>
  );
};

CourseMate.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  connection: PropTypes.string.isRequired,
};

export default CourseMate;
