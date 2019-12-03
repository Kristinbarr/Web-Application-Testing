import React from 'react'

const Display = (props) => {
  return (
    <div className='display-stats'>
      <h3>BALLS: {props.balls}</h3>
      <h3>STRIKES: {props.strikes}</h3>
    </div>
  )
}

export default Display

// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.
