import React, { Component } from "react";

// import filmovi from "../data/filmovi";
import "./Movies.css";

// console.log(filmovi);

class Movies extends Component {
  state = {
    filmovi: [],
    isLoaded: false
  };

  componentDidMount() {
    // console.log(this.state);
    fetch("https://baza-podataka.herokuapp.com/filmovi/")
      .then(response => response.json())
      // .then(text => console.log(text));
      .then(json =>
        this.setState({
          filmovi: json,
          isLoaded: true
        })
      );
  }
  render() {
    const filmoviJsx = this.state.filmovi.map(film => (
      <div>
        <h3>{film.naziv}</h3>
        <img src={film.slika} alt={film.naziv} />
        <p>{film.godina}</p>
      </div>
    ));
    return (
      <div className="movies-wrapper">
        {this.state.isLoaded ? null : "ucitava se"}
        {filmoviJsx}
      </div>
    );
  }
}
export default Movies;
