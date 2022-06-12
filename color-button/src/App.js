import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
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
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <br />
      <input type="checkbox" name="" id="cb1" onChange={toggleDisable} />
      <label htmlFor="cb1"> Disable Button</label>
    </div>
  );
}

export default App;
