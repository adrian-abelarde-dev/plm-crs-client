'use client';

import { useState } from 'react';

import PersonalDetails from './personal-details';

function FacultyProfile() {
  const [contactNo, setContactNo] = useState('09876543211');

  return (
    <main className='p-6'>
      <div className='mt-12'>
        <h1 className='text-4xl font-medium'>View Profile</h1>
      </div>

      {/* Profile */}
      <div className='flex flex-col shadow border h-auto mt-4 rounded-sm p-6'>
        <PersonalDetails contactNo={contactNo} setContactNo={setContactNo} />

        {/* Employment Details */}
        <div></div>

        {/* Current Address */}
        <div></div>
      </div>
    </main>
  );
}

export default FacultyProfile;
