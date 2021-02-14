import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <CancelIcon className="sidebar-icons__icon" />
        <div className="sidebar-icons">
          <AccountCircleOutlinedIcon className="sidebar-icons__icon" />
          <CalendarTodayIcon className="sidebar-icons__icon" />
          <a href="/friends">
            <ChatBubbleOutlineOutlinedIcon className="sidebar-icons__icon" />
          </a>
          <AttachFileOutlinedIcon className="sidebar-icons__icon" />
        </div>
        <SettingsOutlinedIcon className="sidebar-icons__icon" />
      </div>
    </div>
  );
};

export default Sidebar;
