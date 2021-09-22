import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import AllBeers from "./pages/AllBeers";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import DetailBeer from "./pages/DetailBeer"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all-beers" component={AllBeers} exact />
        <Route path="/all-beers/details" component={DetailBeer} exact></Route>
        <Route path="/random-beers" component={RandomBeer} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
