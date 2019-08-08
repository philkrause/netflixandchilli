import React, { Component } from 'react'
import Header from '../components/Header'
import MovieItem from '../components/MovieItem'

class MovieList extends Component {
  api_key = '2c269bdc3efe18bdacd53e11241e0dc7'

  state = {
    movies: [],
    randomMovie: []
  }

  randomNum = () => {
    return Math.floor(Math.random() * 10)
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=2c269bdc3efe18bdacd53e11241e0dc7&language=en-US&page=1`,
      {
        method: 'GET'
      }
    )
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        this.setState({
          movies: data.results,
          randomMovie: data.results[this.randomNum()]
        })
      })
  }

  render() {
    return (
      <>
        <Header movies={this.state.randomMovie} />
        <section className="movie-cont">
          {this.state.movies.map((mov, index) => {
            return <MovieItem id={mov.id} key={index} movies={mov} />
          })}
        </section>
      </>
    )
  }
}

export default MovieList
