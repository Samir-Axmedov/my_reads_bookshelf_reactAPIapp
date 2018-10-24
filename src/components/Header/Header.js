import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
    return (
      <div className="list-books-title">
        <h1>{props.bookShelf}</h1>
      </div>
    );
}

Header.propTypes = {
  bookShelf: PropTypes.string
}

export default Header;
