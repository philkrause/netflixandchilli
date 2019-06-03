import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="head-er">
        <img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" />
        <h1> NetFlix and Chilli</h1>
      </div>
    )
  }
}

export default Header
