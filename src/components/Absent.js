import React, { Component } from 'react'
import Style from '../styles/Absent.css'
import DataUser from '../data.json'
import _ from 'lodash'

 class Absent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
        userdatas: DataUser,
        table3:''
      }
    }
    onchangeByname=(event) => {
      let query=event.target.value.toLowerCase()
      let table2=[]
      let table4=[]
      let num=0
      const data = this.state.userdatas.present_absent[0]
      
      _.chain(data).map().value()
      _.chain(data).map().flatten().value()
      _.chain(data).map((value, key) => {
 	    const date = key
 	    table2[num]= _.map(value, (_value) => { return Object.assign(_value, {date}) })   
      num++ 
        }).flatten().value()
      num=0
      _.map(table2,(item,key) => {
             table4[num]= _.map(item,data =>{if(data.name.toLowerCase().startsWith(query)) return( <tr>
                                           <td className="table-form">{data.date}</td>
                                           <td className="table-form">{data.id}</td>
                                           <td className="table-form">{data.name}</td>
                                           <td className="table-form">{data.status}</td>
                                           <td className="table-form">{data.in}</td>
                                           <td className="table-form">{data.out}</td>
                                           <td className="table-form">{data.total}</td>
             </tr>)}
                              )
           num++


                                    })

      this.setState({table3: this.tableDataUser(table4)});

    }
    tableDataUser=(tdData) => {
      return <table>
                <td className="table-form">Date</td> 
                <td className="table-form">Id</td>  
                <td className="table-form">Name</td>
                <td className="table-form">Status</td>  
                <td className="table-form">In</td>  
                <td className="table-form">Out</td> 
                <td className="table-form">Total hour</td> 
                {tdData}
             </table>;
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
      

        
        this.setState({table3: this.tableDataUser(table2)});
      
        }

       


         
  return (
    <div className="App">
    <input type="text" className="input-seach-by-name" placeholder="Search by name..." onChange={this.onchangeByname}   />
    {this.state.table3}

    </div>
  );
  }
}
export default Absent;