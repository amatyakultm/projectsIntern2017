import React from 'react'
import { Link } from 'react-router'

const Product = (props) => {
  return (
    <div>
      <h1>Product</h1>
      <Link to={'/product'}> product all </Link> <br/>
      <Link to={'/product/1'}> product 1 </Link> <br/>
      <Link to={'/product/2'}> product 2 </Link> <br/>
      <Link to={'/product/3'}> product 3 </Link> <br/>
      <Link to={'/product/4'}> product 4 </Link> <br/>
      <Link to={'/product/5'}> product 5 </Link> <br/>
      {props.children}
    </div>
  )
}

export default Product
