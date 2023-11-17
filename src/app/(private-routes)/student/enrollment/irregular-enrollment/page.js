'use client';

import CustomStepper from '@/components/component/stepper';
import TableMRT from '@/components/layouts/table-mrt';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeundergradIrregEnlistClasses } from '@/lib/constants/fake-data/undergrad-irreg-enlist-classes';
import { ungradEnlistClassesTemplate } from '@/lib/constants/table-templates/student-undergrad/classes-enlist';
import { CheckCircle, Download } from 'lucide-react';
import { useState } from 'react';

function IrregStudentEnrollmentPage() {
  const [rowSelection, setRowSelection] = useState({});

  // Collects the selected classes
  const enlistedClasses = fakeundergradIrregEnlistClasses.filter(
    (item) => rowSelection[item[ungradEnlistClassesTemplate[0].accessorKey]],
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
      <div className='mt-32 flex flex-col place-items-start'>
        <h1 className='font-medium text-4xl text-left mb-2'>Enrollment</h1>
        <p className='text-zinc-400'>Current School Year / Term</p>
        <p className='mb-10'>School Year 2023 - 2024 1st Trimester</p>
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
        template={ungradEnlistClassesTemplate}
        data={fakeundergradIrregEnlistClasses}
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
      <Label className='font-medium text-4xl '>View Enlisted Classes</Label>

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

function CompletedPreview() {
  const startOfClasses = 'December 25, 1992';

  return (
    <div className='flex flex-col my-[1.88rem] justify-center place-items-center'>
      <CheckCircle className='h-auto w-[100px] mr-2 mb-5 text-green-500' />
      <h1 className='text-4xl font-medium mb-4'>
        You&apos;re Successfully Enrolled!
      </h1>
      <p className='text-center w-[46.875rem]'>
        You&apos;re added to your subject&apos;s MS Teams. The start of classes
        will be on <span className='font-medium'>{startOfClasses}</span>. Please
        download a copy of your SER to be{' '}
        <span className='font-medium'>officially enrolled</span> and be added to
        your subject&apos;s MS teams.
      </p>
    </div>
  );
}

export default IrregStudentEnrollmentPage;
