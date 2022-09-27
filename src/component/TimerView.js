import React from "react";
import "./TimerView.css";

function View({ timerViewHour, timerViewMin, timerViewSec }) {
  return (
    <div className="view">
      {timerViewHour} : {timerViewMin} : {timerViewSec}
    </div>
  );
}

export default View;
