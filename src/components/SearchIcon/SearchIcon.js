import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchIcon.css';

class SearchIcon extends Component {
  render() {
    return (
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    );
  }
}

SearchIcon.propTypes = {

}

export default SearchIcon;
