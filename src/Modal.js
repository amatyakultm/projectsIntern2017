import React, { Component } from 'react';
import _ from 'lodash';
import Search from './component/SearchPopup';
import Table from './component/TablePopup.js';
import './css/Modal.css';


import { Button, InputGroup, FormGroup, form, FormControl, BootstrapTable, TableHeaderColumn } from 'react-bootstrap';

const Modal = (props) => {

  let content = props.vauleColumnHead.map((vauleColumnHead, index) => <td>{vauleColumnHead}</td>)
  let spaceNum = []
  for (let i = 0; i < 30; i++) { spaceNum[i] = '1' }
  let spaces = spaceNum.map((spaceNum, index) => <text>&nbsp;</text>)
  const bulletHidden = {
    listStyle: ' none'
  }
  const scrollHidden = {
    overflow: 'hidden',
    width: 1000,
    height: 500
  }
  const tdWidth = {
    width: 400,
  }
  return (
    <div className="modal2" >
      <label className="modal2__bg" htmlFor="modal-1"></label>
      <div className="modal2__inner" id="show" style={scrollHidden} >
        <div className="modal-header">
          <label className="modal2__close" htmlFor="modal-1"></label>
        </div>






        {!props.userPopUp ? 'Loading..' :
          <div>

            <table>
              <tr>

                <td height='100'>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td>
                <td width='300' >name : {props.namePopup} </td><td width='100' >task  : {props.valuePopup.length}</td><td width='600'><Search onChangeInputSearch={props.onChangeInputSearch} /></td>

              </tr>


            </table>
            <Table vauleColumnHead={content} userPopUp={props.valuePopup} />




          </div>}





      </div>
    </div>

  );

}
export default Modal;

/*
<text>name : {this.props.namePopup}</text>
          <text>row  : {this.state.value.length}</text>


          <Table vauleColumnHead={content} userPopUp={this.state.value} />
          */
/*

class Modal extends Component {
            constructor(props) {
          super(props);
    this.state = {
            userToTable: '',

      value: '',
      check: 1


    };
  }
  onChangeInputSearch = (event) => {
            event.preventDefault();


          let query = event.target.value
    let a = []
    let i = 0//num loop of a[]

    console.log(this.props.userPopUp.userdata)



    let test = this.props.userPopUp.userdata.filter((item) => item.description.startsWith(query))
    if (test.length > 0) {
            let tests = test.map((test, index) => <tr><td>{test.date}</td><td>{test.description}</td><td>{test.total_hour}</td></tr>)

      this.setState({
            value: tests

      })
      console.log(this.state.value)
    } else {
            let test = this.props.userPopUp.userdata.filter((item) => item.date.startsWith(query))
      let tests = test.map((test, index) => <tr><td>{test.date}</td><td>{test.description}</td><td>{test.total_hour}</td></tr>)

      this.setState({
            value: tests

      })
      console.log(this.state.value)
    }
    this.setState({
            check: 2
    })





  }




  render() {



            let content = this.props.vauleColumnHead.map((vauleColumnHead, index) => <td>{vauleColumnHead}</td>)


    if (this.props.userPopUp != null && this.state.check == 1) {
            this.state.value = this.props.userPopUp.userdata.map((userPopUp, index) => <tr> <td>{userPopUp.date}</td><td>{userPopUp.description}</td><td>{userPopUp.total_hour}</td> </tr>)

          }

          return (


      <div className="container" >
            <div className="modal fade" id="myModal" role="dialog" >
              <div className="modal-dialog modal-lg" >


                <div className="modal-content" >




                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>








                  {!this.props.userPopUp ? 'Loading..' :
                    <div>
                      <Search onChangeInputSearch={this.onChangeInputSearch} />
                      <text>name : {this.props.namePopup}</text>
                      <text>row  : {this.state.value.length}</text>


                      <Table vauleColumnHead={content} userPopUp={this.state.value} /></div>}





                </div>

              </div>
            </div>

          </div>

          );
  }
}

export default Modal;
*/