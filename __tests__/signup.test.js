import React from 'react';
import { render, screen } from '@testing-library/react';
import Signup from '../src/pages/signup';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('should render the Signup component', () => {
  useRouter.mockImplementation(() => ({
    // Mock any necessary router properties or functions
  }));

  render(<Signup />);

  // Add your assertions here
  const loginElement = screen.getByText('Signup', { selector: 'h1' });
  expect(loginElement).toBeInTheDocument();
});
