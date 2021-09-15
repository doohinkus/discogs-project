import { renderHook, act } from "@testing-library/react-hooks";
import { useInfiniteScroll } from "./index";

describe("useInfiniteScroll", () => {
  const defaultState = {
    releases: [
      {
        year: 1900,
        title: "nine",
      },
      {
        year: 1878,
        title: "old tyme",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
      {
        year: 1990,
        title: "retro",
      },
    ],
  };
  test("show correct default values (5)", () => {
    const arr = [1, 2, 3, 4];
    const { result } = renderHook(() => useInfiniteScroll(defaultState, 5));
    // expect().toEqual({ start: 0, end: 2 });
    act(() => {
      result.current[1]();
      console.log(result.current[1]());
    });
    expect(result.current[0].length).toEqual(5);
  });
  test("show correct default values when scroll is triggered (10)", () => {
    const { result } = renderHook(() => useInfiniteScroll(defaultState, 10));
    act(() => {
      result.current[1]();
    });

    expect(result.current[0].length).toEqual(10);
  });
});
