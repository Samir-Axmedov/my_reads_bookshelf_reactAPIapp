import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import ShelfChanger from '../ShelfChanger/ShelfChanger';

class Book extends Component {

  render() {
    return (
          <li>
<<<<<<< HEAD
            <section className="book">
=======
            <div className="book">
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
              <div className="book-top">
                <div className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      !this.props.book.imageLinks ? ''
                      :
                      (this.props.book.imageLinks.thumbnail || this.props.book.imageLinks.smallThumbnail)
                    })`
                  }}>
                </div>

                <ShelfChanger currentShelf={this.props.book.shelf}
                              bookMenuID={this.props.book.id}
                              updateBook={this.props.updateBook}
                              />

              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
<<<<<<< HEAD
            </section>
=======
            </div>
>>>>>>> 755e18fdfbe799978bab4d35d29e563dfc27eb3c
          </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  updateBook: PropTypes.func,
}

export default Book
