import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React from 'react';

function PersonalDetails({ setContactNo, contactNo }) {
  return (
    <>
      {/* Personal Details */}
      <div>
        <h1 className='font-semibold'>Personal Details</h1>
        <Separator className='h-1 bg-yellow-300' />

        {/* Content */}
        {/* 1 */}
        <div className='grid grid-cols-5 mt-4 gap-4 w-full'>
          <div>
            <Label htmlFor='empN'>Employee No.</Label>
            <Input id='empN' disabled value='12345678910' />
          </div>

          <div>
            <Label htmlFor='ln'>Last Name</Label>
            <Input id='ln' disabled value='Dela Santos' />
          </div>

          <div>
            <Label htmlFor='fn'>First Name</Label>
            <Input id='fn' disabled value='John Michael' />
          </div>

          <div>
            <Label htmlFor='mn'>Middle Name</Label>
            <Input id='mn' disabled value='Delimondo' />
          </div>

          <div>
            <Label htmlFor='mn'>Pedigree</Label>
            <Input id='ped' disabled value='Doc' />
          </div>
        </div>

        {/* 2 */}
        <div className='grid grid-cols-3 mt-4 gap-4 w-full'>
          <div>
            <Label htmlFor='birthday'>Birth Date</Label>
            <Input id='birthday' disabled value='12/25/1987' />
          </div>

          <div>
            <Label htmlFor='birthpl'>Birth Place</Label>
            <Input id='birthpl' disabled value='Manila City' />
          </div>

          <div>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              type='email'
              id='email'
              disabled
              value='gmailkoto@gmail.com'
            />
          </div>
        </div>

        {/* 3 */}
        <div className='grid grid-cols-4 mt-4 gap-4 w-full'>
          <div>
            <Label htmlFor='gender'>Gender</Label>
            <Input id='gender' disabled value='12/25/1987' />
          </div>

          <div>
            <Label htmlFor='status'>Status</Label>
            <Input id='status' disabled value='Single' />
          </div>

          <div>
            <Label htmlFor='citizen'>Citizenship</Label>
            <Input id='citizen' disabled value='Manila City' />
          </div>

          <div>
            <Label htmlFor='contactNo'>Contact Number</Label>
            <Input
              type='number'
              id='contactNo'
              onChange={(e) => setContactNo(e.target.value)}
              value={contactNo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
