import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Display from './Display'

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />)
  })

  it('props work', () => {
    const balls = 3, strikes = 2
    const display = render(<Display strikes={strikes} balls={balls} />)
    display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'))
    display.getByText(new RegExp(`Balls: ${balls}`, 'i'))
  })

  it('props work', () => {
    const display = render(<Display strikes={1} balls={2} />)
    display.getByText(/Strikes: 1/i)
    display.getByText(/Balls: 2/i)
  })

  it('Component is dumb', () => {
    const display = render(<Display strikes={-2} balls={400} />)
    display.getByText(/Strikes: -2/i)
    display.getByText(/Balls: 400/i)
  })
})
