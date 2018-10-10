import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Library.css';
import Header from '../Header/Header';
import Shelf from '../Shelf/Shelf';
import SearchIcon from '../SearchIcon/SearchIcon';

const books = [
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  },
  {
    author: "Orson Scott Card",
    title: "Ender's Game",
    image: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
  },
]

class Library extends Component {
  state = {
    books: []
  }

  componentDidMount() {
      this.setState({books: books});
  }

  render() {
    return (

      <div className="list-books">
        <Header />
          <div className="list-books-content">
              <Shelf name={"Currently Reading"} />
              <Shelf name={"Want To Read"} />
              <Shelf name={"Read"} />
          </div>
        <SearchIcon />
      </div>
    );
  }
}

Library.propTypes = {

}

export default Library;
