import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


class Shelf extends Component {
  render() {
    return (
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Book />
                </ol>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Shelf.propTypes = {

}

export default Shelf;
