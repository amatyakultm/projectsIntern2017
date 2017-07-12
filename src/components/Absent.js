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
      console.log(tdData)
      let  table2=[]
      let num=0
      _.map(tdData,(item,key) => {
        table2[num]= _.map(item,data => <tr>
                                            <td className="table-form">{data.date}</td>
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

            let table =<table>
                <td className="table-form">Date</td> 
                <td className="table-form">Id</td>  
                <td className="table-form">Name</td>
                <td className="table-form">Status</td>  
                <td className="table-form">In</td>  
                <td className="table-form">Out</td> 
                <td className="table-form">Total hour</td> 
                {table2}
             </table>;
             this.setState({table3:table});
      
   
    }



    render() {
    
      let resultArr=[]
      let table2=[]
      let num=0
      const data = this.state.userdatas.present_absent[0]
      
      _.chain(data).map().value()
      _.chain(data).map().flatten().value()
      _.chain(data).map((value, key) => {
 	    const date = key
 	    table2[num]= _.map(value, (_value) => { return Object.assign(_value, {date}) })   
      num++ 
        }).flatten().value()
    
        
        if(this.state.table3==''||this.state.table3==null){
         _.map(table2,(item,key) => {
              _.map(item,(data,key2)=>{
                   
                   let result={}
                   result[key]=data
                   resultArr.push(result)
                  
              })  
        })
        this.tableDataUser(resultArr)
        }
        

       


         
  return (
    <div className="App">
     <SearchAbsent tableDataUser={this.tableDataUser} userdatas={this.state.userdatas}/>
     {this.state.table3}
    </div>
  );
  }
}
export default Absent;