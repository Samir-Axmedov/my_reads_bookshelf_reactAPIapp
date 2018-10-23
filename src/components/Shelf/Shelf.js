import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Shelf.css';
import Book from '../Book/Book';


class Shelf extends Component {

  render() {
    console.log(this.props.books);
    return (
<<<<<<< HEAD
      <section className="bookshelf-books">
        <ol className="books-grid">
          <div>
            <section className="bookshelf">
=======
      <div className="bookshelf-books">
        <ol className="books-grid">
          <div>
            <div className="bookshelf">
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
              <h2 className="bookshelf-title">{this.props.name}</h2>
              {
                this.props.books.map(book => {
                  return <Book book={book}
                               key={book.id}
                               updateBook={this.props.updateBook}
                               />
                })
              }
<<<<<<< HEAD
            </section>
          </div>
        </ol>
      </section>
=======
            </div>
          </div>
        </ol>
      </div>
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
    );
  }
}

Shelf.propTypes = {
  currentReads: PropTypes.array,
  name: PropTypes.string,
  updateBook: PropTypes.func
}

export default Shelf;
