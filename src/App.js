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
        <MoviePage />
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movie/:id" component={MoviePage} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
