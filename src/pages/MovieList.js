import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

class MovieList extends Component {
  api_key = '2c269bdc3efe18bdacd53e11241e0dc7'

  state = {
    movies: [],
    // title: '',
    // vote_average: ''
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
        console.log({ data })
        this.setState({
          movies: data.results
          // movieId: data.results.id
          // title: data.results[0].title
          // vote_average: data.results[0].vote_average
        })
      })
  }

  render() {
    // console.log(this.props.params.id)
    return (
      <>
        <Header />
        <section className="movie-cont">
          {this.state.movies.map((mov, index) => {
            return (
              <>
                <div className="body-cont">
                  <>

                    <Link to={`/movie/page/${mov.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                      />
                    </Link>

                  </>
                  <h2>Rating:{mov.vote_average}</h2>
                </div>
              </>
            )
          })}
        </section>
      </>
    )
  }
}

export default MovieList
