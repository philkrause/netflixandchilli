import React, { Component } from 'react'
import MovieItem from '../components/MovieItem'

class MovieList extends Component {
  api_key = '2c269bdc3efe18bdacd53e11241e0dc7'

  state = {
    movies: [],
    title: '',
    vote_average: ''
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
        //console.log({ data })
        this.setState({
          movies: data.results
          // title: data.results[0].title
          // vote_average: data.results[0].vote_average
        })
      })
  }
  render() {
    return (
      <>
        <section className="movie-cont">
          {this.state.movies.map((mov, index) => {
            {
            }
            return (
              <MovieItem
                key={index}
                movie={mov}
                id={mov.id}
                rating={mov.vote_average}
              />
            )
          })}
        </section>
      </>
    )
  }
}

export default MovieList
