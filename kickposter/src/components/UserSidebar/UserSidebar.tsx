import React from "react";
import "./UserSidebar.css";
import { ReactComponent as TransparentLogo } from "../../assets/TransparentLogo.svg";

interface UserSidebarProps {
  handleLogout: () => void
}

const UserSidebar: React.FC<UserSidebarProps> = (props: UserSidebarProps) => {
  return (
    <div className="User-sidebar">
      <TransparentLogo className="logo" />
      <div className="Sidebar-item">Hi Username!</div>
      <div className="Sidebar-item">Settings</div>
      <div className="Sidebar-item" onClick={props.handleLogout}>Log Out</div>
    </div>
  );
};

export default UserSidebar;
