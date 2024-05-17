import React, { useEffect, useState } from "react";

function useDebouncer(value, delay = 700) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerID);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebouncer;
