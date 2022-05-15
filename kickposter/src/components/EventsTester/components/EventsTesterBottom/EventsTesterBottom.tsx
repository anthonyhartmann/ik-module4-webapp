import React, { useRef, useEffect } from "react";
import "./EventsTesterBottom.css";

// TODO: Block the bubble and potentially prevent default on right click.  Also respond to left click with an alert

const EventsTesterBottom: React.FC = () => {
  const clicker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clicker && clicker.current) {
      clicker.current.addEventListener("click", onLeftClick);
      clicker.current.addEventListener("contextmenu", onRightClick);
      return () => {
        if (clicker && clicker.current) {
          clicker.current.removeEventListener("click", onLeftClick);
          clicker.current.removeEventListener("contextmenu", onRightClick);
        }
      };
    }
  }, [clicker]);

  const onLeftClick = (event: Event) => {
    console.log("Left Clicking on Bottom");
    // Why dosen't this event appear?
  };

  const onRightClick = (event: Event) => {
    console.log("Right Clicking on Bottom");
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <div className="EventsTesterBottom" ref={clicker}>
      Events Tester bottom Div
    </div>
  );
};

export default EventsTesterBottom;
