import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./index";

test("renders without crashing", () => {
  render(<Loader />);
});
