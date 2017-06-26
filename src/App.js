import React, { Component } from 'react';
import {Doughnut,defaults} from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      failed: false,
      data: []
    }
  }
  getUsers = () => {
    axios.get('https://8efa9ba5.ngrok.io/project_overview')
      .then(response => {
        this.setState({
          projects: response.data.project_overview
        })
        //console.log(this.state.projects);
      })
      .catch(err => {
        this.setState({
          failed: true
        })
        console.log(err)
      })
  }
  componentDidMount(){
    this.getUsers()
  }
  render() {
    var chartData = ()=>{
      _.map(this.state.projects, (project, index) => {// loop took project
        var projectId_c = _.find(this.state.data, item => item.projectId === project.pid)
        if(projectId_c){
          if(projectId_c.position === project.position){
            projectId_c.sum += project.dur
          }
        }else{
          this.state.data.push({
            projectId: project.pid,
            position: project.position,
            sum: project.dur
          })
        }
      })

      var listDataOption = []
      var listLabelOption = []
      _.map(this.state.data, item => {
        console.log(item)
        listDataOption.push(item.sum)
        listLabelOption.push(item.position)
        console.log('Position: '+item.position+" dur: "+item.sum)
      })
      console.log(listDataOption)
      console.log(listLabelOption)
      var option = {
        datasets: [{
            data: listDataOption
        }],
        labels: listLabelOption
      }
      return (
            <Doughnut data={option} />
      )
    }
    if(this.state.failed) return <h3>Get User Failed.</h3>

    return (
      <div className="App">
          <h2>Welcome to React</h2>
          <hr />
          <h4>list User Data</h4>
          <br />
          <div>
            {!this.state.projects ? 'Loading..' : chartData()}
          </div>

      </div>
    );
  }
}

export default App;
