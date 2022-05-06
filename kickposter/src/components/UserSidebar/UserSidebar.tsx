import React, { useEffect, useState } from "react";
import "./UserSidebar.css";
import { ReactComponent as TransparentLogo } from "../../assets/TransparentLogo.svg";
import { User } from "../../types";
import { userInfo } from "os";
import Settings from "./Settings";
import DriveExaminer from "./DriveExaminer/DriveExaminer";

interface UserSidebarProps {
  handleLogout: () => void
  user: User
}

const UserSidebar: React.FC<UserSidebarProps> = (props: UserSidebarProps) => {
  const [showSettings, setShowSettings] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="User-sidebar">
      <TransparentLogo className="logo" />
      <div className="Sidebar-item">Hi {props.user.username}!</div>
      <div className="Sidebar-item-link" onClick={() => setShowSettings(!showSettings)}>Settings</div>
      {showSettings && <Settings/>}
      <div className="Sidebar-item-link" onClick={props.handleLogout}>Log Out</div>
    </div>
  );
};

export default UserSidebar;
