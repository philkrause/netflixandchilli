import React, { Component } from 'react'
import MovieList from './components/MovieList'
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieList />
      </>
    )
  }
}

export default App
