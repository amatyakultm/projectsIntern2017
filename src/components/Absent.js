import React, { Component } from 'react'
import Style from '../styles/Absent.css'
import DataUser from '../data.json'
import _ from 'lodash'
import {Glyphicon,InputGroup,Button,Label} from 'react-bootstrap';
import SearchAbsent from './SearchAbsent'
import SortInAbsent from './SortInAbsent'

 class Absent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
        userdatas: DataUser,
        table3:'',
        buttonSortIn:true
      }
    }
  
        setStateFormClassChild=(buttonSortIn)=>{
          if(this.state.buttonSortIn) this.setState({buttonSortIn:false});   
          else {this.setState({buttonSortIn:true});   }
        }
        
        tableDataUsers=(tdData) => {
            let  table2=[]
             let num=0
          _.map(tdData,data => {
            table2[num]=  <tr>
                                            <td className="table-form">{data.date}</td>
                                           <td className="table-form">{data.id}</td>
                                           <td className="table-form">{data.name}</td>
                                           <td className="table-form">{data.status}</td>
                                           <td className="table-form">{data.in}</td>
                                           <td className="table-form">{data.out}</td>
                                           <td className="table-form">{data.total}</td>
                                           </tr>
           num++


          })
           let table =<table>
                <td className="table-form">Date</td> 
                <td className="table-form">Id</td>  
                <td className="table-form">Name</td>
                <td className="table-form">Status <SortInAbsent tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"Status"}/></td>  
                <td className="table-form">In  <SortInAbsent tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"In"}/></td>  
                <td className="table-form">Out</td> 
                <td className="table-form">Total hour</td> 
                {table2}
             </table>;
             this.setState({table3:table});        
      }


    render() {
    

  
        
      if(this.state.table3==''||this.state.table3==null){

      let resultArr=[]
      let table2=[]
      let num=0
            const data = this.state.userdatas.present_absent[0]
            console.log(this.state.userdatas.present_absent[0])
      
      _.chain(data).map((value, key) => {
 	    const date = key
 	    table2[num]= _.map(value, (_value) => { return Object.assign(_value, {date}) })   
      num++ 
        }).flatten().value()
 
     
   _.map(table2,(item,key) => {
           _.map(item,(data,key2)=>{
           
               resultArr.push(data)
            
          })  
       })
       console.log(resultArr)

        this.tableDataUsers(resultArr)
        }
        

       


         
  return (
    <div className="App">
     <SearchAbsent tableDataUsers={this.tableDataUsers} userdatas={this.state.userdatas}/>
     {this.state.table3}
    </div>
  );
  }
}
export default Absent;