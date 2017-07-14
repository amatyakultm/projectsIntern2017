import React, { Component } from 'react'
import Style from '../styles/Absent.css'
import {Glyphicon,InputGroup,Button} from 'react-bootstrap';
import _ from 'lodash'
import  IconUp from '../styles/iconup.png'

 class SortInAbsent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
     }
    }
    
    matchResult=(data)=>{
       let resultArr=[]
       _.map(data,(item,key) => {
           _.map(item,(data,key2)=>{
            
               resultArr.push(data)
            
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
    checkColumnSort=(resultArr)=>{
       if(this.props.checkSort=="date"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['date'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['date']).reverse()
          } 
       }
       if(this.props.checkSort=="id"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['id'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['id']).reverse()
          } 
       }
       if(this.props.checkSort=="name"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['name'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['name']).reverse()
          } 
       }
       if(this.props.checkSort=="status"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['status'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['status']).reverse()
          } 
       }
        if(this.props.checkSort=="status"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['status'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['status']).reverse()
          } 
        }
       if(this.props.checkSort=="in"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['in'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['in']).reverse()
          } 
       }
      if(this.props.checkSort=="out"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['out'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['out']).reverse()
          } 
      }
       if(this.props.checkSort=="total"){
          if(this.props.buttonSortIn){
            resultArr= _.sortBy(resultArr, ['total'])
          }
          else{
              resultArr= _.sortBy(resultArr, ['total']).reverse()
          } 
       }
      this.props.setStateFormClassChild() 
      return  resultArr

    }
    checkButtonPicture=()=>{
      if(this.props.buttonPicture)
      return  <Button onClick={this.ClickSortIn} > <img src={require('../styles/iconDown.png')} /></Button>
      else  
      return <Button onClick={this.ClickSortIn} > <img src={require('../styles/iconUp.png')} /></Button>
   

    }

    ClickSortIn=(event) => {
   
      let data=[]
      let resultArr=[]
      
      data=this.matchDate()
      resultArr=this.matchResult(data)
    
     console.log(resultArr)
     

     resultArr=this.checkColumnSort(resultArr)
     

     this.props.tableDataUsers(resultArr)


    }
   render() {
     let num=0
     console.log(this.props.checkSort)
        return (
              <div className="App">
                {this.checkButtonPicture()}
               
              </div>
  );
  }
}
export default SortInAbsent;