import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Printer } from 'lucide-react';
import React from 'react';

import PrintHeader from './print-header';

function FacultyLoadAssignment() {
  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>Teaching Assignment</Label>
      </div>

      <PrintHeader college={'COLLEGE OF ENGINEERING'} />

      <div className='mt-4 flex flex-col place-items-center gap-1'>
        <Label className='font-semibold'>TEACHING ASSIGNMENTS</Label>
        <Label className='font-normal'>1st Sem A.Y. 2023-2024</Label>
      </div>

      <div className='flex justify-between mt-6'>
        {/* Faculty Name */}
        <div className='flex flex-col gap-1'>
          <Label className='font-bold text-lg underline'>Thom Yorke</Label>
          <Label className='font-normal italic indent-4'>
            This college has considered you to teach the following subject(s)
            for the stipulated term.
          </Label>
        </div>

        <Button>
          Print a Copy
          <Printer className='w-4 h-4 ml-2' />
        </Button>
      </div>
    </main>
  );
}

export default FacultyLoadAssignment;
