import React, { Component } from 'react';
import {Doughnut,defaults} from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash'
import './App.css';
defaults.global.legend.display = false
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      failed: false,
      data: []
    }
  }
  getUsers = () => {
    axios.get('https://5971d513.ngrok.io/api/sumprojectposition')
      .then(response => {
        this.setState({
          projects: response.data.sumprojects
        })
        console.log(this.state.projects);
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
    let eiei = []
    let count = 0
    const chartData = _.map(this.state.projects, (item, index) => {
      var listDataOption = []
      var listLabelOption = []
      var colorList = []
      var positionList = ['Project Manager', 'Frontend Developer', 'Backend Developer', 'Tester', 'Business Analyst', 'Designer', 'Mobile App Developer']
      _.map(item[Object.keys(item)[0]], position => {
        listDataOption.push(position.total_hour)
        listLabelOption.push(position.position)
      })
      _.each(listLabelOption, label => {
        var color = ""
          if(label === positionList[0]){
            color = "#f08080"
          }else if(label === positionList[1]){
            color = "#b145df"
          }else if(label === positionList[2]){
            color = "#e700e7"
          }else if(label === positionList[3]){
            color = "#00d0d0"
          }else if(label === positionList[4]){
            color = "#ffff5c"
          }else if(label === positionList[5]){
            color = "#bc8f8f"
          }else if(label === positionList[6]){
            color = "#a52a2a"
          }
          colorList.push(color)
      })
      var option = {
        datasets: [{
          data: listDataOption,
          backgroundColor: colorList
        }],
        labels: listLabelOption,
        maintainAspectRatio : false
      }
      eiei.push(
        <div className="chart">
          <Doughnut key={`chart-${index}`} data={option}/>
          <h3 style={{textAlign:'center'}} key={`h3-${index}`}>{item.projectname}</h3>
        </div>
      )
      if(eiei.length === 3){
        count++
        eiei = []
        return (
          <div className={count===1 ? 'item active' : 'item'}>
            {eiei}
          </div>
        )
      }
    })

    if(this.state.failed) return <h3>Get User Failed.</h3>

    return (
      <div>
          <h4>list User Data</h4>
          <br />
          <div id="first-slider">
            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
              <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                {!this.state.projects ? 'Loading..' : chartData}
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <i className="fa fa-angle-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>

          </div>
      </div>
    );
  }
}
export default App;
