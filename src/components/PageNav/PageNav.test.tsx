import React from "react";
import { render, screen } from "@testing-library/react";
import PageNav from "./index";

test("renders without crashing", () => {
  render(<PageNav />);
});
