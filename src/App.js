import { Route, Switch } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol/:price/:name"
          render={(routerProps) => <Stock {...routerProps} />}
        >
          <Stock />
        </Route>
        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
