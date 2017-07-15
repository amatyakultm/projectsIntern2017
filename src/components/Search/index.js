import React, { Component } from 'react';
import _ from 'lodash';

class Search extends Component {
  constructor(props){
    super(props)
  }

  handleOnChange(e){
    const query = e.target.value.toLowerCase()
    this.props.onChange(query)
  }

  render() {
    return (
        <div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Name" onChange={(e) => this.handleOnChange(e)}/>
            </div>
        </div>
    )
  }
}
export default Search;
