import { render, screen, cleanup, act, waitFor } from "@testing-library/react";
import App from "./App";

describe("app interactions", () => {
  beforeEach(async () => {
    await act(async (): Promise<any> => await render(<App />));
  });
  afterEach(async () => {
    cleanup();
  });
  test("renders some loading...", async () => {
    expect(screen.getByText(/Loading../i)).toBeInTheDocument();
  });
  test("renders first page of content", async () => {
    await waitFor(async () =>
      expect(screen.getByText(/Andrea/i)).toBeInTheDocument()
    );
  });
});
