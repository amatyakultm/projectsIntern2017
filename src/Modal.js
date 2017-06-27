import React, { Component } from 'react';
import _ from 'lodash';
import Search from './component/Search';
import Table from '/home/ubuntu-benz/Desktop/projectsIntern2017/src/component/Table.js';

import { Button, InputGroup, FormGroup, form, FormControl, BootstrapTable, TableHeaderColumn } from 'react-bootstrap';

//import { Table } from 'react-bootstrap';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToTable: ''


    };
  }



  render() {

    // this.setState({ userToTable: this.props.userPopUp })
    // const formInstance = <div className="row">
    //   <div className="col-lg-10">
    //     <div className="input-group">

    //       <input type="text" className="form-control" placeholder="Search for..." />
    //       <span className="input-group-btn">
    //         <button className="btn btn-default" type="button">search</button>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    /*const table = <table className="table table-bordered">
      <thead>
        <tr className="active">
          <td>Date</td>
          <td>Tasks</td>
          <td>Work hrs</td>
        </tr>
      </thead>
      <tr><td>1</td><td>a</td><td>3</td></tr>
    </table>*/



    //     var userData = _.map(this.props.userPopUp, (user, index) => {
    //      return <p key={`user-${index}`}>{user.id}</p>
    // })

    // var user = _.map(this.props.userPopUp.Benz, (user2, index) => { return <div>{user2.date}</div> })
    /*<BootstrapTable>

    </BootstrapTable>*/
    return (


      <div className="container" >
        <div className="modal fade" id="myModal" role="dialog" >
          <div className="modal-dialog modal-lg" >


            <div className="modal-content" >




              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>







              {/*!this.props.userPopUp ? 'Loading' : user*/}
              {!this.props.userPopUp ? 'Loading..' :
                <div>
                  <Search />
                  <Table vauleColumnHead={['Date', 'Task', 'Workour']} userPopUp={this.props.userPopUp} /></div>}





            </div>

          </div>
        </div>

      </div>

    );
  }
}

export default Modal;





/*const Modal = (props) => {
  

  return (
    <div className="App">

            <div className="container">





              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">


                  <div className="modal-content">
                    {props.name}
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>

                    </div>


                  </div>

                </div>
              </div>

            </div>
          </div>
          );

}

export default Modal;*/