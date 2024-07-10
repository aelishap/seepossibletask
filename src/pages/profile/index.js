import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Profile = () => {
  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'Male',
    state: 'California',
    city: 'San Francisco',
    country: 'United States',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center flex-1">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">User Profile</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className='flex gap-2'>
              <label className="block text-gray-700 text-[18px] font-bold">First Name:</label>
              <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.firstName}</p>
            </div>
            <div>
              <div className='flex gap-2'>
              <label className="block text-gray-700 text-[18px] font-bold">Last Name:</label>
              <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.lastName}</p>
            </div>
            </div>
            <div>
              <label className="block text-gray-700 text-[18px] font-bold">Email:</label>
              <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.email}</p>
            </div>
            <div>
            <label className="block text-gray-700 text-[18px] font-bold">Gender:</label>
            <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.gender}</p>
            </div>
            <div>
              <label className="block text-gray-700 text-[18px] font-bold">State:</label>
              <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.state}</p>
            </div>
            <div>
            <label className="block text-gray-700 text-[18px] font-bold">City:</label>
            <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.city}</p>
            </div>
            <div>
            <label className="block text-gray-700 text-[18px] font-bold">Country:</label>
            <p className="text-gray-900 text-[16px] mt-[1px]">{userProfile.country}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
