import React from "react";
import { render, screen } from "@testing-library/react";
import Sort from "./index";

test("renders without crashing", () => {
  render(<Sort />);
});
