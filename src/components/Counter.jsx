import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  function handleChange(e) {
    let number = Number(e.target.value)
    setNum(number || num);
  }

  function handleCount(num = 0, reset = false) {
    if (reset) {
      setCount(0);
    } else {
      setCount((prev) => prev + num);
    }
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => handleCount(num)}>Increase</button>
      <button onClick={() => handleCount(-num)}>Decrease</button>
      <button onClick={() => handleCount(0, true)}>Reset</button>
      <h1>Increase count by</h1>
      <input onChange={(e) => handleChange(e)} value={num} type="number" />
    </>
  );
}

export default Counter;
