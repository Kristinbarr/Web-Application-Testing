import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
  it('it renders without crashing', () => {
    render(<Dashboard />)
  })
  it('strike', () => {
    let clicked = false
    const { getByText } = render(<Dashboard increment={() => (clicked = true)} />)
    const strikeButton = getByText(/strike/i)
    fireEvent.click(strikeButton)
    expect(clicked).toBe(true)
  })

  it('ball with mocked function', () => {
    const click = jest.fn()
    // console.log(click)
    const { getByText } = render(<Dashboard increment={click} />)
    const ballButton = getByText(/ball/i)
    fireEvent.click(ballButton)
    expect(click).toBeCalled()
  })
})
