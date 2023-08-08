import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperature === 30) return;

    const newTemperature = temperature + 1;
    if (newTemperature >= 15) {
      setTempColor("hot");
    }
    setTemperature(newTemperature);
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
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;
