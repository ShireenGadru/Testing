import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial Conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });

  //check if checkbox is unchecked by default
  expect(checkbox).toBeEnabled();
  expect(button).toBeDisabled();
});

test("Checking checkbox enables button, unchecking checkbox will disable button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });

  //check if button is enabled after checking checkbox
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  //unchecking checkbox will disable button
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
