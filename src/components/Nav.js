import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoDark from '../assets/logoDark.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = ({ loading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    setUser(userData);
  }, [loading]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('jwttoken');
    setUser(null);
    setIsMenuOpen(false); // Add this line to close the menu after logout
  };

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={LogoDark}
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
            <>
              <li>
                <Link
                  href="/profile"
                  aria-label="Profile"
                  title="Profile"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:opacity-50"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  onClick={handleLogout} // Update this line
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#ff6661] hover:opacity-80 focus:shadow-outline focus:outline-none"
                  aria-label="Logout" // Update the aria-label and title
                  title="Logout"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
          {!user && (
            <>
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
            </>
          )}
        </ul>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer pl-24 text-black"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className="flex-col py-4">
          <ul>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <Link href="/login">Login</Link>
            </li>
            {user && (
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                <Link href="/profile">Profile</Link>
              </li>
            )}
            {!user && (
              <li
                onClick={() => setIsMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                <Link href="/signup">Sign Up</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href="/">
          <Image
            src={LogoDark}
            alt="logo"
            width={205}
            height={75}
            className="cursor-pointer pt-6"
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
