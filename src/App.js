import React from "react";
import NavBar from "./components/navbar";
import {Route} from "react-router-dom";
import Customers from "./components/customers";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* default bootstrap root container */}
      <main role="main" className="container">
        <NavBar />
        <Route path="/customers" component={Customers} />
        <Route path="/movies" component={Movies} />
        <Route path="/rentals" component={Rentals} />
        {/* <Movies /> */}
      </main>
    </div>
  );
}

export default App;
