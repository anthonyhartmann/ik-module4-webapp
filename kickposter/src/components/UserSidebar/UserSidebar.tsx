import React from "react";
import "./UserSidebar.css";
import { ReactComponent as TransparentLogo } from "../../assets/TransparentLogo.svg";
import { User } from "../../types";
import { userInfo } from "os";

interface UserSidebarProps {
  handleLogout: () => void
  user: User
}

const UserSidebar: React.FC<UserSidebarProps> = (props: UserSidebarProps) => {

  return (
    <div className="User-sidebar">
      <TransparentLogo className="logo" />
      <div className="Sidebar-item">Hi {props.user.username}!</div>
      <div className="Sidebar-item-link">Settings</div>
      <div className="Sidebar-item-link" onClick={props.handleLogout}>Log Out</div>
    </div>
  );
};

export default UserSidebar;
