import {
  render,
  screen,
  cleanup,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
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
  test("sorts by title", async () => {
    await waitFor(async () => {
      fireEvent.change(screen.getByTestId("sort"), {
        target: { value: "title" },
      });
      expect(screen.queryAllByText(/20 Hz/i)[0]).toBeInTheDocument();
    });
  });
  test("sorts by year", async () => {
    await waitFor(async () => {
      fireEvent.change(screen.getByTestId("sort"), {
        target: { value: "year" },
      });
      expect(screen.queryAllByText(/DJ-Kicks/i)[0]).toBeInTheDocument();
    });
  });
});
