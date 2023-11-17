'use client';

import CustomStepper from '@/components/component/stepper';
import CompletedPreview from '@/components/component/student/completed-preview';
import TableMRT from '@/components/layouts/table-mrt';
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
import { Download } from 'lucide-react';
import { useState } from 'react';

const viewEnlistedStepHeaders = [
  'Class/Section',
  'Class Title',
  'Schedule',
  'Room',
];

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
      <h1 className='font-medium text-4xl '>Enlist Available Classes</h1>
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
      <h1 className='font-medium text-4xl '>View Enlisted Classes</h1>

      <Table className='w-full mt-10'>
        <TableHeader>
          <TableRow className='font-medium text-black'>
            {viewEnlistedStepHeaders.map((header, index) => {
              return <TableHead key={index}>{header}</TableHead>;
            })}
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

export default IrregStudentEnrollmentPage;
