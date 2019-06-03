import React, { Component } from 'react'
// import axios from 'axios'
// import MovieItem from '../components/MovieComponent'

class Movie extends Component {
  state = {
    moviePage: {}
  }

  componentDidMount() {
    this.setState({ moviePage: this.props.location.state.allMovies })

  }


  render() {
    console.log(this.props)
    const movieTitle = {
      color: 'white',
      fontSize: '2rem',
      padding: '5rem'
    }
    return (
      <>
        <div className='movieBox' >
          {/* <h1 style={movieTitle}>{this.state.moviePage.title}</h1> */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${this.state.moviePage.poster_path}`}

          />
          <h1 style={movieTitle}>{this.state.moviePage.overview}</h1>
        </div>
      </>
    )
  }
}

export default Movie
