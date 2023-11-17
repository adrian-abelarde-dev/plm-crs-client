'use client';

import CustomStepper from '@/components/component/stepper';
import CompletedPreview from '@/components/component/student/completed-preview';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeundergradRegScheduleClasses } from '@/lib/constants/fake-data/undergradRegScheduleClasses';
import { Download } from 'lucide-react';
import { useState } from 'react';

const viewScheduleStepHeaders = [
  'Class/Section',
  'Class Title',
  'Schedule',
  'Room',
];

function UndergradStudentEnrollment() {
  const [rowSelection, setRowSelection] = useState({});

  // Collects the selected classes
  const steps = [
    {
      label: 'First step',
      description: 'View Schedule',
      content: (
        <ViewScheduleStep
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
        />
      ),
    },
    {
      label: 'Second step',
      description: 'View Assessment',
      content: (
        <ViewAssessmentStep enlistedClasses={fakeundergradRegScheduleClasses} />
      ),
    },
    {
      label: 'Final step',
      description: 'Get full access',
      content: <CompletedPreview />,
    },
  ];

  return (
    <>
      {/* Header */}
      <div className='mt-32 flex flex-col place-items-start'>
        <h1 className='font-medium text-4xl text-left mb-2'>Enrollment</h1>
        <p className='text-zinc-400'>Current School Year / Term</p>
        <p className='mb-10'>School Year 2023 - 2024 1st Trimester</p>
      </div>

      {/* Stepper */}
      <div>
        <CustomStepper
          steps={steps}
          lastStepButtonLabel={
            <>
              <Download className='h-4 w-4 mr-2' /> Download SER
            </>
          }
          completedPreview={<CompletedPreview />}
        />
      </div>
    </>
  );
}

function ViewScheduleStep() {
  return (
    <div className='flex flex-col mt-4'>
      <h1 className='font-medium text-2xl'>View Enlisted Subjects</h1>

      <Table className='w-full mt-4'>
        <TableHeader className='font-medium text-black'>
          <TableRow>
            {viewScheduleStepHeaders.map((header, index) => {
              return <TableHead key={index}>{header}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeundergradRegScheduleClasses.map((_class, index) => {
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

function ViewAssessmentStep() {
  const [selectedAysem, setSelectedAysem] = useState();

  const aysem = [
    {
      aysem: 20201,
    },
    {
      aysem: 20202,
    },
    {
      aysem: 20211,
    },
    {
      aysem: 20212,
    },
    {
      aysem: 20221,
    },
  ];

  return (
    <div className='mb-20 mr-9 2xl:mr-0'>
      <div className='flex  max-md:block justify-between mt-4'>
        <div className='w-full'>
          <Select onValueChange={setSelectedAysem} defaultValue={selectedAysem}>
            <Label className='font-bold'>AY/SEM</Label>
            <SelectTrigger>
              <SelectValue
                className='text-zinc-400'
                placeholder='Select AY/SEM'
              />
            </SelectTrigger>

            <SelectContent>
              {aysem.map((year, index) => {
                return (
                  <SelectItem key={index} value={year.aysem}>
                    {year.aysem}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='bg-yellow-500 flex justify-center mt-12 p-4 rounded-md'>
        This space is for Enrollment Assessment Form
      </div>
    </div>
  );
}

export default UndergradStudentEnrollment;
