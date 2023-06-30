import React, { useState } from 'react';
import Image from 'next/image';
import LadyOnPhone from '../assets/ladyOnPhone.jpg';
import { signup } from '../api/api';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';

const Signup = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitForm, setSubmitForm] = useState(false);

  // validate email
  const validateEmail = (email) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  };

  // handle password change
  const handlePasswordChange = (e) => {
    setSubmitForm(false);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
  };
  // handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      setError('Password and Confirm Password do not match');
      return;
    }
    setError('');
    setSubmitForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submitForm) {
      return;
    }

    // validate all fields are not empty
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !company
    ) {
      setError('All fields are required');
      return;
    }

    // validate email
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    // api calling
    try {
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        company: {
          name: company,
        },
      };
      const response = await signup(userData);
      setError('');
      // Redirect the user to the login page
      router.push('/login');
      // Handle success, such as redirecting to a different page
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message);
      console.error('Signup error:', error);
      return;
    }

    // Reset the form fields and error state
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCompany('');
  };

  return (
    <div>
      <Nav />

      <div className="flex flex-wrap w-full overflow-hidden">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24"></div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <h1 className="text-3xl font-bold text-center mb-1">
              Sign up for a free account
            </h1>
            {error && (
              <p className="text-red-500 mb-4    text-center">{error}</p>
            )}
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4 mb-4">
                <label className="block text-gray-900">First Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-4 mb-4">
                <label className="block text-gray-900">Last Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-gray-900">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-gray-900">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-gray-900">Confirm Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-gray-900">Company</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-[#215D6E] text-white rounded-md py-2 px-4 w-full mt-4 mb-6 hover:opacity-50"
              >
                Signup
              </button>
              <p>
                By continuing, you are creating a Quickly account and therefore
                you agree to Quickly's Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl" style={{ overflow: 'hidden' }}>
          <div
            style={{
              height: '91vh',
              maxHeight: '91vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              class="hidden object-cover w-full h-screen md:block"
              src={LadyOnPhone}
              alt="Lady on Phone"
            />
          </div>
          <style jsx>
            {`
              @media (max-width: 768px) {
                div {
                  display: none;
                }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Signup;
