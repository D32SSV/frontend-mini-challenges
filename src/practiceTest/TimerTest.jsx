import React, { useEffect, useState } from "react";

function TimerTest() {
  const [time, setTime] = useState(100);
  const [timerId, setTimerId] = useState(null);
  const [running, setRunning] = useState(0);
  const [isAlert, setIsAlert] = useState(false);


  useEffect(()=>{
    if(isAlert)
    alert("Time is up")
  }, [isAlert])


function handleStart(){
    setRunning(1);
    let timer = setInterval(()=>{
        setTime((prev)=>{
            if(prev === 99 && !isAlert){
                setIsAlert(true);
                setRunning(2)
                return prev
            }
            else return prev-1
        });
    }, 100)
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
        {running === 0 ? "Start" : running === 1 ? "Pause" : "Resume"}
      </button>
      {/* <button onClick={() => handlePause()}>Stop</button> */}
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default TimerTest;
