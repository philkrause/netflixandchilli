import React, { Component } from 'react'

class MovieItem extends Component {
  render() {
    return (
      <>
        <section className="movie-cont">
          <div className="body-cont">
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.state.movies.poster_path}`}
            />
            <h2>Rating:{this.state.movies.vote_average}</h2>
          </div>
        </section>
      </>
    )
  }
}

export default MovieItem
