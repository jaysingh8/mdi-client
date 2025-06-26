import React, { useEffect, useState } from 'react';
import { Mail, Phone, UserCircle2 } from 'lucide-react';

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } else {
      console.log('User not found in localStorage');
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      {user ? (
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
          <div className="flex flex-col items-center">
            <UserCircle2 size={64} className="text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-6">User Profile</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <UserCircle2 size={20} />
              <span className="font-medium">Name:</span>
              <span className="ml-auto">{user.name}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={20} />
              <span className="font-medium">Phone:</span>
              <span className="ml-auto">{user.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={20} />
              <span className="font-medium">Email:</span>
              <span className="ml-auto">{user.email}</span>
            </div>
            <button className='bg-purple-600 px-2 py-2 text-white rounded-md cursor-pointer'>Edit Details</button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Loading user data...</p>
      )}
    </div>
  );
}

export default User;
