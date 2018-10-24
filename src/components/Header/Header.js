import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ bookShelf }) => {
    return (
      <div className="list-books-title">
        <h1>{bookShelf}</h1>
      </div>
    );
}

Header.propTypes = {
  bookShelf: PropTypes.string
}

export default Header;
