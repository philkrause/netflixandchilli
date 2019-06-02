import React, { Component } from 'react'

class MovieItem extends Component {
  // api_key = '2c269bdc3efe18bdacd53e11241e0dc7'

  // state = {
  //   movies: [],
  //   // title: '',
  //   // vote_average: ''
  // }

  // componentDidMount() {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=2c269bdc3efe18bdacd53e11241e0dc7&language=en-US&page=1`,
  //     {
  //       method: 'GET'
  //     }
  //   )
  //     .then(resp => {
  //       return resp.json()
  //     })
  //     .then(data => {
  //       console.log({ data })
  //       this.setState({
  //         movies: data.results,
  //         // movieId: data.results.id
  //         // title: data.results[0].title
  //         // vote_average: data.results[0].vote_average
  //       })
  //     })


  render() {
    return (
      <>
        <h1 style={{ backgroundColor: 'white' }}>TEST</h1>
        {/* <section className="movie-cont">
            <>
              <div className="body-cont">
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${this.state.movies.poster_path}`}
                  />

                </>
                <h2>Rating:{this.state.movies.vote_average}</h2>
              </div>
            </>
          </section> */}
      </>
    )
  }
}

export default MovieItem
