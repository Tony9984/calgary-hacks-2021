import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
  StyledBadgeOnline,
  StyledBadgeAway,
  StyledBadgeDisturb,
} from '../../../global/components/StyledBadge';

// eslint-disable-next-line react/prop-types
const Friend = ({
  name,
  imageUrl,
  faculty,
  connection,
  isOnline,
  isAway,
  isDisturb,
}) => {
  return (
    <>
      <div className="friend">
        <div className="friend-info">
          {isOnline && (
            <StyledBadgeOnline
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar
                src={imageUrl}
                alt={name}
                className="friend-info__avatar"
              />
            </StyledBadgeOnline>
          )}
          {isAway && (
            <StyledBadgeAway
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar
                src={imageUrl}
                alt={name}
                className="friend-info__avatar"
              />
            </StyledBadgeAway>
          )}
          {isDisturb && (
            <StyledBadgeDisturb
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar
                src={imageUrl}
                alt={name}
                className="friend-info__avatar"
              />
            </StyledBadgeDisturb>
          )}
          <div className="friend-info-container">
            <p className="friend-info-container__name">{name}</p>
            <div className="friend-info-container__faculty">{faculty}</div>
          </div>
        </div>
        <div className="friend-status">{connection}</div>
        <button type="button" className="friend__button">
          <AddCircleOutlineIcon className="friend__icon" />
        </button>
      </div>
      <hr className="hr2" />
    </>
  );
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  connection: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  isAway: PropTypes.bool,
  isDisturb: PropTypes.bool,
};

Friend.defaultProps = {
  isOnline: false,
  isAway: false,
  isDisturb: false,
};

export default Friend;
