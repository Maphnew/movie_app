import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';
import { throws } from 'assert';




class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
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
          },
          {
            title:"something else",
            poster:"https://images-na.ssl-images-amazon.com/images/I/914-XkqbGZL._SX342_.jpg"
          }
        
        ]
      })
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }

}

export default App;
