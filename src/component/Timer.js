import { useState } from "react";
import Input from "./Input";
import TimerView from "./TimerView";
import "./Timer.css";

function Timer() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const [firstTimerViewHour, setFirstTimerViewHour] = useState(0);
  const [firstTimerViewMin, setFirstTimerViewMin] = useState(0);
  const [firstTimerViewSec, setFirstTimerViewSec] = useState(0);

  const [secondTimerViewHour, setSecondTimerViewHour] = useState(0);
  const [secondTimerViewMin, setSecondTimerViewMin] = useState(0);
  const [secondTimerViewSec, setSecondTimerViewSec] = useState(0);

  const [onClickRadio, setOnClickRadio] = useState("1");

  const handleRadioButton = (e) => {
    setOnClickRadio(e.target.value);
  };

  return (
    <div className="wrap">
      <div className="box">
        <TimerView
          timerViewHour={firstTimerViewHour}
          timerViewMin={firstTimerViewMin}
          timerViewSec={firstTimerViewSec}
        />
        <TimerView
          timerViewHour={secondTimerViewHour}
          timerViewMin={secondTimerViewMin}
          timerViewSec={secondTimerViewSec}
        />
      </div>
      <div className="input-box">
        <div className="radios">
          <input
            type="radio"
            value="1"
            checked={onClickRadio === "1"}
            onChange={handleRadioButton}
          />
          <input
            type="radio"
            value="2"
            checked={onClickRadio === "2"}
            onChange={handleRadioButton}
          />
        </div>

        <div className="input-view">
          <Input
            sec={sec}
            setSec={setSec}
            min={min}
            setMin={setMin}
            hour={hour}
            setHour={setHour}
            setTimerViewHour={
              onClickRadio === "1"
                ? setFirstTimerViewHour
                : setSecondTimerViewHour
            }
            setTimerViewMin={
              onClickRadio === "1"
                ? setFirstTimerViewMin
                : setSecondTimerViewMin
            }
            setTimerViewSec={
              onClickRadio === "1"
                ? setFirstTimerViewSec
                : setSecondTimerViewSec
            }
            timerViewSec={
              onClickRadio === "1" ? firstTimerViewSec : secondTimerViewSec
            }
            timerViewMin={
              onClickRadio === "1" ? firstTimerViewMin : secondTimerViewMin
            }
            timerViewHour={
              onClickRadio === "1" ? firstTimerViewHour : secondTimerViewHour
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;
