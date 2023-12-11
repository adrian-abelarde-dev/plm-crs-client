import { Label } from '@/components/ui/label';
import React from 'react';

function GradesCourseView({ params }) {
  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>Encoding of Grades</Label>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <Label className='text-lg font-semibold'>REPORT OF GRADES</Label>
      </div>
    </main>
  );
}

export default GradesCourseView;
