import React from "react";
import NavBar from "./components/navbar";
import {Route, Switch, Redirect} from "react-router-dom";
import Customers from "./components/customers";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* default bootstrap root container */}
      <main role="main" className="container">
        <NavBar />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />

          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movies" />
          {/* If all other URLS fail, go to not-found */}
          <Redirect to="/not-found" />
        </Switch>
        {/* <Movies /> */}
      </main>
    </div>
  );
}

export default App;
