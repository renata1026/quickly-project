import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../src/pages/profile';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('should render the Profile component', async () => {
  useRouter.mockImplementation(() => ({
    // Mock any necessary router properties or functions
  }));
  localStorage.setItem('jwttoken', 'mock-jwt-token');
  render(<Profile />);

  // Add your assertions here
  const profileElements = screen.getAllByText('Profile');
  expect(profileElements[0]).toBeInTheDocument();
});
