import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import DuoIcon from '@material-ui/icons/Duo';
import {
  StyledBadgeOnline,
  StyledBadgeAway,
  StyledBadgeDisturb,
} from '../../../global/components/StyledBadge';

const Friend = ({
  name,
  imageUrl,
  faculty,
  connection,
  isOnline,
  isAway,
  isDisturb,
}) => {
  const videoLink =
    'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzFkMzI4NmMtYTg1Mi00MzZmLTgwNjctN2Y0ODgxMWFmYWI1%40thread.v2/0?context=%7b%22Tid%22%3a%22cd319671-52e7-4a68-afa9-fcf8f89f09ea%22%2c%22Oid%22%3a%225c851f01-0eb2-4cc3-8694-c9a10cda403b%22%7d';
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
            <p className="friend-info-container__name">
              <a href={`/profile/${name}`}>{name}</a>
            </p>
            <div className="friend-info-container__faculty">{faculty}</div>
          </div>
        </div>
        <div className="friend-status">{connection}</div>
        <IconButton>
          <a href={videoLink} target="_blank" rel="noreferrer">
            <DuoIcon className="friend__icon" />
          </a>
        </IconButton>
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
