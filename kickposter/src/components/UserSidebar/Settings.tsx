import React, { useEffect, useState } from "react";
import "./Settings.css";

const Settings: React.FC = () => {
  const [feedname, setFeedname] = useState("")

  // Anything here would run when feedname is changed via setFeedname...
  // currently that doesn't happen though.
  useEffect(() => {
    
  }, [feedname])

  return (
      <div className="settings">
        {/* Settings example! Gotta find a way to take in a feed name and put it into local storage. */}
      </div>
  )
};

export default Settings;
