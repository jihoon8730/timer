import { useState, useEffect } from 'react';
import './App.css'
import './Timer.css';

function App() {

    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    return (
        <Timer 
        hour={hour} 
        minute={minute} 
        second={second} 
        setSecond={setSecond}
        setMinute={setMinute}
        setHour={setHour}
        />
    )
}

export default App;

function Timer({hour, minute, second, setSecond, setMinute, setHour}) {

    const checkSecondInput = (e, time, comment) => {
    if (e.target.value.length > 2) {
        e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
        alert(`${comment}를 초과할 수 없습니다`);
        e.target.value = null;
    }
    if (e.target.value) {
        setSecond(e.target.value);
    }
    
}
    const checkMinuteInput = (e, time, comment) => {
    if (e.target.value.length > 2) {
        e.target.value = e.target.value.substr(0, 2);
    } else if (e.target.value > time) {
        alert(`${comment}를 초과할 수 없습니다`);
        e.target.value = null;
    }
    setMinute(e.target.value);
}
    const checkHourInput = (e, time, comment) => {
        if (e.target.value.length > 2) {
            e.target.value = e.target.value.substr(0, 2);
        } else if (e.target.value > time) {
            alert(`${comment}를 초과할 수 없습니다`);
            e.target.value = null;
        }
        setHour(e.target.value);
    }

    // useEffect(() => {
    //     let timer; 
    //     timer = setInterval(() => {
    //         setSecond(second -= 1)
    //         console.log(second);
            
    //         if (second < 1) {
    //             clearInterval(timer);
    //         }
    //     }, 1000);
    // }, [])

    const handleCount = () => {
        
    }

    useEffect(() => {
        console.log(second)
    }, [second])
    return (
    <div className='Timer'>
    <div className='time'>
        <p className='time-hour'>{hour}:</p>
        <p className='time-minute'>{minute}:</p>
        <p className='time-second'>{second}</p>
        </div>

        <div className='timer'>
        <input className='timer-input' placeholder='Hour' type="number" min='0' max='99' onChange={e => checkHourInput(e, 99, '99')}/>
        <input className='timer-input' placeholder='Minute' type="number" min='0' max='59' onChange={e => checkMinuteInput(e, 59, '59')} />
        <input className='timer-input' placeholder='Second' type="number" min='0' max='59' onChange={e => checkSecondInput(e, 59, '59')} />
        </div>
        
        <div className='buttonset'></div>
        <button className='start' onClick={handleCount}>시작</button>
        <button className='reset'>취소</button>
        </div>
    );
}



