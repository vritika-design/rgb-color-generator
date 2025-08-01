import { useState } from "react";
import "./App.css";

function App() {
  const [red, setRed] = useState("0");
  const [green, setGreen] = useState("0");
  const [blue, setBlue] = useState("0");

  return (
    <>
      <h2>RGB Color Genrator</h2>
      <div
        style={{
          backgroundColor: "rgb(" + red + ", " + green + ", " + blue + ")",
          height: "200px",
          width: "300px",
          border: "1px solid #000",
        }}
      ></div>
      Color : RGB({red}, {blue}, {green})
      <br />
      <br />
      <div>
        <label htmlFor="red">Red</label>
        <input
          type="range"
          id="red"
          onChange={(e) => setRed(e.target.value)}
          min={0}
          max={255}
        />
        <br />
        <br />
        <label htmlFor="green">Green</label>
        <input
          type="range"
          id="green"
          onChange={(e) => setGreen(e.target.value)}
          min={0}
          max={255}
        />
        <br />
        <br />
        <label htmlFor="blue">Blue</label>
        <input
          type="range"
          id="blue"
          onChange={(e) => setBlue(e.target.value)}
          min={0}
          max={255}
        />
      </div>
    </>
  );
}

export default App;
