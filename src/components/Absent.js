import React, { Component } from 'react'
import DataUser from '../data.json'
import axios from 'axios'
import _ from 'lodash'
import {Glyphicon,InputGroup,Button,Label} from 'react-bootstrap';
import SearchAbsent from './SearchAbsent'
import SortInAbsent from './SortInAbsent'
import s from  '../styles/Style.css'

 class Absent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
        userdatas:''/* DataUser*/,
        table3:'',
        buttonSortIn:true,
        buttonPicture:false

      }
    }


       getUsers(){
         axios.get('http://52.77.234.30/presentabsent?start=2017-06-01&end=2017-06-30')
      .then(response => {
       console.log(response.data.present_absent)
        this.setState({
          userdatas:response.data.present_absent
       
        })
          let resultArr=[]
          let table2=[]
          let num=0
 
            const data = this.state.userdatas
          
      
           _.chain(data).map((value, key) => {
 	         const date = value.date
            //console.log(value.date)
           
              console.log(value);
 	          _.map(value, (_value) => { 
             table2[num]= _.map(_value, (_value2) => { 
               return Object.assign(_value2, {date}) 
             })
           })   
           num++ 
          console.log(value)
          }).flatten().value()
         
 
     console.log(table2)
         _.map(table2,(item,key) => {
           _.map(item,(data,key2)=>{
           
               resultArr.push(data)
            
          })  
        })
        
        

        this.tableDataUsers(resultArr)
        
       
      })
      .catch(err => {
        this.setState({
      
        })
        //console.log(err)
      })
     
      


     }
   componentDidMount(){
    this.getUsers()
    }
  
        setStateFormClassChild=(buttonSortIn)=>{
          if(this.state.buttonSortIn) this.setState({buttonSortIn:false});   
          else {this.setState({buttonSortIn:true});   }
          if(this.state.buttonPicture) this.setState({buttonPicture:false});
          else  {this.setState({buttonPicture:true});   }
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
                <td className="table-form">Date <SortInAbsent  buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"date"}/></td> 
                <td className="table-form">Id<SortInAbsent buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"id"}/></td>  
                <td className="table-form">Name <SortInAbsent buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"name"}/></td>
                <td className="table-form">Status <SortInAbsent buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"status"}/></td>  
                <td className="table-form">In  <SortInAbsent buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"in"}/></td>  
                <td className="table-form">Out <SortInAbsent buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"out"}/></td> 
                <td className="table-form">Total hour <SortInAbsent buttonPicture={this.state.buttonPicture} tableDataUsers={this.tableDataUsers} buttonSortIn={this.state.buttonSortIn} userdatas={this.state.userdatas}  setStateFormClassChild={this.setStateFormClassChild} checkSort={"total"}/></td> 
                {table2}
             </table>;
             this.setState({table3:table});        
      }


    render() {
    
/*

        
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
        
*/
       


         
  return (
    <div className="App">
       <span className="fromto">From </span>
      <input className="form-control fromto_input" type="date" ref="from" />
      <span className="fromto">To </span>
      <input className="form-control fromto_input" type="date" ref="from" />
      <button className="btn btn-sm btn-danger" >Submit</button>
     <SearchAbsent tableDataUsers={this.tableDataUsers} userdatas={this.state.userdatas}/>
     {this.state.table3}

    </div>
  );
  }
}
export default Absent;