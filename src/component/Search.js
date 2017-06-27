import React, { Component } from 'react';
import '../css/Search.css';
const Search = () => {

  return <span>

    <input type="text" className="inputText" placeholder="Search for..." />

    <button className="btn btn-default" type="button">search</button>

  </span>

}
export default Search;