import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="head-er">
        <img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" />
        <BrowserRouter>
          <Link to={'/movies'}>
            <h1> NetFlix and Chilli</h1>
          </Link>
        </BrowserRouter>
      </div>
    )
  }
}

export default Header
