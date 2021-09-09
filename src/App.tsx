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
  // state of the app
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
        handleSortByTitle={handleSortByTitle}
        handleSortByYear={handleSortByYear}
      />

      {/* {JSON.stringify(page)} */}
      {appState[`${loadState}`]}
    </div>
  );
}

export default App;
