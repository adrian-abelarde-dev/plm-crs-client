'use client';

import CustomStepper from '@/components/component/stepper';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
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
import { CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

function UndergradStudentEnrollment() {
  const [rowSelection, setRowSelection] = useState({});

  // collects the selected classes

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

function ViewScheduleStep() {
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
        <div className='w-[20rem] max-md:w-full'>
          <Select onValueChange={setSelectedAysem} defaultValue={selectedAysem}>
            <Label className='font-bold'>AY/SEM</Label>

            <SelectTrigger>
              <SelectValue
                placeholder={<Label className='text-zinc-400'>Select</Label>}
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
      <Alert className='bg-yellow-500 flex justify-center mt-12'>
        <AlertTitle className='font-bold text-lg'>
          This space is for Enrollment Assessment Form
        </AlertTitle>
      </Alert>
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
        <Label className='text-base mr-1'>Please download a copy of your</Label>
        <Label className='text-base font-bold mr-1'>SER</Label>
        <Label className='text-base mr-1'>to be</Label>
        <Label className='text-base underline mr-1'>officially enrolled</Label>
        <Label className='text-base'>
          and be added to your subject’s MS teams.
        </Label>
      </div>
      <Button className='mt-4' asChild>
        <Link href='/student-grad'>Back to Dashboard</Link>
      </Button>
    </div>
  );
}

export default UndergradStudentEnrollment;
