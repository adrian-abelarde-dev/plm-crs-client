'use client';

import CustomStepper from '@/components/component/stepper';
import TableMRT from '@/components/layouts/table-mrt';
import { Label } from '@/components/ui/label';
import {
  fakeGradEnlistClasses,
  gradEnlistClassesTemplate,
  gradSelectedEnlistClassesTemplate,
} from '@/lib/constants/fake-table-data';
import { Download } from 'lucide-react';
import React, { useState } from 'react';

const GradStudentEnrollment = () => {
  const [rowSelection, setRowSelection] = useState({});

  // collects the selected classes
  const enlistedClasses = fakeGradEnlistClasses.filter(
    (item) => rowSelection[item[gradEnlistClassesTemplate[0].accessorKey]],
  );

  const steps = [
    {
      label: 'First step',
      description: 'Enroll available classes',
      content: (
        <EnrollmentStep
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
        />
      ),
      condition: enlistedClasses.length === 0,
    },
    {
      label: 'Second step',
      description: 'Verify email',
      content: <ViewEnlistedStep enlistedClasses={enlistedClasses} />,
    },
    {
      label: 'Final step',
      description: 'Get full access',
      content: <PaymentStep />,
    },
  ];
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
      <div className='mb-20'>
        <CustomStepper
          steps={steps}
          lastStepOnclick={() => console.log('test')}
          lastStepButtonLabel={
            <>
              <Download className='h-4 w-4 mr-2' /> Download & Finish Enrollment
            </>
          }
        ></CustomStepper>
      </div>
    </div>
  );
};

function EnrollmentStep({ rowSelection, setRowSelection }) {
  return (
    <>
      <Label className='font-[500] text-4xl '>Enlist Available Classes</Label>
      <TableMRT
        template={gradEnlistClassesTemplate}
        data={fakeGradEnlistClasses}
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        searchPlaceholder={'Search Subject'}
      />
    </>
  );
}

function ViewEnlistedStep({ enlistedClasses }) {
  return (
    <>
      <Label className='font-[500] text-4xl '>View Enlisted Subjects</Label>
      <TableMRT
        template={gradSelectedEnlistClassesTemplate}
        data={enlistedClasses}
        searchPlaceholder={'Search Subject'}
      />
    </>
  );
}

function PaymentStep() {
  return (
    <>
      <Label className='font-[500] text-4xl '>Payment</Label>
      {/* <TableMRT template={template} data={fakeCollegeStudents} /> */}
    </>
  );
}

export default GradStudentEnrollment;
