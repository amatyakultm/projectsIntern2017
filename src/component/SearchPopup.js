import React, { Component } from 'react';
import '../css/SearchModal.css';
const Search = (props) => {
  /*let a=<span>

   <input onChange={props.onChangeInputSearch} type="text" className="inputText" placeholder="Search for..." />

   <button className="btn btn-default" type="button">search</button>

 </span>*/
  const widthInput = { width: 100, }

  return (
    <div className="">


      <input onChange={props.onChangeInputSearch} type="text" className="" placeholder="Search" />


    </div>

  );

}
export default Search;