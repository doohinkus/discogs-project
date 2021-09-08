import React from "react";
import { render, screen } from "@testing-library/react";
import Releases from "./index";

test("renders without crashing", () => {
  render(<Releases />);
  // const text = screen.getByText(/widget/i);
  // expect(text).toBeInTheDocument();
});
