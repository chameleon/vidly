import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
// import {getMovie} from "../services/fakeMovieService";
import {deleteMovie} from "../services/fakeMovieService";

class App extends Component {
  // state getMovies()
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log("movie = ", movie.title);
    //Update (overwrite)  virtual DOM state with a new array minus that movie
    //Make a whole new Movies array with the deleted movie removed
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // Update state
    this.setState({movies: movies});
  };

  //Bind the thing to this  (study this more)
  constructor() {
    super();
    this.handleReadout = this.handleReadout.bind(this);
  }
  //Joe
  handleReadout() {
    console.log(this.state.movies);

    //console.log(thing);
  }

  render() {
    if (this.state.movies.length === 0) {
      return <p className="p-2">There are no movies!</p>;
    }

    return (
      <React.Fragment>
        {/* {this.renderMovieCount()} */}

        <p className="p-2">
          Showing {this.state.movies.length} movies the the infobase
        </p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
