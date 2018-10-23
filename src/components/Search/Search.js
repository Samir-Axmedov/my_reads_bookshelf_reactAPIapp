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

  getMyBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({myBookShelves: books});
    });
  }

  componentDidMount() {
    this.getMyBooks();
  }

  updateBook = (bookIDFromMenu, shelfName) => {
    let bookToUpdate = this.state.results.filter(book => book.id === bookIDFromMenu);
    console.log(bookToUpdate[0], shelfName);
    BooksAPI.update(bookToUpdate[0], shelfName)
    .then(resp => {
      console.log(resp);
      this.getMyBooks();
      this.searchBooks(); // Call Search again to update selector status

    });
  }

  updateBookMenu = (results) => {
    results.map(searchResult => {
      // set shelf status for 'results' based on state of myBookShelves
      this.state.myBookShelves.forEach(mybook => {
        if (searchResult.id === mybook.id) {
          searchResult["shelf"] = mybook.shelf;
          // books not in myBookShelves are set to "none" in ShelfChanger component
        }
      })
    });
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
      if (searchResults.error) {
        this.setState({ results: [] });
      } else {
        this.updateBookMenu(searchResults);
        this.setState({ results: searchResults }, this.componentDidMount())
      }
    });
  }

  render() {
    console.log(this.state.myBookShelves);
    return (

      <main className="search-books">
        <section className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <header className="search-books-input-wrapper">
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
          </header>
        </section>

        <section className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results && this.state.results.map(book => {
                return <Book book={book}
                             key={book.id}
                             updateBook={this.updateBook}
                             />
              })
            }
          </ol>
        </section>
      </main>
    );
  }
}

Search.propTypes = {
  handleSearchTerm: PropTypes.func,
  searchBooks: PropTypes.func,
  updateBook: PropTypes.func,
}

export default Search;
