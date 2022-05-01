import React from "react";
import "./UserSidebar.css";
import { ReactComponent as TransparentLogo } from "../../assets/TransparentLogo.svg";

const UserSidebar: React.FC = () => {
  return (
    <div className="User-sidebar">
      <TransparentLogo className="logo" />
      <div className="Sidebar-item">Hi Username!</div>
      <div className="Sidebar-item">Settings</div>
      <div className="Sidebar-item">Log Out</div>
    </div>
  );
};

export default UserSidebar;
