import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../src/pages/profile';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('should render the Profile component', () => {
  useRouter.mockImplementation(() => ({
    // Mock any necessary router properties or functions
  }));

  render(<Profile />);

  // Add your assertions here
  const loginElement = screen.getByText('Profile', { selector: 'h1' });
  expect(loginElement).toBeInTheDocument();
});
