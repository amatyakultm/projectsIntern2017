import React, { Component } from 'react'
import Style from '../styles/Style.css'
class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const loadingData = () => {
      return (
        <div className='col align-self-center loading'>
          <img src="./assets/img/loading.svg" alt="" width="50"/>
        </div>
      )
    }
    return (
      <div>
        { loadingData() }
      </div>
    )
  }
}
export default Home;
