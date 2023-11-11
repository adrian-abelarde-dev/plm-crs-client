import { Label } from '@/components/ui/label';
import React from 'react';

const GradStudentGrades = () => {
  return (
    <div className='mx-9'>
      {/* Header */}
      <div className='mt-32 flex flex-col place-items-center'>
        <div className='place-self-start mb-[1.88rem]'>
          <Label className='font-medium text-4xl '>Enrollment</Label>
        </div>
        <Label>Current School Year / Term</Label>
        <div className='mb-[1.88rem]'>
          <Label className='font-bold'>
            School Year 2023 - 2024 1st Trimester
          </Label>
        </div>
      </div>

      {/* Grades Table */}
      <div className='mb-20 '></div>
    </div>
  );
};

export default GradStudentGrades;
