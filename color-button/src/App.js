import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const handleChange = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={handleChange}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
