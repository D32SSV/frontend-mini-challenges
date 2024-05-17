import React, { useRef, useState } from "react";

function AnagramChecker() {
  const [anagram, setAnagram] = useState();
  const [val, setVal] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  function check() {
    const str1 = ref1.current.value.trim().toLowerCase();
    const str2 = ref2.current.value.trim().toLowerCase();
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    setVal(true);
    if (sortedStr1 === sortedStr2) setAnagram(true);
    else setAnagram(false);
  }
  return (
    <>
      <input ref={ref1} type="text" />

      <input ref={ref2} type="text" />

      <button onClick={check}>Check</button>
      {val ? (
        <p>
          {anagram
            ? "The words/phrases are anagrams!"
            : "The words/phrases are not anagrams!"}
        </p>
      ) : null}
    </>
  );
}
//

export default AnagramChecker;
