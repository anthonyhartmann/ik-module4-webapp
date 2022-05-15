import React, { useRef, useEffect } from "react";
import EventsTesterMiddle from "./components/EventsTesterMiddle/EventsTesterMiddle";
import "./EventsTesterContainer.css";

// TODO: Block the capture and potentially prevent default on left click.  Also respond to right click with an alert

const EventsTesterContainer: React.FC = () => {
  const clicker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clicker && clicker.current) {
      clicker.current.addEventListener("click", onCapture, true);
      clicker.current.addEventListener("click", onBubble, false);
      clicker.current.addEventListener("contextmenu", onRightClick);
      return () => {
        if (clicker && clicker.current) {
          clicker.current.removeEventListener("click", onCapture, true);
          clicker.current.removeEventListener("click", onBubble, false);
          clicker.current.removeEventListener("contextmenu", onRightClick);
        }
      };
    }
  }, [clicker]);

  const onCapture = (event: Event) => {
    console.log("Capturing Click at container");
    event.stopPropagation();
  };
  const onBubble = (event: Event) => {
    alert("We shouldn't be bubbling, we stopped at capture");
  };
  const onRightClick = (event: Event) => {
    console.log("onRightClick Click at Container");
    // Why dosen't this event appear?
  };

  return (
    <div className="EventsTesterContainer" ref={clicker}>
      Events Tester Outer Div
      <EventsTesterMiddle />
    </div>
  );
};

export default EventsTesterContainer;
