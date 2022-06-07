import { React, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <div className="counter">
        <h1>React Counter</h1>
        <p>
          Activity! Create a counter using useState, click events and functions.
          The counter should include a H1 element as well as two button elements
        </p>
        <span className="counter_output">{counter}</span>
        <div className="button_container">
          <button className="control_button" onClick={decrease}>
            -
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <button className="control_button" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
