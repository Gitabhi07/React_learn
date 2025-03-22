import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Learn UseState Hook with condition with counter_project

function App() {
  let [counter, setCounter] = useState(0);

  const addvalue = () => {
    counter += 1;
    if (counter > 20) {
      counter = 20;
      alert("value cannot be greater than 20");
    }
    // console.log(`value added : `, counter);
    setCounter(counter);
  };

  const removevalue = () => {
    counter -= 1;
    if (counter < 0) {
      counter = 0;
      alert("no less than 0");
    }
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>addvalue {counter}</button> <br />
      <button onClick={removevalue}>Remove value</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
