import React, { useEffect, useState } from "react";
import { releaseData } from "../data/data";
export function useReleaseData(defaultState: any) {
  const [loadState, setLoadState] = useState("loading");
  const [data, setData] = useState(defaultState);
  const handleSortByTitle: any = () => {
    setData({
      releases: [
        ...data?.releases?.sort((a: any, b: any) => {
          const nameA = a.title.toUpperCase(); // ignore upper and lowercase
          const nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        }),
      ],
    });
  };
  const handleSortByYear: any = () => {
    setData({
      releases: [
        ...data?.releases?.sort((a: any, b: any) => {
          const yearA: number = a.year;
          const yearB: number = b.year;
          if (yearA < yearB) {
            return -1;
          }
          if (yearA > yearB) {
            return 1;
          }

          return 0;
        }),
      ],
    });
  };

  useEffect(() => {
    let mounted: boolean = true;
    let asycnCall = async () => {
      try {
        let result: any = await releaseData();
        if (mounted) {
          setLoadState("loaded");
          setData(result);
        }
      } catch (err) {
        setLoadState("failed");
        console.log(err);
      }
    };
    asycnCall();
    return () => {
      mounted = false;
    };
  }, []);

  return [data, loadState, handleSortByTitle, handleSortByYear];
}

export function usePagination(pageSize: number, array: any): any {
  const size: number = pageSize || 0;
  const length: number = array?.length;
  const [page, setPage] = useState({ start: 0, end: size });
  const [count, setCount] = useState(1);

  async function handleNextPage() {
    const end: number = page.end + size * count;
    if (end < length) {
      console.log("hey", end);
      await setCount(count + 1);
      await setPage({
        start: 0,
        end,
      });
    }
  }
  function handlePrevPage() {
    const start = page.start - size;
    const end = page.end - size;
    if (start > size * -1) {
      setPage({
        start,
        end,
      });
    }

    // console.log(page);
    // return page;
  }
  const paginatedArray: object[] = array?.slice(0, page.end);

  return [handleNextPage, handlePrevPage, paginatedArray];
}

export function useInfiniteScroll(data: any) {
  const [count, setCount] = useState(5);
  const paginatedArray = data?.releases?.slice(0, count);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setCount(count + 1 * 4);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  return [paginatedArray];
}
