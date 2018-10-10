import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';

// {console.log(Array.isArray(this.props.currentReads))}
//   {
//     this.state && this.state.currentReads && this.props.currentReads.map((book, index) => {
//        return <Book book={book} key={index} />
//      })
//   }

class Shelf extends Component {
  render() {
    return (
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
                <Book />
            </div>
          </div>
    );
  }
}

Shelf.propTypes = {
  currentReads: PropTypes.array
}

export default Shelf;
