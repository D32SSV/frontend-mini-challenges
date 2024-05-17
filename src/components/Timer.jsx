import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(100);
  const [timerId, setTimerId] = useState(null);
  const [running, setRunning] = useState(0);
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    if (isAlert) {
      alert("Time up");
      setRunning(2);
    }
  }, [isAlert]);

  function handleStart() {
    setRunning(1);
    let id = setInterval(() => {
      setTime((prev) => {
        if (prev === 95 && !isAlert) {
          setIsAlert(true);
          clearInterval(id);
          setRunning(false);
          return prev;
        } else return prev - 1;
      });
    }, 100);
    setTimerId(id);
  }

  function handleResume() {
    setRunning(1);
    let id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 100);
    setTimerId(id);
  }
  function handlePause() {
    setRunning(3);
    clearInterval(timerId);
  }

  function handleReset() {
    setRunning(0);
    clearInterval(timerId);
    setTime(100);
    setIsAlert(false);
  }

  return (
    <div>
      <h2>{time}</h2>
      <button
        onClick={
          running === 0
            ? () => handleStart()
            : running === 1
            ? () => handlePause()
            : () => handleResume()
        }
      >
        {running === 0 ? "Start" : running === 1 ? "Stop" : "Resume"}
      </button>
      {/* <button onClick={() => handlePause()}>Stop</button> */}
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default Timer;
