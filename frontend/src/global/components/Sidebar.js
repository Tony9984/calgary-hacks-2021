import React from 'react';

import { Link } from 'react-router-dom';
import { Tooltip, Avatar } from '@material-ui/core';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import { StyledBadgeOnline } from './StyledBadge';
import Tony from '../../assets/Tony.jpeg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <StyledBadgeOnline
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt="Tony Ou" src={Tony} style={{ width: 50, height: 50 }} />
        </StyledBadgeOnline>
        <div className="sidebar-icons">
          <Tooltip title="Dashboard" placement="right">
            <Link to="/dashboard">
              <DashboardOutlinedIcon className="sidebar-icons__icon" />
            </Link>
          </Tooltip>
          <Tooltip title="Friends" placement="right">
            <Link to="/friends">
              <AccountCircleOutlinedIcon className="sidebar-icons__icon" />
            </Link>
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
