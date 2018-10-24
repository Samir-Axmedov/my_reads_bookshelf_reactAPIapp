import React from 'react';
import './SearchIcon.css';
import { Link } from 'react-router-dom';


const SearchIcon = () => {
  return (
    <section className="open-search">
      <Link to="/search">Add a book</Link>
    </section>
  );
}

export default SearchIcon;
