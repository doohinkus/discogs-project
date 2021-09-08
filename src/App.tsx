import { useReleaseData } from "./hooks";
import Releases from "./components/Releases";

function App() {
  const [data, loadState] = useReleaseData();
  // console.log(data, " ", loadState);
  return (
    <div className="App">
      <header className="App-header">header</header>
      {loadState === "loading" && "Loading..."}
      {loadState === "loaded" && <Releases data={data} />}
    </div>
  );
}

export default App;
