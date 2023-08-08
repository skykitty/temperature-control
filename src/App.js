import React, { useEffect, useState } from "react";

function addUnholdListener(e, interval) {
  ["mouseup", "mouseleave", "touchend"].forEach((evt) => {
    e.target.addEventListener(evt, () => {
      console.log("MouseUp");
      clearInterval(interval);
    });
  });
}

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  useEffect(() => {
    if (temperature >= 15) {
      setTempColor("hot");
    } else {
      setTempColor("cold");
    }
  }, [temperature]);

  const increaseTemperature = (e) => {
    if (temperature >= 30) return;

    console.log("MouseDown");
    const interval = setInterval(() => {
      setTemperature((prev) => {
        if (prev >= 30) return prev;
        return prev + 1;
      });
    }, 50);

    addUnholdListener(e, interval);
  };

  const decreaseTemperature = (e) => {
    if (temperature <= 0) return;

    console.log("MouseDown");
    const interval = setInterval(() => {
      setTemperature((prev) => {
        if (prev <= 0) return prev;
        return prev - 1;
      });
    }, 50);

    addUnholdListener(e, interval);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button
          onTouchStart={increaseTemperature}
          onMouseDown={increaseTemperature}
        >
          +
        </button>
        <button
          onTouchStart={increaseTemperature}
          onMouseDown={decreaseTemperature}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
