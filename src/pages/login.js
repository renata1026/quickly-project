import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import { login } from '../api/api';

function LoginCopy() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // validate form

  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minLength = 6;

    if (!email || !emailRegex.test(email)) {
      return false;
    }

    if (!password || password.length < minLength) {
      return false;
    }

    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setError('');
      setIsLoading(true);

      try {
        const userData = { email, password };
        const response = await login(userData);

        // extract token from response and save it into local storage
        const { token } = response;
        localStorage.setItem('jwttoken', token);
        // Redirect the user to the profile page
        router.push('/profile');
      } catch (error) {
        console.error('Login error:', error);
        setError('Invalid email address or password');
      }

      setIsLoading(false);
    } else {
      setError('Invalid email address or password');
    }
  }

  return (
    <>
      <Nav />
      <div class="Login flex h-full justify-center bg-cloud-200">
        <div className="mt-6 md:mt-10 w-full max-w-md mx-4 ">
          <div className="bg-cloud-100 shadow-lg rounded-lg p-6 border border-cloud-400">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl ">
              <form
                className="space-y-6"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
              >
                <h1 className="text-3xl font-bold text-center text-black mb-6">
                  Log in to your account
                </h1>
                <p className="text-center text-gray-900">
                  Welcome back! Please enter your details
                </p>
                {error && (
                  <div className="text-red-500 mb-6 text-center">{error}</div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-l font-bold leading-6 text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-4 px-6 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#398194] sm:text-l sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-l font-bold leading-6 text-gray-700"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full  rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#398194] sm:text-l sm:leading-6 mb-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#398194] px-6 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#398194] hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#398194]"
                  >
                    Log in to your account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginCopy;
