import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoDark from '../assets/logoDark.svg';

const Nav = ({ loading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    const user = localStorage.getItem('userData');
    setUser(user);
    console.log(user);
  }, [user, loading]);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoDark}
              alt="logo"
              width={205}
              height={75}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {user && (
            <li>
              <Link
                href="/profile"
                aria-label="Login"
                title="Login"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:opacity-50"
              >
                Profile
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link
                href="/login"
                aria-label="Login"
                title="Login"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:opacity-50"
              >
                Login
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#ff6661] hover:opacity-80 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
          )}

          {user && (
            <li>
              <Link
                href="/login"
                onClick={() => {
                  localStorage.removeItem('userData');
                  localStorage.removeItem('jwttoken');
                  setUser(null);
                }}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#ff6661] hover:opacity-80 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-4 lg:hidden">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/profile"
                  aria-label="Profile"
                  title="Profile"
                  className="block font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:opacity-50"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  aria-label="Login"
                  title="Login"
                  className="block font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:opacity-50"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block w-full px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:opacity-50 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
          <button
            aria-label="Close Menu"
            title="Close Menu"
            className="absolute top-0 right-0 p-2 -mt-4 -mr-4 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:opacity-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.3 15.88l-1.42 1.42L12 13.42l-4.88 4.88-1.42-1.42L10.58 12 5.7 7.12l1.42-1.42L12 10.58l4.88-4.88 1.42 1.42L13.42 12l4.88 4.88z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
