'use client';

import CustomStepper from '@/components/component/stepper';
import TableMRT from '@/components/layouts/table-mrt';
import { Alert, AlertTitle } from '@/components/ui/alert';
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
  const [paymentType, setPaymentType] = useState('full-payment');
  const totalFee = 10000; // Assuming total fee is 10000 for demonstration

  const calculatePayment = () => {
    let parts;
    if (paymentType === 'full-payment') {
      parts = 1;
    } else {
      // Extracting the number of parts from the paymentType string
      parts = parseInt(paymentType.split('-')[0]);
    }
    return Math.ceil(totalFee / parts);
  };

  const amountToPay = calculatePayment();

  return (
    <div>
      <Alert className='bg-yellow-500 flex justify-center'>
        <AlertTitle className='font-bold text-lg'>
          Choose Type of Payment
        </AlertTitle>
      </Alert>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <div className='border p-4 rounded-lg flex items-center'>
          <input
            type='radio'
            className='form-radio h-5 w-5 text-yellow-600'
            id='full-payment'
            name='paymentType'
            value='full-payment'
            checked={paymentType === 'full-payment'}
            onChange={(e) => setPaymentType(e.target.value)}
          />
          <label htmlFor='full-payment' className='ml-2 text-gray-700'>
            Full Payment
          </label>
        </div>
        {Array.from({ length: 4 }, (_, i) => (
          <div className='border p-4 rounded-lg flex items-center' key={i}>
            <input
              type='radio'
              className='form-radio h-5 w-5 text-yellow-600'
              id={`${i + 2}-partial`}
              name='paymentType'
              value={`${i + 2}-partial`}
              checked={paymentType === `${i + 2}-partial`}
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <label htmlFor={`${i + 2}-partial`} className='ml-2 text-gray-700'>
              {i + 2} - Partial
            </label>
          </div>
        ))}
      </div>
      <div className='mt-6 text-center text-2xl font-semibold'>
        Amount to Pay: <span className='text-yellow-600'>₱{amountToPay}</span>
      </div>
    </div>
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
