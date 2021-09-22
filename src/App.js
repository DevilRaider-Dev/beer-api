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
import DetailBeer from "./pages/DetailBeer"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/all-beers" exact ><AllBeers /></Route>
        <Route path="/all-beers/details" exact><DetailBeer /></Route>
        <Route path="/random-beers" exact><RandomBeer /></Route>
      </Switch>
    </Router>
  );
}

export default App;
