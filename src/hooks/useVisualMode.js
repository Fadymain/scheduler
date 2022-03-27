import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      let currentHistory = [...history];
      currentHistory[currentHistory.length - 1] = newMode
      setHistory(currentHistory);
      setMode(newMode);
    } else {
      setMode(newMode);
      setHistory([...history, newMode]);
    }
  }

  const back = () => {
    if (history.length > 1) {

      let currentHistory = [...history];
      currentHistory.pop();
      setMode(currentHistory[currentHistory.length - 1]);
      setHistory(currentHistory);
    }

  }

  return { mode, transition, back };
}