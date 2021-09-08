import { useReleaseData } from "./hooks";
import Releases from "./components/Releases";
import Header from "./components/Header";

function App() {
  const [data, loadState, handleSortByTitle, handleSortByYear] =
    useReleaseData();
  //add sort here

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={handleSortByTitle}>Sort by title</button>
        <button onClick={handleSortByYear}>Sort by year</button>
      </nav>
      {loadState === "loading" && "Loading..."}
      {loadState === "loaded" && <Releases data={data} />}
    </div>
  );
}

export default App;
