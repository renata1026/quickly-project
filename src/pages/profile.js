import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUser } from '../api/api';
import Nav from '../components/Nav';

function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map((name) => name.charAt(0).toUpperCase()).join('');
  };
  useEffect(() => {
    const fetchData = async () => {
      // Check authentication state
      const jwtToken = localStorage.getItem('jwttoken');

      if (!jwtToken) {
        // User is not authenticated, redirect to 401 page or login page
        router.push('/401'); // Assuming you have a 401 page component or a login page component
        setLoading(false);
      } else {
        // User is authenticated, fetch user data or get it from local storage
        const userData = localStorage.getItem('userData');

        if (userData) {
          // If user data exists in local storage, parse and set it in state
          setUser(JSON.parse(userData));
        } else {
          const response = await getUser(jwtToken);
          setUser(response.user);
          localStorage.setItem('userData', JSON.stringify(response.user));
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [router]);

  return (
    <div>
      <Nav loading={loading} />
      <div className="flex justify-center items-flex-start mt-10">
        {user ? (
          <div className="bg-white shadow-md rounded-lg px-10 pt-8 pb-10 mb-4 max-w-xl">
            <div className="text-center">
              <div className="bg-[#398194] rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">
                  {getInitials(`${user.first_name} ${user.last_name}`)}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6">Profile</h1>
              <p className="mb-4">
                <strong>First Name:</strong> {user.first_name}
              </p>
              <p className="mb-4">
                <strong>Last Name:</strong> {user.last_name}
              </p>
              <p className="mb-4">
                <strong>Email:</strong> {user.email}
              </p>

              {/* Render other user information here */}
            </div>
          </div>
        ) : (
          <p>Loading...</p> // Display a loading state while fetching user data
        )}
      </div>
    </div>
  );
}

export default Profile;
