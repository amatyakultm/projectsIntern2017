import React, { Component } from 'react'
import Style from '../styles/Absent.css'
import {Glyphicon,InputGroup,Button} from 'react-bootstrap';
import _ from 'lodash'

 class SortInAbsent extends Component {
 
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
       const data = this.props.userdatas.present_absent[0]
        _.chain(data).map((value, key) => {
 	     const date = key
 	     table2[num]= _.map(value, (_value) => { return Object.assign(_value, {date}) })   
       num++ 
       }).flatten().value()
      

      return table2

    }

    ClickSortIn=(event) => {
      let query=event.target.value.toLowerCase()
      let data=[]
      let resultArr=[]
      
      data=this.matchDate()
      resultArr=this.matchResult(data,query)
      this.props.tableDataUsers(resultArr)
     
     
     if(this.props.buttonSortIn){
        resultArr= _.sortBy(resultArr, ['in'])
        this.props.setStateFormClassChild()  
      }
     else{
        resultArr= _.sortBy(resultArr, ['in']).reverse()
        this.setState({buttonSortIn:true}); 
       this.props.setStateFormClassChild() 

     } 

     this.props.tableDataUsers(resultArr)


    }
   render() {
     console.log(this.props.checkSort)
        return (
              <div className="App">
                <Button onClick={this.ClickSortIn}><Glyphicon glyph="chevron-right" /></Button>
              </div>
  );
  }
}
export default SortInAbsent;