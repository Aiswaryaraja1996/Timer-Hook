import "./App.css";
import Timer from "./timer/Timer";
import { useState, useEffect, useRef } from "react";

function App() {
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(0);

  const ref = useRef(null);

  const startTimer = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setStart((prev) => {
          if (prev + 1 === stop) {
            pauseTimer();
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setStart(0);
  };

  useEffect(() => {
    return pauseTimer;
  }, []);

  return (
    <div className="App">
      <h2>TIMER</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Start Time"
          style={{ width: "100px" }}
          onChange={(e) => setStart(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="End Time"
          style={{ width: "100px" }}
          onChange={(e) => setStop(Number(e.target.value))}
        />
      </div>

      <Timer
        start={start}
        stop={stop}
        startTimer={startTimer}
        resetTimer={resetTimer}
        pauseTimer={pauseTimer}
      />
    </div>
  );
}

export default App;
