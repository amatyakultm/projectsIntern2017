import React from 'react'

const ShowProductId = (props) => {
  console.log('this props', props);
  return (
    <div>
      <h1>ShowProductId {props.params.id}</h1>
    </div>
  )
}

export default ShowProductId
