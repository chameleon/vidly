import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import {Link} from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <>
        {/* {this.renderMovieCount()} */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">
            Vidly
          </a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="./movies">Movies</Link>
            </li>
            <li className="">
              <Link to="./customers">Customers</Link>
            </li>
            <li className="">
              <Link to="./rentals">Rentals</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
