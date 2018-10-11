import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


class Shelf extends Component {

  render() {

    return (
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
                {
                  this.props.books.map(book => {
                  return <Book book={book} key={book.id} />
                  })
                }
                {console.log(this.props.books)}
            </div>
          </div>
    );
  }
}

Shelf.propTypes = {
  currentReads: PropTypes.array
}

export default Shelf;
