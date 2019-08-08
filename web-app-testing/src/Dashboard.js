import React from 'react'

const Dashboard = (props) => {
  console.log('dash props', props)
  return (
    <>
      <div className='dashboard-stats'>
        <button onClick={props.increment}>BALL</button>
        <button onClick={props.increment}>STRIKE</button>
        <button onClick={props.increment}>FOUL</button>
        <button onClick={props.increment}>HIT</button>
      </div>
    </>
  )
}

export default Dashboard


// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.
// Feel free add other components and organize and name your components any way you want to satisfy the requirements. Make it up and make it happen developer!.
