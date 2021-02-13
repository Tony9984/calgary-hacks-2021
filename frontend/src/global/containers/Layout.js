import React from 'react';
import Sidebar from '../components/Sidebar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
