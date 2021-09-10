import { renderHook, act } from "@testing-library/react-hooks";
import { useReleaseData } from "./index";

describe("useReleaseData", () => {
  const defaultState = {
    releases: [
      {
        year: 0,
        title: "",
      },
    ],
  };

  test("show correct default values for hook", async () => {
    const { result } = renderHook(() => useReleaseData(defaultState));
    expect(result.current[1]).toBe("loading");
    expect(result.current[0].releases).toEqual([
      {
        year: 0,
        title: "",
      },
    ]);
  });
  test("sorts by year", async () => {
    const data = {
      releases: [
        {
          year: 2010,
          title: "",
        },
        {
          year: 1989,
          title: "",
        },
        {
          year: 1992,
          title: "",
        },
      ],
    };
    const { result } = renderHook(() => useReleaseData(data));
    act(() => {
      result.current[3]();
    });

    expect(result.current[0]).toEqual({
      releases: [
        { year: 1989, title: "" },
        { year: 1992, title: "" },
        { year: 2010, title: "" },
      ],
    });
  });
  test("sorts by title", async () => {
    const data = {
      releases: [
        {
          year: 2010,
          title: "rut guard",
        },
        {
          year: 1989,
          title: "person",
        },
        {
          year: 1992,
          title: "shaker",
        },
      ],
    };
    const { result } = renderHook(() => useReleaseData(data));
    act(() => {
      result.current[2]();
    });

    expect(result.current[0]).toEqual({
      releases: [
        { year: 1989, title: "person" },
        { year: 2010, title: "rut guard" },
        { year: 1992, title: "shaker" },
      ],
    });
  });
});
