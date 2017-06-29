import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import './navBar.css'

const Heading = (props) => {

  return (
    <div className='bread'>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/projects'>
          Project Overview
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Data
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Heading
