import React, { Component } from 'react'
import MovieList from './pages/MovieList'
import MoviePage from './pages/MoviePage'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieList />
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/" component={MoviePage} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
