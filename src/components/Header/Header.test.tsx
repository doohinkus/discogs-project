import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders without crashing", () => {
  render(<Header />);
});
