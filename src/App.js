import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemperature = (e) => {
    if (temperature === 30) return;
    console.log("super");
    let interval = setInterval(() => {
      console.log("super1");
      const newTemperature = temperature + 1;
      setTempColor(() => {
        if (temperature + 1 >= 15) {
          return "hot";
        }
      });

      setTemperature((prev) => prev + 1);
    }, 50);
    e.target.addEventListener("mouseup", () => {
      console.log("super2");
      clearInterval(interval);
    });
  };

  const decreaseTemperature = () => {
    if (temperature === 0) return;

    const newTemperature = temperature - 1;
    if (newTemperature < 15) {
      setTempColor("cold");
    }
    setTemperature(newTemperature);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;
