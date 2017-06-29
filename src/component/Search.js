import React, { Component } from 'react';
import '../css/SearchModal.css';
const Search = (props) => {
  /*let a=<span>

   <input onChange={props.onChangeInputSearch} type="text" className="inputText" placeholder="Search for..." />

   <button className="btn btn-default" type="button">search</button>

 </span>*/

  return (
    <div className="container">

      <div className="row">
        <div className="col-sm-8">
          <div id="imaginary_container">
            <div className="input-group stylish-input-group">
              <input onChange={props.onChangeInputSearch} type="text" className="form-control" placeholder="Search" />
              <span className="input-group-addon">
                <button type="submit">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>

  );

}
export default Search;