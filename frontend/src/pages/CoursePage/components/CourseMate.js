import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const CourseMate = ({ name, imageUrl, faculty, description }) => {
  return (
    <>
      <div className="friend" style={{ height: 130 }}>
        <div className="friend-info">
          <Avatar src={imageUrl} alt={name} className="friend-info__avatar" />
          <div className="friend-info-container">
            <p className="friend-info-container__name">{name}</p>
            <div className="friend-info-container__faculty">{faculty}</div>
          </div>
        </div>
        <div className="friend-status">{description}</div>
        <IconButton>
          <PersonAddIcon className="friend__icon" />
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
  description: PropTypes.string.isRequired,
};

export default CourseMate;
