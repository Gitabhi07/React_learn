// import { useState } from "react";
import Addtodo from "./components/Addtodo";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Learn about redux tool kit</h1> */}
      <Addtodo />
      <Todos />
    </>
  );
}

export default App;
