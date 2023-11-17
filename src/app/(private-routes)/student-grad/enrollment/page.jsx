'use client';

import CustomStepper from '@/components/component/stepper';
import CompletedPreview from '@/components/component/student/enrollment/completed-preview';
import EnrollmentHeader from '@/components/component/student/enrollment/header';
import TableMRT from '@/components/layouts/table-mrt';
import { Alert, AlertTitle } from '@/components/ui/alert';
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
import { Download } from 'lucide-react';
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
      <EnrollmentHeader />
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
      <h1 className='font-medium text-4xl '>Enlist Available Classes</h1>
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
        <Label className='text-base font-bold'>Type of Payment</Label>
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

export default GradStudentEnrollment;
