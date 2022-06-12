import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  //find an element with role button and text "Change to Midnight Blue"
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  //check if button bg is MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns Midnight Blue when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MignightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  //check that btn starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
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
  //check if btn is Medium Violet Red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //change btn color
  fireEvent.click(colorButton);
  //disable btn
  fireEvent.click(checkbox);
  //check if btn is grey
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  //enable btn
  fireEvent.click(checkbox);
  //check if btn is Midnight Blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MignightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital lettrs", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one capital lettrs", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multuple capital lettrs", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
