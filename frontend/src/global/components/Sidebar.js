import React from 'react';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { Tooltip, Avatar, Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Tony from '../../assets/Tony.jpeg';

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt="Tony Ou" src={Tony} style={{ width: 50, height: 50 }} />
        </StyledBadge>
        <div className="sidebar-icons">
          <Tooltip title="Dashboard" placement="right">
            <DashboardOutlinedIcon className="sidebar-icons__icon" />
          </Tooltip>
          <Tooltip title="Friends" placement="right">
            <AccountCircleOutlinedIcon className="sidebar-icons__icon" />
          </Tooltip>
          <Tooltip title="Messages" placement="right">
            <ChatBubbleOutlineOutlinedIcon className="sidebar-icons__icon" />
          </Tooltip>
          <Tooltip title="Calendar" placement="right">
            <CalendarTodayIcon className="sidebar-icons__icon" />
          </Tooltip>
          <Tooltip title="Files" placement="right">
            <AttachFileOutlinedIcon className="sidebar-icons__icon" />
          </Tooltip>
        </div>
        <Tooltip title="Settings" placement="right">
          <SettingsOutlinedIcon
            className="sidebar-icons__icon"
            style={{ marginBottom: 5 }}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
