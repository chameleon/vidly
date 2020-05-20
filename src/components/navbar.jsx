import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import {NavLink} from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <>
        {/* {this.renderMovieCount()} */}
        <nav className="navbar navbar-nav navbar-expand-lg ">
          <NavLink className="navbar-brand" to="/#">
            Vidly
          </NavLink>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link active m-2">
              <NavLink to="./movies">Movies</NavLink>
            </li>
            <li className="nav-item nav-link  m-2">
              <NavLink to="./customers">Customers</NavLink>
            </li>
            <li className="nav-item nav-link  m-2">
              <NavLink to="./rentals">Rentals</NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
