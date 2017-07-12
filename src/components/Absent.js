import React, { Component } from 'react'
import Style from '../styles/Absent.css'
import DataUser from '../data.json'
import _ from 'lodash'
import SearchAbsent from './SearchAbsent'

 class Absent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
        userdatas: DataUser,
        table3:''
      }
    }
    
    tableDataUser=(tdData) => {
   
     let table =<table>
                <td className="table-form">Date</td> 
                <td className="table-form">Id</td>  
                <td className="table-form">Name</td>
                <td className="table-form">Status</td>  
                <td className="table-form">In</td>  
                <td className="table-form">Out</td> 
                <td className="table-form">Total hour</td> 
                {tdData}
             </table>;
             this.setState({table3:table});
    }



    render() {
        if(this.state.table3==''||this.state.table3==null){
            let  table2=[]
            let num=0
            _.map(this.state.userdatas.present_absent[0],(item,key) => {
            table2[num]= _.map(item,data => <tr>
                                           <td className="table-form">{key}</td>
                                           <td className="table-form">{data.id}</td>
                                           <td className="table-form">{data.name}</td>
                                           <td className="table-form">{data.status}</td>
                                           <td className="table-form">{data.in}</td>
                                           <td className="table-form">{data.out}</td>
                                           <td className="table-form">{data.total}</td>
                                           </tr>
                              )
             num++
            })
            this.tableDataUser(table2)
      
        }

       


         
  return (
    <div className="App">
     <SearchAbsent tableDataUser={this.tableDataUser}/>
     {this.state.table3}
    </div>
  );
  }
}
export default Absent;