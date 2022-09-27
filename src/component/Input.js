import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Input.css";

function Input({
  sec,
  setSec,
  min,
  setMin,
  hour,
  setHour,
  setTimerViewHour,
  setTimerViewMin,
  setTimerViewSec,
  timerViewHour,
  timerViewMin,
  timerViewSec,
}) {
  const [offInput, setOffInput] = useState(false);
  const [restartAndstop, setRestartAndStop] = useState(false);

  const tempHour = timerViewHour ? parseInt(timerViewHour) : 0;
  const tempMin = timerViewMin ? parseInt(timerViewMin) : 0;
  const tempSec = timerViewSec ? parseInt(timerViewSec) : 0;

  const initialTime = tempHour * 60 * 60 + tempMin * 60 + tempSec;
  const interval = useRef(null);
  useEffect(() => {
    console.log(initialTime);
  }, [initialTime]);

  const onHourChange = (e, time, comment) => {
    if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setHour(e.target.value);
  };

  const onMinChange = (e, time, comment) => {
    if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setMin(e.target.value);
  };

  const onSecChange = (e, time, comment) => {
    if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setSec(e.target.value);
  };

  const onCheckInput = (event) => {
    if (!sec) {
      alert("초 입력");
      event.preventDefault();
    } else if (!min) {
      alert("분 0 입력");
      event.preventDefault();
    } else if (!hour) {
      alert("시 0 입력");
      event.preventDefault();
    }
  };

  const handleViewClick = () => {
    setTimerViewHour(hour);
    setTimerViewMin(min);
    setTimerViewSec(sec);
  };

  let calc = initialTime;
  const onClickCount = () => {
    interval.current = setInterval(() => {
      calc = calc - 1;
      setTimerViewSec(calc % 60, 2);
      setTimerViewMin(parseInt((calc / 60) % 60), 2);
      setTimerViewHour(parseInt(calc / 60 / 60), 2);
      // if (tempSec > 0) {
      //   setTimerViewSec((tempSec -= 1));
      // } else if (tempSec === 0) {
      //   setTimerViewSec((tempSec = 59));
      //   setTimerViewMin((tempMin -= 1));
      // }
      // if (tempMin === -1) {
      //   setTimerViewHour((tempHour -= 1));
      //   setTimerViewMin((tempMin = 59));
      // }
      // if (tempSec <= 0) {
      //   if (tempMin <= 0) {
      //     if (tempHour <= 0) {
      //       clearInterval(timer);
      //     }
      //   }
      // }
      if (calc <= 0) {
        alert("시간완료");
        clearInterval(interval.current);
      }
    }, 1000);
  };

  const onClickStartCount = () => {
    setOffInput(true);
  };

  const onClickCancel = () => {
    clearInterval(interval.current);
    setTimerViewHour(0);
    setTimerViewMin(0);
    setTimerViewSec(0);
    setOffInput(false);
    setRestartAndStop(false);
  };

  const onClickStop = () => {
    clearInterval(interval.current);
    setRestartAndStop(true);
  };

  const onClickRestart = () => {
    onClickCount();
    setRestartAndStop(false);
  };

  return (
    <div className="Input">
      <div className={offInput === true ? "input-box-togle" : "input-box"}>
        <input
          className="input-item"
          type="number"
          placeholder="H"
          value={hour}
          min="0"
          max="99"
          onChange={(e) => onHourChange(e, 99, "99")}
        />
        <input
          className="input-item"
          type="number"
          placeholder="M"
          value={min}
          min="0"
          max="59"
          onChange={(e) => onMinChange(e, 59, "59")}
        />
        <input
          className="input-item"
          type="number"
          placeholder="S"
          value={sec}
          min="0"
          max="59"
          onChange={(e) => onSecChange(e, 59, "59")}
        />
      </div>
      <div className={offInput === true ? "start-btn-box" : "start-btn"}>
        <button
          className="btn-input"
          onClick={() => {
            onCheckInput();
            handleViewClick();
          }}
        >
          입력
        </button>
        <button
          className="btn-start"
          onClick={() => {
            onCheckInput();
            onClickCount();
            onClickStartCount();
          }}
        >
          시작
        </button>
      </div>
      <div className={offInput === true ? "" : "btn-cancel-box"}>
        <button className="btn-cancel cancel-color" onClick={onClickCancel}>
          취소
        </button>
        <button
          className={
            restartAndstop === false
              ? "btn-cancel stop-color"
              : "stop-color-none"
          }
          onClick={onClickStop}
        >
          정지
        </button>
        <button
          className={
            restartAndstop === true
              ? "btn-cancel restart-color"
              : "restart-color-none"
          }
          onClick={onClickRestart}
        >
          재개
        </button>
      </div>
    </div>
  );
}

export default Input;
