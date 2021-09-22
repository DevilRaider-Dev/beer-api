import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import AllBeers from "./pages/AllBeers";
import DetailsBeer from "./pages/DetailsBeer"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/all-beers" exact component={AllBeers}/>
        <Route path="/all-beers/:id" exact component={DetailsBeer}/>
        <Route path="/random-beers" exact component={RandomBeer}/>
      </Switch>
    </Router>
  );
}

export default App;
