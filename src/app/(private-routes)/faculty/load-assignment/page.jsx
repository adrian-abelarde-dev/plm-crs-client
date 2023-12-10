import { Label } from '@/components/ui/label';
import React from 'react';

import ContentLoadAssignment from './load-assignment-content';

function FacultyLoadAssignment() {
  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>
          Current Teaching Assignment
        </Label>
      </div>

      <ContentLoadAssignment />
    </main>
  );
}

export default FacultyLoadAssignment;
