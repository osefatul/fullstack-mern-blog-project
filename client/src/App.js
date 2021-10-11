import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  //const user = localStorage.getItem("userInfo");

  useEffect(() => {
    localStorage.getItem("userInfo");
  }, [user]);
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
