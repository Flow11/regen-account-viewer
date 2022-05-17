import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Account Viewer h1', () => {
  render(<App />)
  const linkElement = screen.getByText(/Account Viewer APP/i)
  expect(linkElement).toBeInTheDocument()
})
