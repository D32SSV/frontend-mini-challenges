// import React, { useEffect, useState } from "react";

// function TimerWithUseEffect() {
//   const [time, setTime] = useState(100);
//   const [userClicked, setUserClicked] = useState(false);
//   const [timerID, setTimerID] = useState(null);

//   function handleClick(){
//     let timerID = setInterval(()=>setTime((prev)=>prev-1), 1000)
//     setTimerID(timerID);
//   }

//   function handleSideEffect(){
//     setUserClicked(!userClicked);
//   }

//   useEffect(()=>{
//     // handleClick();
//     return ()=>clearInterval(timerID)
//   }, [userClicked]);


//   return (
//     <>
//       <div>Timer : {time}</div>
//       <button onClick={()=>{handleClick(); handleSideEffect()}}>Start</button>
//     </>
//   );
// }

// export default TimerWithUseEffect;


import React, { useEffect, useState } from "react";

function TimerWithUseEffect() {
  const [time, setTime] = useState(100);
  const [timerID, setTimerID] = useState(null);

  useEffect(() => {
    if (timerID) {
      clearInterval(timerID);
    }
    let newTimerID = setInterval(() => setTime((prev) => prev - 1), 1000);
    setTimerID(newTimerID);

    return () => clearInterval(newTimerID);
  }, []);

  return (
    <>
      <div>Timer : {time}</div>
      <button onClick={() => setTimerID((prev) => (prev ? null : timerID))}>
        {timerID ? "Stop" : "Start"}
      </button>
    </>
  );
}

export default TimerWithUseEffect;
