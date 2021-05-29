import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components:
import {Navbar} from "../Navigation"

// Pages:
import {Homepage, Error, About, Work, ForFun} from "../../Pages"

function App() {
  return (
    <div className="App">      
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <Route path="/for-fun">
            <ForFun></ForFun>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
