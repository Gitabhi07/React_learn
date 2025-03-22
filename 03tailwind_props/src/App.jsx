import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "chai",
    age: 21,
  };

  let nweArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="chai aur code" btnText="click me" />
      <Card username="yt channel" />
    </>
  );
}

export default App;
