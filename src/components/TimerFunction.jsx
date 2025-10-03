import { useState, useEffect, useRef } from "react"

export default function TimerFunction() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setisRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        const savedSeconds = localStorage.getItem('timerSecondsFunc');
        if (savedSeconds !== null) {
            setSeconds(Number(savedSeconds));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('timerSecondsFunc', seconds);
    }, [seconds]);

    const start = () => {
        if (isRunning) return;
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        setisRunning(true);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        setisRunning(false);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setSeconds(0);
        setisRunning(false);
    };

    useEffect(() => {
        
        return () => {
            clearInterval(intervalRef.current);
            localStorage.removeItem('timerSecondsFunc');
        }
        
    }, []);


    return(
        <div className="timer">
            <div className="timer__value">
                <h2>Seconds (Func): </h2>
                <span className={`timer__count ${isRunning ? '' : 'stop'}`}>{seconds}</span>
            </div>
            <div className="timer__btns-container">
                <button className="timer__btn-start" onClick={start}>Start</button>
                <button className="timer__btn-start" onClick={stop}>Stop</button>
                <button className="timer__btn-start" onClick={reset}>Reset</button>
            </div>
            
        </div>
    );
}