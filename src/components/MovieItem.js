import React, { Component } from 'react'

class MovieItem extends Component {
  render() {
    return (
      <>
        <div className="body-cont">
          {/* <h1>{mov.title}</h1> */}
          <a href="#">
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}
            />
          </a>
          <h2>Rating:{this.props.vote_average}</h2>
        </div>
      </>
    )
  }
}

export default MovieItem
