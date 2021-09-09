import { useReleaseData, usePagination } from "./hooks";
import Releases from "./components/Releases";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PageNav from "./components/PageNav";
import "./tokens/index.css";
import "./App.css";

function App() {
  const [data, loadState, handleSortByTitle, handleSortByYear] =
    useReleaseData();
  const { page, handleNextPage, handlePrevPage, paginatedArray } =
    usePagination(6, data?.releases);
  //add sort here
  const appState: any = {
    loading: <p>Loading...</p>,
    loaded: <Releases paginatedArray={paginatedArray} />,
  };
  return (
    <div className="App">
      <Header />
      <PageNav
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <Sort
        handleSortByTitle={handleSortByTitle}
        handleSortByYear={handleSortByYear}
      />
      {JSON.stringify(page)}
      {appState[`${loadState}`]}
      {/* {loadState === "loading" && "Loading..."}
      {loadState === "loaded" && <Releases paginatedArray={paginatedArray} />} */}
    </div>
  );
}

export default App;
