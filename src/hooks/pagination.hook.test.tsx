import { renderHook, act } from "@testing-library/react-hooks";
import { usePagination } from "./index";

describe("usePagination", () => {
  test("show correct default values", () => {
    const arr = [1, 2, 3, 4];
    const { result } = renderHook(() => usePagination(2, arr));
    expect(result.current.page).toEqual({ start: 0, end: 2 });
    expect(result.current.paginatedArray).toEqual([1, 2]);
  });
  test("show correct values for next page", async () => {
    const arr = [1, 2, 3, 4];
    const { result } = renderHook(() => usePagination(2, arr));
    act(() => {
      result.current.handleNextPage();
    });
    expect(result.current.page).toEqual({ start: 2, end: 4 });
    expect(result.current.paginatedArray).toEqual([3, 4]);
  });
  test("show correct values for prev page", async () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const { result } = renderHook(() => usePagination(2, arr));
    act(() => {
      result.current.handleNextPage();
    });
    act(() => {
      result.current.handlePrevPage();
    });
    expect(result.current.page).toEqual({ start: 0, end: 2 });
    expect(result.current.paginatedArray).toEqual([1, 2]);
  });
});
