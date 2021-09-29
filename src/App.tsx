// import { useReleaseData, useInfiniteScroll } from "./hooks";
import { useEffect } from "react";
import { useInfiniteScroll } from "./hooks";
import useStore from "./store";
import Releases from "./components/Releases";
import Header from "./components/Header";
import PageNav from "./components/PageNav";
import { releaseData } from "./data/data";

import "./tokens/index.css";
import "./App.css";

function App() {
  const {
    releases,
    loadState,
    sortByTitle,
    sortByYear,
    setReleases,
    setLoadState,
  }: any = useStore();
  const [paginatedArray] = useInfiniteScroll(releases, 5);
  // console.log(paginatedArray);
  useEffect(() => {
    let mounted: boolean = true;
    let asycnCall = async () => {
      try {
        let result: any = await releaseData();
        // console.log(result.releases);
        if (mounted) {
          setLoadState("loaded");
          setReleases(result.releases);
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

  return (
    <div className="App">
      <Header />
      <PageNav handleSortByTitle={sortByTitle} handleSortByYear={sortByYear} />
      {/* {JSON.stringify(page)} */}
      <Releases paginatedArray={paginatedArray} loadState={loadState} />
    </div>
  );
}

export default App;
