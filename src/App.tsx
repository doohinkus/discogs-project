import { useReleaseData, usePagination } from "./hooks";
import Releases from "./components/Releases";
import Header from "./components/Header";
import Sort from "./components/Sort";
import PageNav from "./components/PageNav";

function App() {
  const [data, loadState, handleSortByTitle, handleSortByYear] =
    useReleaseData();
  const { page, handleNextPage, handlePrevPage, paginatedArray } =
    usePagination(10, data?.releases);
  //add sort here

  return (
    <div className="App">
      <Header />
      <Sort
        handleSortByTitle={handleSortByTitle}
        handleSortByYear={handleSortByYear}
      />
      <PageNav
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      {JSON.stringify(page)}
      {loadState === "loading" && "Loading..."}
      {loadState === "loaded" && <Releases paginatedArray={paginatedArray} />}
    </div>
  );
}

export default App;
