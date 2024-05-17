import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(100);
  const [timerId, setTimerId] = useState(null);
  const [running, setRunning] = useState(true);
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    if (isAlert) {
      alert("Time up");
      setRunning(false);
    }
  }, [isAlert]);

  function handleStart() {
    setRunning(true);
    let id = setInterval(() => {
      setTime((prev) => {
        if (prev === 95 && !isAlert) {
          setIsAlert(true);
          clearInterval(id);
          return prev;
        } else return prev - 1;
      });
    }, 100);
    setTimerId(id);
  }

  function handleResume() {
    setRunning(true);
    let id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 100);
    setTimerId(id);
  }

  function handlePause() {
    setRunning(false);
    clearInterval(timerId);
  }

  function handleReset() {
    setRunning(true);
    clearInterval(timerId);
    setTime(100);
    setIsAlert(false);
  }

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={running ? handleStart : handleResume}>
        {running ? "Start" : "Resume"}
      </button>
      <button onClick={handlePause}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
