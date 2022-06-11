import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setButtonColor(newButtonColor);
  };
  const toggleDisable = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isChecked ? "grey" : buttonColor,
          color: "white",
        }}
        onClick={handleChange}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input type="checkbox" name="" id="cb1" onChange={toggleDisable} />
      <label htmlFor="cb1"> Disable Button</label>
    </div>
  );
}

export default App;
