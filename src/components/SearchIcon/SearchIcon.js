import React from 'react';
import './SearchIcon.css';
import { Link } from 'react-router-dom';


const SearchIcon = () => {
  return (
    <section className="open-search">
      <Link to="/search">icon to search for books</Link>
    </section>
  );
}

export default SearchIcon;
