import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class MovieItem extends Component {
  render() {
    return (
      <>
        <div className="body-cont">
          {/* {console.log(this.state.props.movie.id} */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              this.props.movie.poster_path
            }`}
          />

          <h2>Rating:{this.props.movie.vote_average}</h2>
        </div>
      </>
    )
  }
}

export default MovieItem
