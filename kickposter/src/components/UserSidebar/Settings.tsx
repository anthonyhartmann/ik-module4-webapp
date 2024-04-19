import React, { useState } from "react";
import "./Settings.css";

const Settings: React.FC = () => {
  const [feedname, setFeedname] = useState<string>("");

  const saveFeedName = (event: any) => {
    setFeedname(event.target.value);
    localStorage.setItem("feedname", feedname);
  };

  return (
    <div className="settings">
      Give your feed a name!
      <input value={feedname} onChange={saveFeedName} />
    </div>
  );
};

export default Settings;
