import React, { useState, useRef, useEffect } from "react";
import "./Input.css";

function Input({
  sec,
  setSec,
  min,
  setMin,
  hour,
  setHour,
  closeMent,
  timerDelete,
}) {
  const [offInput, setOffInput] = useState(false);
  const [restartAndstop, setRestartAndStop] = useState(false);

  const initialTime =
    parseInt(hour) * 60 * 60 + parseInt(min) * 60 + parseInt(sec);
  const interval = useRef(null);
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

  useEffect(() => {}, []);

  let calc = initialTime;
  const onClickCount = () => {
    interval.current = setInterval(() => {
      calc = calc - 1;
      setSec(calc % 60, 2);
      setMin(parseInt((calc / 60) % 60));
      setHour(parseInt(calc / 60 / 60));
      console.log("타이머 돌아가는 중");
      if (calc <= 0) {
        alert(closeMent);
        clearInterval(interval.current);
      }
      return () => {
        clearInterval(interval.current);
        console.log("타이머가 종료되었습니다");
      };
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
      <button
        className="delete-btn"
        onClick={() => {
          timerDelete();
          clearInterval(interval.current);
        }}
      >
        제거
      </button>
    </div>
  );
}

export default Input;
