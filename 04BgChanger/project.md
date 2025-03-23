## Optimize code with array in BgChanger

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // Generalize the color change handler
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} // Inline styling for background color
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Reusable button component */}
          {["red", "green", "blue"].map((colorName) => (
            <button
              key={colorName}
              onClick={() => handleColorChange(colorName)}
              className={`outline-none px-4 py-1 rounded-full text-white shadow-lg bg-${colorName}-500`}
              aria-label={`Set background to ${colorName}`}
            >
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```
