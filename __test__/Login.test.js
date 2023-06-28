import { render } from '@testing-library/react'
import Login from '../src/pages/login'
import axios from 'axios'

test('renders Login component without errors', () => {
  render(<Login />)
})
