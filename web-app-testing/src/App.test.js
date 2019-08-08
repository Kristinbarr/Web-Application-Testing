import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from './Dashboard'
import Display from './Display'
import App from './App'

// describe('<App />', () => {
//   it('renders without crashing using ReactDOM', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<App />, div)
//     ReactDOM.unmountComponentAtNode(div)
//   })
// })

// describe('Dashboard.js', () => {
//   describe('balls', () => {
//     it('should increment balls thrown', () => {})
//     it('should reset when a player reaches 4 balls', () => {})
//     it('should reset when a hit is recorded', () => {})
//   })
//   describe('strikes', () => {
//     it('should reset when a player reaches 3 strikes', () => {})
//   })
//   describe('hits', () => {
//     it('should reset when a player reaches 3 strikes', () => {})
//   })
// })

describe('<Display />', () => {
  it('renders list of current stats provided on props', () => {
    const batterData = { id: 1, name: 'Mr. Baseball Guy', balls: 2, strikes: 0, fouls: 0, hits: 0 }

    const component = render(<Display stats={batterData} />)
    const balls = component.getAllByTestId('balls')
    expect(balls)
  })
  // it('should render balls', () => {})
  // it('should render strikes', () => {
  //   const comp = render(<Display />)
  // })
})

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />)
  })
})

