'use client';

import CustomStepper from '@/components/component/stepper';
import { Label } from '@/components/ui/label';
import { Download } from 'lucide-react';
import React, { useState } from 'react';

const steps = [
  {
    label: 'First step',
    description: 'Enroll available classes',
    content: <EnrollmentStep />,
  },
  {
    label: 'Second step',
    description: 'Verify email',
    content: <ViewEnlistedStep />,
  },
  {
    label: 'Final step',
    description: 'Get full access',
    content: <PaymentStep />,
  },
];

const GradStudentEnrollment = () => {
  return (
    <div className='mx-9'>
      {/* Header */}
      <div className='mt-32 flex flex-col place-items-center'>
        <div className='place-self-start mb-[1.88rem]'>
          <Label className='font-[500] text-4xl '>Enrollment</Label>
        </div>
        <Label>Current School Year / Term</Label>
        <div className='mb-[1.88rem]'>
          <Label className='font-bold'>
            School Year 2023 - 2024 1st Trimester
          </Label>
        </div>
      </div>
      {/* Stepper */}
      <div className=''>
        <CustomStepper
          steps={steps}
          lastStepOnclick={() => console.log('test')}
          lastStepButtonLabel={
            <>
              <Download className='h-4 w-4 mr-2' /> Download & Finish Enrollment
            </>
          }
        >
          <div className='place-self-start mt-[1.88rem]'>Test</div>
        </CustomStepper>
      </div>
    </div>
  );
};

function EnrollmentStep() {
  return (
    <Label className='font-[500] text-4xl '>Enlist Available Classes</Label>
  );
}

function ViewEnlistedStep() {
  return <Label className='font-[500] text-4xl '>View Enlisted Subjects</Label>;
}

function PaymentStep() {
  return <Label className='font-[500] text-4xl '>Payment</Label>;
}

export default GradStudentEnrollment;
