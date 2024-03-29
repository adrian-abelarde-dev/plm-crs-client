'use client';

import CustomStepper from '@/components/component/stepper';
import TableMRT from '@/components/layouts/table-mrt';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeGradEnlistClasses } from '@/lib/constants/fake-data/grad-enlist-classes';
import { gradEnlistClassesTemplate } from '@/lib/constants/table-templates/student-grad/enlist-available-classes';
import { CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function GradStudentEnrollment() {
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
          <h1 className='font-medium text-4xl '>Enrollment</h1>
        </div>
        <h1>Current School Year / Term</h1>
        <div className='mb-[1.88rem]'>
          <h1 className='font-bold'>School Year 2023 - 2024 1st Trimester</h1>
        </div>
      </div>
      {/* Stepper */}
      <div className='mb-20 '>
        <CustomStepper
          steps={steps}
          lastStepOnclick={() => {}}
          lastStepButtonLabel={
            <>
              <Download className='h-4 w-4 mr-2' /> Download & Finish Enrollment
            </>
          }
          completedPreview={<CompletedPreview />}
        ></CustomStepper>
      </div>
    </div>
  );
}

function EnrollmentStep({ rowSelection, setRowSelection }) {
  return (
    <>
      <Label className='font-medium text-4xl '>Enlist Available Classes</Label>
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
    <div className='flex flex-col'>
      <h1 className='font-medium text-4xl '>View Enlisted Subjects</h1>

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
          {enlistedClasses.map((_class, index) => {
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

function PaymentStep() {
  return (
    <>
      <Alert className='bg-yellow-500 flex justify-center'>
        <AlertTitle className='font-bold text-lg'>
          Choose Type of Payment and Print EAF (Enrollment Assessment Form)
        </AlertTitle>
      </Alert>

      <div className='py-5 mt-5 flex justify-center border rounded-t-md'>
        <h1 className='text-base font-bold'>Type of Payment</h1>
      </div>

      <RadioGroup className='border rounded-b-md border-t-0 flex justify-around py-5'>
        <div className='flex items-center space-x-2 p-4 rounded-2xl border-yellow-400 border-2'>
          <RadioGroupItem value='onsitePayment' id='onsitePayment' />
          <Label htmlFor='onsitePayment'>Onsite Payment</Label>
        </div>
        <div className='flex items-center space-x-2 p-4 rounded-2xl border-yellow-400 border-2'>
          <RadioGroupItem value='linkBiz' id='linkBiz' />
          <Label htmlFor='linkBiz'>Pay with LinkBiz</Label>
        </div>
      </RadioGroup>
    </>
  );
}

function CompletedPreview() {
  const startOfClasses = 'December 25, 1992';

  return (
    <div className='flex flex-col my-[1.88rem] justify-center place-items-center'>
      <CheckCircle className='h-[9.375rem] w-[9.375rem] mr-2 mb-5 text-green-400' />
      <h1 className='text-4xl font-bold'>You&apos;re Successfully Enlisted!</h1>
      <h1 className='text-xl font-semibold'>
        and added to your subject&apos;s MS Teams.
      </h1>
      <h1 className='text-md mt-4 font-normal'>
        The start of classes will be on{' '}
        <span className='font-bold text-lg'>{startOfClasses}</span>
      </h1>

      <Button className='mt-4' asChild>
        <Link href='/student-grad'>Back to Dashboard</Link>
      </Button>
    </div>
  );
}

export default GradStudentEnrollment;
