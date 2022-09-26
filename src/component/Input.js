import React, {useState} from "react";
import './Input.css'

function Input() {

  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const [viewHour, setViewHour] = useState('0');
  const [viewMin,setViewMin] = useState('0');
  const [viewSec, setViewSec] = useState('0');

  const [offInput, setOffInput] = useState(false);

  const handleViewClick = () => {
    setViewHour(hour);
    setViewMin(min); 
    setViewSec(sec); 
  }

  let tempSec = parseInt(viewSec);
  let tempMin = parseInt(viewMin);
  let tempHour = parseInt(viewHour);

  

  const onHourChange = (e, time, comment) => {
    if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setHour(e.target.value);
  }

  const onMinChange = (e, time, comment) => {
    if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setMin(e.target.value);
  }

  const onSecChange = (e, time, comment) => {
    if (e.target.value.length > 2) {
      e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
      alert(`${comment}를 초과할 수 없습니다`);
      e.preventDefault();
    }
    setSec(e.target.value);
  }

  const onClickCount = () => {
    let timer = setInterval(() => {
      if (tempSec > 0) {
        setViewSec(tempSec -= 1);
      } else if (tempSec === 0) {
        setViewSec(tempSec = 59);
        setViewMin(tempMin -=1);
      } 
      if (tempMin === -1) {
        setViewHour(tempHour -= 1);
        setViewMin(tempMin = 59);
      }
      if (tempSec <= 0) {
        if (tempMin <= 0) {
          if (tempHour <= 0) {
            clearInterval(timer);
          }
        }
      }
    }, 1000)
}

const onClickCancel = () => {
  setHour('');
  setMin('');
  setSec('');
  setViewHour('0');
  setViewMin('0');
  setViewSec('0');
  setOffInput(false);
}

const onCheckInput = (event) => {
  if (!sec) {
    alert('초 입력');
    event.preventDefault();
  } else if (!min) {
    alert('분 0 입력');
    event.preventDefault();
  } else if (!hour) {
    alert('시 0 입력');
    event.preventDefault();
  }
}

const onClickStartCount = () => {
  setOffInput(true);
}

  return (
    <>
          <div className={offInput === true ?  'input-box-togle' : 'input-box'}>
              <input 
              className='input-item' 
              type="number" 
              placeholder='H'
              value={hour}
              min='0'
              max='99'
              onChange={e => onHourChange(e, 99, '99')}
              />
              <input 
              className='input-item' 
              type="number" 
              placeholder='M'
              value={min}
              min='0'
              max='59'
              onChange={e => onMinChange(e, 59, '59')}
              />
              <input 
              className='input-item' 
              type="number" 
              placeholder='S'
              value={sec}
              min='0'
              max='59'
              onChange={e => onSecChange(e, 59, '59')}
              />
          </div>
          <div className={offInput === true ? 'start-btn-box' : ''}>
            <button className='btn-input' onClick={() => {
              onCheckInput()
              handleViewClick()
            }}>입력</button>
            <button className='btn-start' onClick={() => {
              onCheckInput()
              onClickCount()
              onClickStartCount()
            }}>시작</button>
          </div>
          <div className={offInput === true ?  '' : 'btn-cancel-box'}>
            <button className='btn-cancel' onClick={onClickCancel}>취소</button>
          </div>
      </>
  )
}

export default Input;