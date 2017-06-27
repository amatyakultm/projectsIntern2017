import React, { Component } from 'react';
import { Doughnut,defaults } from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash'
import ReactLoading from 'react-loading'
import Style from '../styles/Style.css'
defaults.global.legend.display = false
class ProjectChart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      failed: false,
      data: []
    }
  }
  getUsers(){
    axios.get('https://4199e8e5.ngrok.io/api/sumprojectposition')
      .then(response => {
        this.setState({
          projects: response.data.sumprojects
        })
        //console.log(this.state.projects);
      })
      .catch(err => {
        this.setState({
          failed: true
        })
        //console.log(err)
      })
  }
  componentDidMount(){
    this.getUsers()
  }

  handleClickDetail(projectId){
    console.log(projectId)
  }

  render() {
    const chartData = _.map(this.state.projects, (item, index) => {
      var listDataOption = []
      var listLabelOption = []
      var colorList = []
      var positionList = ['Project Manager', 'Frontend Developer', 'Backend Developer', 'Tester', 'Business Analyst', 'Designer', 'Mobile App Developer', 'HR']
      _.map(item[Object.keys(item)[0]], position => {
        listDataOption.push(position.total_hour)
        listLabelOption.push(position.position)
      })
      _.each(listLabelOption, label => {
        var color = ''
        if (label === positionList[0]){
          color = '#46bfbd'
        } else if (label === positionList[1]){
          color = '#f7464a'
        } else if (label === positionList[2]){
          color = '#fdb45c'
        } else if (label === positionList[3]){
          color = '#949fb1'
        } else if (label === positionList[4]){
          color = '#ff6684'
        } else if (label === positionList[5]){
          color = '#e0e3cd'
        } else if (label === positionList[6]){
          color = '#4d5360'
        } else if (label === positionList[6]){
          color = '#7d5360'
        }
        colorList.push(color)
      })
      var option = {
        datasets: [{
          data: listDataOption,
          backgroundColor: colorList
        }],
        labels: listLabelOption,
        maintainAspectRatio : false,
        responsive: true
      }
      return (
        <div key={`div-${index}`} className='col-lg-3 col-md-4 col-sm-6 col-6'>
          <div className='card-box'>
            <h6 className='text-mute text-center' key={`h6-${index}`}>{item.projectname}</h6>
            <Doughnut key={`chart-${index}`} data={option} width={420} height={420}/>
            <div className='col-md-8 offset-md-2 text-center mt-3'>
              <button key={`btn-details-${index}`} onClick={() => this.handleClickDetail(Object.keys(item)[0])} className='btn btn-danger btn-sm btn-details'>Details</button>
            </div>
          </div>
        </div>
      )
    })

    const loadingData = () => {
      return (
        <div className='col align-self-center loading'>
          <ReactLoading type='spin' color='#dc3833' className='loading-icon' delay={0} />
          Loading
        </div>
      )
    }
    if (this.state.failed) {
      return <h3>Network Error.</h3>
    }

    return (
      <div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='btn-group pull-right'>
              <button className='btn btn-danger'><i className='zmdi zmdi-settings'></i> Setting</button>
            </div>
            <h4>Projects</h4>
          </div>
        </div>
        <div className='row mt-5'>
          {!this.state.projects ? loadingData() : chartData}
        </div>
      </div>
    );
  }
}
export default ProjectChart;
