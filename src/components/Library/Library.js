import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Library.css';
import Shelf from '../Shelf/Shelf';
import SearchIcon from '../SearchIcon/SearchIcon';

class Library extends Component {
  state = {
    CurrentlyReading: [],
    WantToRead: [],
    Read: [],
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <Shelf name={"Currently Reading"} />
        <Shelf name={"Want To Read"} />
        <Shelf name={"Read"} />
        <SearchIcon />
      </div>
    );
  }
}

Library.propTypes = {

}

export default Library;
