import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
jest.mock("./data/data", () => {
  const releases = [{}];
  return {
    releaseData: jest.fn(() => Promise.resolve(releases)),
  };
});
test("renders withour crashing", () => {
  render(<App />);
});
test("renders loading message", async () => {
  const { getByText } = render(<App />);
  // console.log(container);
  expect(getByText(/Loading/i)).toBeInTheDocument();
});
