import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class MoviePageItem extends Component {
  api_key = '2c269bdc3efe18bdacd53e11241e0dc7'

  state = {
    movies: [],
    title: '',
    vote_average: '',
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
          <div className="body-cont">
            {console.log(this.movie.id}
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                this.movie.poster_path
              }`}
            />
  
            <h2>Rating:{this.movie.vote_average}</h2>
          </div>
        </>
      )
    }
  }


export default MoviePageItem