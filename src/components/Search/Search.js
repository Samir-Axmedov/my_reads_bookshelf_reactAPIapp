import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';
import './Search.css';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
      myBookShelves: [],
      results: [],
      searchTerm: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({myBookShelves: books});
    })
  }

  getBook = (bookIDFromMenu, shelfName) => {
    let bookToUpdate = this.state.results.filter(book => book.id === bookIDFromMenu);
    BooksAPI.update(bookToUpdate[0], shelfName);

  }

  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value },
      this.searchBooks
    )
  }

  searchBooks = () => {
    if (this.state.searchTerm === '' || this.state.searchTerm === 'undefined') {
      return this.setState({ results: [] });
    }
    BooksAPI.search(this.state.searchTerm).then(searchResults => {
      console.log(this.state.searchTerm);
      console.log(searchResults);
      searchResults.error ?
      this.setState({ results: [] })
      :
      this.setState({ results: searchResults })
    });
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={this.handleSearchTerm}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search by title or author"
            />

          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results && this.state.results.map(book => {
                this.state.myBookShelves.forEach(mybook => {
                  book.id === mybook.id ?
                    book["shelf"] = mybook["shelf"]
                  :
                  book["shelf"] = 'none';
                })
                return <Book book={book}
                             key={book.id}
                             getBook={this.getBook}
                             />
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearchTerm: PropTypes.func,
  searchBooks: PropTypes.func,
}

export default Search;
