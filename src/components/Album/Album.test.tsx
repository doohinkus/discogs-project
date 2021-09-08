import React from "react";
import { render, screen } from "@testing-library/react";
import Album from "./index";

test("renders without crashing", () => {
  render(<Album />);
});
