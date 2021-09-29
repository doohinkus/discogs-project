// import { useReleaseData, useInfiniteScroll } from "./hooks";
import { useInfiniteScroll, useReleases } from "./hooks";
import useStore from "./store";
import Releases from "./components/Releases";
import Header from "./components/Header";
import PageNav from "./components/PageNav";

import "./tokens/index.css";
import "./App.css";

function App() {
  const { releases, loadState, sortByTitle, sortByYear }: any = useStore();
  const [paginatedArray] = useInfiniteScroll(releases, 5);
  useReleases();
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
