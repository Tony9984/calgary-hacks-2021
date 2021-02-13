import React from 'react';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { Tooltip } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Tooltip title="cancel" placement="right">
          <CancelIcon
            className="sidebar-icons__icon"
            style={{ marginTop: 5 }}
          />
        </Tooltip>
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
