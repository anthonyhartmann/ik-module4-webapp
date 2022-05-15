import React, { useEffect, useState } from "react";
import "./Settings.css";

const Settings: React.FC = () => {
  const [feedname, setFeedname] = useState<string>("")

  useEffect(() => {
    localStorage.setItem("feedname", feedname)
  }, [feedname])
  
  return (
      <div className="settings">
        Give your feed a name!
        <input value={feedname} onChange={(e) => {setFeedname(e.target.value)}}/>
      </div>
  )
};

export default Settings;
