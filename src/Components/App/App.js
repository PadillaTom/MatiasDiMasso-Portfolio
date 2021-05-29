import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components:
import {Navbar, Sidebar} from "../Navigation"
import {ScrollToTop} from "../ScrollToTop"

// Pages:
import {Homepage, Error, About, Work, ForFun} from "../../Pages"

function App() {
  return (
    <div className="App">      
      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
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
