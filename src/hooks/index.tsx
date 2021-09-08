import React, { useEffect, useState } from "react";
import { releaseData } from "../data/data";
export function useReleaseData() {
  // loading, loaded, failed
  const [loadState, setLoadState] = useState("loading");
  const [data, setData] = useState(null);

  useEffect(() => {
    let asycnCall = async () => {
      setLoadState("loading");

      try {
        let result: any = await releaseData();
        setLoadState("loaded");
        setData(result);
        // console.log(result);
      } catch (err) {
        setLoadState("failed");
        setData(null);
        console.log(err);
      }
    };
    asycnCall();
    // return () => setLoadState("loading");
  }, []);

  return [data, loadState];
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
  return { page, handleNextPage, handlePrevPage, paginatedArray };
}
