import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  //find an element with role button and text "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //check if button bg is red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  //check that btn starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Disable button with checkbox checked, renable button with unchecked checkbox", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  //check if btn is enabled
  expect(colorButton).toBeEnabled();
  // fire checkbox event
  fireEvent.click(checkbox);
  //check  if  btn is disabled
  expect(colorButton).toBeDisabled();
  //check if btn renables after check box is unchecked
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button turns grey when disabled, regains original color when enabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  //disable button (click checkbox)
  fireEvent.click(checkbox);
  //check if btn is grey
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
  //enable btn
  fireEvent.click(checkbox);
  //check if btn is red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //change btn color
  fireEvent.click(colorButton);
  //disable btn
  fireEvent.click(checkbox);
  //check if btn is grey
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  //enable btn
  fireEvent.click(checkbox);
  //check if btn is blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
