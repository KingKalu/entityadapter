import React from 'react'

function Sample(props) {
  return (
    <div className='sample' style={
        {
          background: props.color
        }
      } ></div>
  )
}

export default Sample