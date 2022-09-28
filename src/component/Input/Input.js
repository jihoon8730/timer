import React, { useEffect, useState, useRef } from "react";
import "./Input.css";

function Input({ sec, setSec, min, setMin, hour, setHour, closeMent }) {
  const [offInput, setOffInput] = useState(false);
  const [restartAndstop, setRestartAndStop] = useState(false);

  // undefind 방지
  const tempHour = hour ? parseInt(hour) : 0;
  const tempMin = min ? parseInt(min) : 0;
  const tempSec = sec ? parseInt(sec) : 0;

  const initialTime = tempHour * 60 * 60 + tempMin * 60 + tempSec;
  const interval = useRef(null);
  useEffect(() => {
    console.log(initialTime);
  }, [initialTime]);

  const onHourChange = (e, time, comment) => {
    let { value } = e.target;
    if (value.length > 2) {
      value = value.substr(0, 2);
    } else if (value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setHour(value);
  };

  const onMinChange = (e, time, comment) => {
    let { value } = e.target;
    if (value.length > 2) {
      value = value.substr(0, 2);
    } else if (value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setMin(value);
  };

  const onSecChange = (e, time, comment) => {
    let { value } = e.target;
    if (value.length > 2) {
      value = value.substr(0, 2);
    } else if (value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      setSec(0);
      e.preventDefault();
    }
    setSec(value);
  };

  let calc = initialTime;
  const onClickCount = () => {
    interval.current = setInterval(() => {
      calc = calc - 1;
      setSec(calc % 60, 2);
      setMin(parseInt((calc / 60) % 60), 2);
      setHour(parseInt(calc / 60 / 60), 2);
      if (calc <= 0) {
        alert(closeMent);
        clearInterval(interval.current);
      }
    }, 1000);
  };

  const onClickStartCount = () => {
    setOffInput(true);
  };

  const onClickCancel = () => {
    clearInterval(interval.current);
    setHour(0);
    setMin(0);
    setSec(0);
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
          className="btn-start"
          onClick={() => {
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
