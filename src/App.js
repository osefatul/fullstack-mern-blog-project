import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Single /> */}
      {/* <Write /> */}
      <Settings />
    </div>
  );
}

export default App;
