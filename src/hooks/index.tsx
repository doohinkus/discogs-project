import React, { useEffect, useState } from "react";
import { releaseData } from "../data/data";
export function useReleaseData() {
  // loading, loaded, failed
  const defaultState = {
    releases: [
      {
        year: 0,
        title: "",
      },
    ],
  };
  const [loadState, setLoadState] = useState("loading");
  const [data, setData] = useState(defaultState);
  const handleSortByTitle: any = () => {
    setData({
      releases: [
        ...data?.releases?.sort((a, b) => {
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
        ...data?.releases?.sort((a, b) => {
          const yearA: number = a.year;
          const yearB: number = b.year;
          if (yearA < yearB) {
            return -1;
          }
          if (yearA > yearB) {
            return 1;
          }

          // names must be equal
          return 0;
        }),
      ],
    });
  };

  useEffect(() => {
    let mounted: boolean = true;
    let asycnCall = async () => {
      console.log("Use EFFECT");
      // setLoadState("loading");
      try {
        let result: any = await releaseData();
        if (mounted) {
          setLoadState("loaded");
          setData(result);
        }
        // console.log(result);
      } catch (err) {
        if (mounted) {
          setLoadState("failed");
          // setData({ releases: [{ title: "", year: 0 }] });
          console.log(err);
        }
      }
    };
    asycnCall();
    return () => {
      mounted = false;
    };
  }, []);

  return [data, loadState, handleSortByTitle, handleSortByYear];
}

export function usePagination(pageSize: number, array: []) {
  const size: number = pageSize || 0;
  const length: number = array?.length + size;
  const [page, setPage] = useState({ start: 0, end: size });

  function handleNextPage() {
    const start = page.end;
    const end = page.end + size;
    if (end < length) {
      setPage({
        start,
        end,
      });
    }
    // console.log(page);

    // return page;
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
  const paginatedArray: object[] = array?.slice(page.start, page.end);

  return {
    page,
    handleNextPage,
    handlePrevPage,
    paginatedArray,
  };
}
