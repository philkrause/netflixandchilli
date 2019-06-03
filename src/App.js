import React, { Component } from 'react'
import MovieList from './pages/MovieList'
import MovieItem from './components/MovieItem'
import MoviePage from './pages/MoviePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/movie/page/:id" exact component={MoviePage} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
