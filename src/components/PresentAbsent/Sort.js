import React, { Component } from 'react'

import {Glyphicon,InputGroup,Button} from 'react-bootstrap';
import _ from 'lodash'
//import  IconUp from '/iconDown.png'


 class SortInAbsent extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
     }
    }
    


    
   
    checkColumnSort=(data)=>{
       
            let resultArr={}
            if(this.props.checkSort=="date"){
            
                  if(this.props.buttonSortIn){
                    
                    resultArr= _.sortBy(data, ['date'])
                  }
            
                  else{
                    
                    resultArr= _.sortBy(data, ['date']).reverse()
            
                  } 
            }
     
            if(this.props.checkSort=="name"){
            
                  if(this.props.buttonSortIn){
                    
                    resultArr= _.sortBy(data, ['name'])
                  }
            
                  else{
                    
                    resultArr= _.sortBy(data, ['name']).reverse()
                  } 
             }
     
            if(this.props.checkSort=="status"){
            
                  if(this.props.buttonSortIn){
                    
                    resultArr= _.sortBy(data, ['status'])
                  }
            
                  else{
                    
                    resultArr= _.sortBy(data, ['status']).reverse()
                  }  
             }
       
            if(this.props.checkSort=="in"){
          
                  if(this.props.buttonSortIn){
                     
                     resultArr= _.sortBy(data, ['in'])
                  }
            
                  else{
                    
                     resultArr= _.sortBy(data, ['in']).reverse()
                      } 
            }
      
            if(this.props.checkSort=="out"){
          
                  if(this.props.buttonSortIn){
                    
                    resultArr= _.sortBy(data, ['out'])
                  }
               
                  else{
                    
                    resultArr= _.sortBy(data, ['out']).reverse()
                  } 
            }

            if(this.props.checkSort=="total"){
          
                  if(this.props.buttonSortIn){
                    
                    resultArr= _.sortBy(data, ['total'])
                  }
                  else{
                    
                    resultArr= _.sortBy(data, ['total']).reverse()
                  } 
            }
     
     this.props.onSorted(resultArr)
      
     }
    
    
    checkButtonPicture=()=>{
      
            if(this.props.buttonSortIn)
                
                return  <Button style={{marginLeft:0}} onClick={this.ClickSortIn} > <img src={require('../../styles/iconup.png')} /></Button>
           
           else  
                
                return <Button style={{marginLeft:0}} onClick={this.ClickSortIn} > <img src={require('../../styles/icondown.png')} /></Button>
   
    }

    
    ClickSortIn=(event) => {
            this.checkColumnSort(this.props.user)
      

    }
   
    
    render() {
    
     
       return (
              <div className="App" style={{paddingLeft:0}} >
                
                   {this.checkButtonPicture()}
               
              </div>
       );
    }
}
export default SortInAbsent;