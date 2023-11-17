'use client';

import CustomStepper from '@/components/component/stepper';
import CompletedPreview from '@/components/component/student/enrollment/completed-preview';
import EnrollmentHeader from '@/components/component/student/enrollment/header';
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

  const irregStudentEnrollmentSteps = [
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
      <EnrollmentHeader />
      {/* Stepper */}
      <div className='mb-20 '>
        <CustomStepper
          steps={irregStudentEnrollmentSteps}
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
    <div className='flex flex-col mt-4'>
      <h1 className='font-medium text-2xl'>View Enlisted Classes</h1>

      <Table className='w-full mt-10'>
        <TableHeader>
          <TableRow>
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
