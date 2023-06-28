import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../src/pages/login';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('should render the Login component', () => {
  useRouter.mockImplementation(() => ({
    // Mock any necessary router properties or functions
  }));

  render(<Login />);

  // Add your assertions here
  const loginElement = screen.getByText('Login', { selector: 'h1' });
  expect(loginElement).toBeInTheDocument();
});
