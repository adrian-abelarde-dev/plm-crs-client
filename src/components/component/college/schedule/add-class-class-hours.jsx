'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { fakeCollegeClassHours } from '@/lib/constants/fake-data/college-schedule';
import { fakeCollegeClassHoursTemplate } from '@/lib/constants/table-templates/college/college-schedule-table';
import { HelpCircle } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import AddClassHourDialogForm from './hours-add-class-hours';
import DeleteClassHourDialogForm from './hours-delete-class-hours';
import EditClassHourDialogForm from './hours-edit-class-hours';

function AddSchedClassHours() {
  const [classHourSelection, setClassHourSelection] = useState({});
  return (
    <div>
      {/* Class Hours */}
      <Label className='font-semibold text-xl pt-2'>Class Hours</Label>
      {/* Is the class hours to be announced or unknown yet? */}
      <div className='grid grid-cols-1 space-y-2'>
        <div className='flex gap-8'>
          <div className='flex '>
            <Label className='font-medium text-sm'>
              Is the class hours to be announced or unknown yet?
            </Label>
            <span className='text-red-500 ml-1'> *</span>
          </div>
          <div className='flex'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex mt-1'>
                    <HelpCircle className='h-4 w-4 inline-flex' />
                  </div>
                </TooltipTrigger>
                <TooltipContent className='h-20 w-64 bg-black text-white justify-evenly tooltip-right'>
                  <p className='text-justify'>
                    The University Registrar is appealing to your department to
                    accomplish this part professionally by truthfully stating
                    the room assignment for planning purposes.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <RadioGroup defaultValues='comfortable'>
          <div className='flex gap-8'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='yes' id='tbaYes' className='text-black' />
              <Label htmlFor='tbaYes'>Yes</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='no' id='tbaNo' className='text-black' />
              <Label htmlFor='tbaNo'>No</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
      {/* Class has no definite time and day? */}
      <div className='grid grid-cols-1 mt-4'>
        <div className='flex gap-8 items-center'>
          <div className='flex flex-col'>
            <Label className='font-medium text-sm mb-2'>
              Class has no definite time and day?
              <span className='text-red-500'> *</span>
            </Label>
            <Label className='font-medium text-sm text-zinc-500 pb-4'>
              (e.g. Thesis / Practicum / Field / College of Music)
            </Label>
          </div>
          <div className='flex'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex'>
                    <HelpCircle className='h-4 w-4 inline-flex' />
                  </div>
                </TooltipTrigger>
                <TooltipContent className='h-20 w-64 bg-black text-white justify-evenly tooltip-right'>
                  <p className='text-justify'>
                    The University Registrar is appealing to your department to
                    accomplish this part professionally by truthfully stating
                    the room assignment for planning purposes.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <RadioGroup defaultValues=''>
          <div className='flex gap-8'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='yes'
                id='definiteTimeDayYes'
                className='text-black'
              />
              <Label htmlFor='definiteTimeDayYes'>Yes</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='no'
                id='definiteTimeDayNo'
                className='text-black'
              />
              <Label htmlFor='definiteTimeDayNo'>No</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
      {/* Table for Class Hours*/}
      <TableMRT
        className='pt-2'
        template={fakeCollegeClassHoursTemplate}
        data={fakeCollegeClassHours}
        searchPlaceholder='Search schedule...'
        isCheckBoxVisible={true}
        isFullscreen={false}
        rowSelection={classHourSelection}
        setRowSelection={setClassHourSelection}
        RightButtons={
          <>
            <DeleteClassHourDialogForm
              disabled={
                Object.keys(classHourSelection).length === 0 ||
                Object.keys(classHourSelection).length > 1
              }
            />
            <EditClassHourDialogForm
              disabled={
                Object.keys(classHourSelection).length === 0 ||
                Object.keys(classHourSelection).length > 1
              }
            />
            <AddClassHourDialogForm />
          </>
        }
      />
    </div>
  );
}

export default AddSchedClassHours;
