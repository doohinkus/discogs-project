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

  // state of the app
  const appState: any = {
    loading: <p>Loading...</p>,
    loaded: <Releases paginatedArray={paginatedArray} />,
    failed: (
      <p>Ooops! something went wrong. Please check console for details.</p>
    ),
  };
  return (
    <div className="App">
      <Header />
      <PageNav
        handleSortByTitle={handleSortByTitle}
        handleSortByYear={handleSortByYear}
      />

      {/* {JSON.stringify(page)} */}
      {appState[`${loadState}`]}
    </div>
  );
}

export default App;
