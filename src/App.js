import { useEffect, useState } from "react";
import "./App.css";

const lights = ["red", "orange", "green"];

function App() {
  const [activeLight, setActiveLight] = useState("red");
  const lightTimeInSec = 3;

  useEffect(() => {
    const nextLight =
      lights.indexOf(activeLight) === lights.length - 1
        ? lights[0]
        : lights[lights.indexOf(activeLight) + 1];



    const lightTimeout = setTimeout(() => {
      setActiveLight(nextLight);
    }, lightTimeInSec * 1000);

    return () => {
      clearTimeout(lightTimeout);
    };
  }, [activeLight]);

  return (
    <div className="App">
      <div className="traffic_light">
        {lights.map((color) => (
          <span
            key={color}
            className={`${color} ${activeLight === color && "active"}`}
            style={{
              boxShadow: activeLight === color && `0 0 15px 5px ${color}`
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default App;
