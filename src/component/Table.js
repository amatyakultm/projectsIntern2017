import React, { Component } from 'react';
import { Button, InputGroup, FormGroup, form, FormControl } from 'react-bootstrap';
import _ from 'lodash';
const Table = (props) => {



  let content = props.vauleColumnHead.map((vauleColumnHead, index) => <td>{vauleColumnHead}</td>)
  let value = props.userPopUp.userdata.map((userPopUp, index) => <tr> <td>{userPopUp.date}</td><td>{userPopUp.description}</td><td>{userPopUp.total_hour}</td> </tr>)
  //var user = _.map(this.props.userPopUp.Benz, (user2, index) => { return <div>{user2.date}</div> })
  //console.log(props.userPopUp)
  return (<div>{console.log(props.user)}<table className="table table-bordered"><thead><tr>{content}</tr></thead>{value}</table></div>);


  //for(var i=0;i<3;i++){}
  /*return (
    <div >
      <table className="table table-bordered">
        <thead>
          <tr className="active">
            <td>Date</td>
            <td>Tasks</td>
            <td>Work hrs</td>
          </tr>
        </thead>
        <tr><td>1</td><td>a</td><td>3</td></tr>
      </table>
      {props.column}
    </div>
  );

}*/
}
export default Table;