import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import App from './App'

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('should reset stats if strikes is clicked 3 times', () => {
    const { getByText } = render(<App />)
    const strike = getByText(/^strike$/i)
    fireEvent.click(strike)
    fireEvent.click(strike)
    fireEvent.click(strike)
    getByText(/Strikes: 0/i)
  })

  it('should reset stats if balls is clicked 4 times', () => {
    const { getByText } = render(<App />)
    const ball = getByText(/^ball$/i)
    fireEvent.click(ball)
    fireEvent.click(ball)
    fireEvent.click(ball)
    getByText(/balls: 0/i)
  })
})
