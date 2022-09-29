import { useState } from "react";
import Input from "../Input";
import TimerView from "../TimerView";
import "./Timer.css";

function Timer({ intitHour, initMin, initSec, closeMent }) {
  const [hour, setHour] = useState(intitHour);
  const [min, settMin] = useState(initMin);
  const [sec, setSec] = useState(initSec);
  const [isTimerDelete, setIsTimerDelete] = useState(false);
  const timerDelete = () => {
    console.log("컴포넌트 종료");
    setIsTimerDelete(true);
  };
  return (
    <>
      {isTimerDelete === false ? (
        <div className="wrap">
          <div className="box">
            <TimerView
              timerViewHour={hour}
              timerViewMin={min}
              timerViewSec={sec}
            />
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
                timerDelete={timerDelete}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Timer;
