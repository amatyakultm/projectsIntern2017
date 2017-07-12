import React, { Component } from 'react'
import Style from '../styles/Absent.css'
import DataUser from '../data.json'
import _ from 'lodash'

 class SearchAbsent extends Component {
 
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

     this.props.tableDataUser(table4)

    }
   render() {
        return (
              <div className="App">
                <input type="text" className="input-seach-by-name" placeholder="Search by name..." onChange={this.onchangeByname}   />

              </div>
  );
  }
}
export default SearchAbsent;