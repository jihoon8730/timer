import { useState } from "react";
import Input from "../Input";
import TimerView from "../TimerView";
import "./Timer.css";

function Timer({ intitHour, initMin, initSec, closeMent }) {
  const [hour, setHour] = useState(intitHour);
  const [min, settMin] = useState(initMin);
  const [sec, setSec] = useState(initSec);

  return (
    <div className="wrap">
      <div className="box">
        <TimerView timerViewHour={hour} timerViewMin={min} timerViewSec={sec} />
      </div>
      <div className="input-box">
        <div className="input-view">
          <Input
            sec={sec}
            setSec={setSec}
            min={min}
            setMin={settMin}
            hour={hour}
            setHour={setHour}
            closeMent={closeMent}
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;
