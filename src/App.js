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
    axios.get('https://647ad528.ngrok.io/api/sumprojectposition')
      .then(response => {
        this.setState({
          sumprojectdata: response.data.sumprojects
        })
        //console.log(this.state.sumprojectdata);
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
    var chartData = _.map(this.state.sumprojectdata, (item, index) => {
        var listDataOption = []
        var listLabelOption = []
        _.map(item[Object.keys(item)[0]], data => {
          listDataOption.push(data.total_hour)
          listLabelOption.push(data.position)
        })
        var option = {
          datasets: [{
              data: listDataOption
          }],
          labels: listLabelOption,
          text: item.projectname
        }
        console.log(option)
        return (
          <Doughnut key={`chart-${index}`} data={option} />
        )
      })
    
    if(this.state.failed) return <h3>Get User Failed.</h3>

    return (
      <div className="App">
          <h2>Welcome to React</h2>
          <hr />
          <h4>list User Data</h4>
          <br />
          <div>
            {!this.state.sumprojectdata ? 'Loading..' : chartData}
          </div>

      </div>
    );
  }
}

export default App;
