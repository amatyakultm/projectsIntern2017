import React from 'react'
import { Link } from 'react-router'

const Layout = (props) => {
  return (
    <div>
      <h1>Layout</h1>
      <Link to={'/product'}> to product </Link> <br/>
      <Link to={'/about'} > to about </Link>
      {props.children}
    </div>
  )
}

export default Layout
