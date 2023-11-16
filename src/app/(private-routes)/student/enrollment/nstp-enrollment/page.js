'use client';

import CustomStepper from '@/components/component/stepper';
import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeundergradNSTPEnlistClasses } from '@/lib/constants/fake-data/undergrad-nstp-enlist-classes';
import { ungradNSTPEnlistClassesTemplate } from '@/lib/constants/table-templates/student-undergrad/nstp-classes-enlist';
import { CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

function NstpStudentEnrollmentPage() {
  const [rowSelection, setRowSelection] = useState({});

  // collects the selected classes
  const enlistedClasses = fakeundergradNSTPEnlistClasses.filter(
    (item) =>
      rowSelection[item[ungradNSTPEnlistClassesTemplate[0].accessorKey]],
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
      description: 'View enlisted classes',
      content: <ViewEnlistedStep enlistedClasses={enlistedClasses} />,
    },
  ];
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
      {/* Stepper */}
      <div className='mb-20 '>
        <CustomStepper
          steps={steps}
          lastStepOnclick={() => {}}
          lastStepButtonLabel={
            <>
              <Download className='h-4 w-4 mr-2' /> Download SER
            </>
          }
          completedPreview={<CompletedPreview />}
        />
      </div>
    </div>
  );
}

function EnrollmentStep({ rowSelection, setRowSelection }) {
  return (
    <>
      <Label className='font-medium text-4xl '>Enlist Available Classes</Label>
      <TableMRT
        template={ungradNSTPEnlistClassesTemplate}
        data={fakeundergradNSTPEnlistClasses}
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
    <div className='flex flex-col'>
      <Label className='font-medium text-4xl '>View Enlisted Subjects</Label>

      <Table className='w-full mt-10'>
        <TableHeader>
          <TableRow>
            <TableHead className='font-medium text-black'>
              Class/Section
            </TableHead>
            <TableHead className='font-medium text-black'>
              Class Title
            </TableHead>
            <TableHead className='font-medium text-black'>Schedule</TableHead>
            <TableHead className='font-medium text-black'>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enlistedClasses &&
            enlistedClasses.map((_class, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{_class.classSection}</TableCell>
                  <TableCell>{_class.classTitle}</TableCell>
                  <TableCell>{_class.schedule}</TableCell>
                  <TableCell>{_class.room}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CompletedPreview() {
  const startOfClasses = 'December 25, 1992';

  return (
    <div className='flex flex-col my-[1.88rem] justify-center place-items-center'>
      <CheckCircle className='h-[9.375rem] w-[9.375rem] mr-2 mb-5 text-green-400' />
      <Label className='text-4xl font-bold'>
        You&apos;re Successfully Enrolled!
      </Label>
      <Label className='text-xl font-semibold'>
        and added to your subject&apos;s MS Teams.
      </Label>
      <Label className='text-md mt-4 font-normal'>
        The start of classes will be on{' '}
        <span className='font-bold text-lg'>{startOfClasses}</span>
      </Label>
      <div className='py-5 mt-5 flex justify-center border-0 '>
        <Label className='text-base font-bold mr-1'>NOTE:</Label>
        <Label className='text-base mr-1'>
          Please double check the enlisted classes and then download a copy of
          your
        </Label>
        <Label className='text-base font-bold mr-1'>SER</Label>
        <Label className='text-base mr-1'>to be</Label>
        <Label className='text-base underline mr-1'>officially enrolled</Label>
        <Label className='text-base'>
          and be added to your subject&apos;s MS teams.
        </Label>
      </div>
      <Button className='mt-4' asChild>
        <Link href='/student/home'>Back to Dashboard</Link>
      </Button>
    </div>
  );
}

export default NstpStudentEnrollmentPage;
