import "./App.css";

import React from "react";
import Timer from "./components/Timer";
import TimerTest from "./practiceTest/TimerTest";
import TimerWithUseEffect from "./practiceTest/TimerWithUseEffect";
import Debouncer from "./practiceTest/Hooks/Debouncer";
import Counter from "./components/Counter";
import AnagramChecker from "./components/AnagramChecker";

function App() {
  return (
    <>
      {/* <Timer /> */}
      {/* <TimerTest/> */}
      {/* <TimerWithUseEffect /> */}
      {/* <Debouncer /> */}
      {/* <Counter /> */}
      <AnagramChecker />
    </>
  );
}

export default App;
