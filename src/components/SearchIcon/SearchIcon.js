import React, { Component } from 'react';
import './SearchIcon.css';
import { Link } from 'react-router-dom';


class SearchIcon extends Component {

  render() {
    return (
      <section className="open-search">
        <Link to="/search">Add a book</Link>
      </section>
    );
  }
}

export default SearchIcon;
