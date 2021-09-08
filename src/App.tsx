import { useReleaseData } from "./hooks";
import Releases from "./components/Releases";

function App() {
  const [data, loadState, handleSortByTitle, handleSortByYear] =
    useReleaseData();
  //add sort here

  return (
    <div className="App">
      <header className="App-header">header</header>
      <button onClick={handleSortByTitle}>Sort by title</button>
      <button onClick={handleSortByYear}>Sort by year</button>
      {loadState === "loading" && "Loading..."}
      {loadState === "loaded" && <Releases data={data} />}
    </div>
  );
}

export default App;
