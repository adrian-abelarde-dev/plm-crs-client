'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

import DetailsSection from './details-section';

function FacultyProfile() {
  const [contactNo, setContactNo] = useState('09876543211');
  const [address, setAddress] = useState('1234 Bambang St. Sta. Cruz, Manila');

  const personalData = {
    title: 'Personal Details',
    content: [
      {
        cell: [
          {
            label: 'Employee No.',
            value: '12345678910',
          },
          {
            label: 'Last Name',
            value: 'Dela Santos',
          },
          {
            label: 'First Name',
            value: 'John Michael',
          },
          {
            label: 'Middle Name',
            value: 'Delimondo',
          },
          {
            label: 'Maiden Name',
            value: '',
          },
          {
            label: 'Pedigree',
            value: 'Doc',
          },
        ],
      },
      {
        cell: [
          {
            label: 'Birth Date',
            value: '12/25/1987',
          },
          {
            label: 'Birth Place',
            value: 'Manila City',
          },
          {
            label: 'Email Address',
            value: 'gmailkoto@gmail.com',
          },
        ],
      },
      {
        cell: [
          {
            label: 'Gender',
            value: 'Male',
          },
          {
            label: 'Status',
            value: 'Single',
          },
          {
            label: 'Citizenship',
            value: 'Filipino',
          },
          {
            label: 'Contact Number',
            value: contactNo,
            editable: true,
            onChange: (e) => setContactNo(e.target.value),
            type: 'number',
          },
        ],
      },
    ],
  };

  const employmentDetails = {
    title: 'Employment Details',
    content: [
      {
        cell: [
          { label: 'TIN No.', value: '12345678910' },
          { label: 'GSIS No.', value: '12345678910' },
          { label: 'Instructor Code', value: 'JMDelaSantos' },
        ],
      },
    ],
  };

  const currentAddress = {
    title: 'Current Address',
    content: [
      {
        cell: [
          {
            label: 'Street Address',
            value: address,
            editable: true,
            onChange: (e) => setAddress(e.target.value),
          },
          {
            label: 'Province City',
            value: 'Cabanatuan City',
          },
        ],
      },
      {
        cell: [
          {
            label: 'Zip Code',
            value: '1024',
          },
          {
            label: 'Phone Number',
            value: '(02) 1-2345678',
          },
        ],
      },
    ],
  };

  return (
    <main className='p-6'>
      <div className='mt-12'>
        <h1 className='text-4xl font-medium'>View Profile</h1>
      </div>

      {/* Profile */}
      <div className='flex flex-col shadow border h-auto mt-4 rounded-sm p-6'>
        {/* Personal Details */}
        <DetailsSection data={personalData} setContactNo={setContactNo} />

        {/* Employment Details */}
        <DetailsSection data={employmentDetails} setContactNo={setContactNo} />

        {/* Current Address */}
        <DetailsSection data={currentAddress} setContactNo={setContactNo} />

        <Button className='mt-4 place-self-end'>Save</Button>
      </div>
    </main>
  );
}

export default FacultyProfile;
