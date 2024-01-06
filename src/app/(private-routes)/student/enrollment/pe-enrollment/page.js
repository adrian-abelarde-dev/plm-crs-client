'use client';

import CustomStepper from '@/components/component/stepper';
import CompletedPreview from '@/components/component/student/enrollment/completed-preview';
import EnrollmentHeader from '@/components/component/student/enrollment/header';
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
import { fakeundergradPeEnlistClasses } from '@/lib/constants/fake-data/undergrad-pe-enlist-classes';
import { ungradPeEnlistClassesTemplate } from '@/lib/constants/table-templates/student-undergrad/pe-classes-enlist';
import { Download } from 'lucide-react';
import { useState } from 'react';

function PEStudentEnrollmentPage() {
  const [rowSelection, setRowSelection] = useState({});

  // collects the selected classes
  const enlistedClasses = fakeundergradPeEnlistClasses.filter(
    (item) => rowSelection[item[ungradPeEnlistClassesTemplate[0].accessorKey]],
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
      <EnrollmentHeader />
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
        template={ungradPeEnlistClassesTemplate}
        data={fakeundergradPeEnlistClasses}
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

export default PEStudentEnrollmentPage;
