import { useReleaseData, useInfiniteScroll } from "./hooks";
import Releases from "./components/Releases";
import Header from "./components/Header";
import PageNav from "./components/PageNav";
import "./tokens/index.css";
import "./App.css";

function App() {
  const defaultState = {
    releases: [
      {
        year: 0,
        title: "",
      },
    ],
  };
  const [data, loadState, handleSortByTitle, handleSortByYear] =
    useReleaseData(defaultState);

  const [paginatedArray] = useInfiniteScroll(data, 5);

  return (
    <div className="App">
      <Header />
      <PageNav
        handleSortByTitle={handleSortByTitle}
        handleSortByYear={handleSortByYear}
      />
      {/* {JSON.stringify(page)} */}
      <Releases paginatedArray={paginatedArray} loadState={loadState} />
    </div>
  );
}

export default App;
