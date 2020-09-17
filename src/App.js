import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <Router> 
        <switch>
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </switch>

      </Router> 
    </div>
  );
}

export default App; 
