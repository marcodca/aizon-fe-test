import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders component exists", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/Tab/i).textContent).toBeTruthy();
});
