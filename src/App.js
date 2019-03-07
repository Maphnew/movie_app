import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://ae01.alicdn.com/kf/HTB19B5SQXXXXXafXXXXq6xXFXXXe/J1354-FULL-METAL-JACKET-Stanley-Kubrick-Vietnam-War-Movie-Pop-14x21-24x36-Inches-Silk-Art-Poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "http://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://images-na.ssl-images-amazon.com/images/I/914-XkqbGZL._SX342_.jpg"
  }

]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
