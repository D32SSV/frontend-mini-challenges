import React, { useState } from "react";
import useDebouncer from "./useDebouncer";

function Debouncer() {
  const [text, setText] = useState("");
  const value = useDebouncer(text, 1000);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" value={text} onChange={(e) => handleChange(e)} />
      <p>{value}</p>
    </>
  );
}

export default Debouncer;
