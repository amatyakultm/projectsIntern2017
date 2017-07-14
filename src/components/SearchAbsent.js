import React, { Component } from 'react'
import Style from '../styles/Absent.css'

import _ from 'lodash'

 class SearchAbsent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
     
        
      }
    }
    matchResult=(data,query)=>{
       let resultArr=[]
       _.map(data,(item,key) => {
           _.map(item,(data,key2)=>{
            if(data.name.toLowerCase().startsWith(query)){
               resultArr.push(data)
            }
          })  
       })

     return resultArr

    }

    
    matchDate=()=>{//ฟังชัน map collumn date ให้อยู่ก้อนเดียวกับ column อื่น 
       let table2=[]
       let num=0
       const data = this.props.userdatas
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
      

      return table2

    }

    onchangeByname=(event) => {
      let query=event.target.value.toLowerCase()
      let data=[]
      let resultArr=[]
      
      data=this.matchDate()
      resultArr=this.matchResult(data,query)
      this.props.tableDataUsers(resultArr)

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