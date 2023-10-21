import { useEffect, useState } from "react";
import "./App.css";

const lights = ["red", "orange", "green"];


function App() {
  const [activeLight, setActiveLight] = useState("green");
  const [lightTime, setLightTime] = useState(5);
  const [timer, setTimer] = useState(lightTime);

  useEffect(() => {
    let nextLight;
    switch (activeLight) {
      case "red":
        nextLight = "green";
        break;
      case "orange":
        nextLight = "red";
        break;
      case "green":
        nextLight = "orange";
        break;

      default:
        break;
    }

    setTimer(lightTime > 0 ? lightTime : 5);
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    const lightTimeout = setTimeout(() => {
      setActiveLight(nextLight);
    }, lightTime * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(lightTimeout);
    };
  }, [activeLight]);



  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setLightTime(Number(e.target.value) > 0 ? Number(e.target.value) : 5 )}
      />
      <div className="traffic_light">
        {lights.map((color) => (
          <span
            key={color}
            className={`light ${color} ${activeLight === color && "active"}`}
            style={{
              boxShadow: activeLight === color && `0 0 15px 5px ${color}`
            }}
          >
            <span className="timer">{timer}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
