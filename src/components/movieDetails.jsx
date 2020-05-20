import React, {Component} from "react";

class MovieDetails extends Component {
  state = {};

  handleSave = () => {
    // Navigate to /movies
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <>
        <h1>{this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </>
    );
  }
}

export default MovieDetails;
