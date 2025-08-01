import { useState } from "react";
import "./App.css";

function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
  const [green, setGreen] = useState(colors && colors.green ? colors.green : 0);
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);

  const save = () => {
    console.log("saved");
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };
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
          value={red}
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
          value={green}
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
          value={blue}
        />

        <br />
        <br />
        <button onClick={save}>Save color combination</button>
      </div>
    </>
  );
}

export default App;
