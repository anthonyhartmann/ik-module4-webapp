import React from "react";
import EventsTesterBottom from "../EventsTesterBottom/EventsTesterBottom";
import "./EventsTesterMiddle.css";

const EventsTesterMiddle: React.FC = () => {
  return (
    <div className="EventsTesterMiddle">
      Events Tester Middle Div
      <EventsTesterBottom />
    </div>
  );
};

export default EventsTesterMiddle;
