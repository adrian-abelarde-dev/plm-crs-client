'use client';

import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  collegeActualCredits,
  collegeInstructionLang,
  collegeLinkType,
  collegeParentClassCode,
  collegeSchoolYears,
  collegeSection,
  collegeSlots,
  collegeYearLevel,
} from '@/lib/constants/fake-data/college-schedule';
import * as React from 'react';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';

function EditSchedClassInformation({ editClassForm }) {
  return (
    <div>
      {/* Class Information */}
      <Label className='font-semibold text-xl pt-4'>Class Information</Label>
      {/* Schedule ID */}
      <InputFormField
        disabled={true}
        form={editClassForm}
        title={<Label className='font-medium text-sm'>Schedule ID</Label>}
        placeholder='CETBSCS0401'
        fieldName='scheduleId'
        badge={<Badge variant='outline'>Auto-generated</Badge>}
      />
      {/* Subject */}
      <InputFormField
        form={editClassForm}
        title={<Label className='font-medium text-sm'>Subject</Label>}
        placeholder='Enter subject'
        fieldName='scheduleSubject'
      />
      {/* Section, Credits, Actual Credits, Alloted Slots */}
      <section className='w-full grid grid-cols-4 gap-2 '>
        {/* Section */}
        <SelectFormField
          form={editClassForm}
          content={collegeSection}
          title={<Label className='font-medium text-sm'>Section</Label>}
          placeholder='1'
          fieldName='scheduleSection'
        />
        {/* Credits */}
        <SelectFormField
          form={editClassForm}
          content={collegeSection}
          title={<Label className='font-medium text-sm'>Credits</Label>}
          placeholder='1'
          fieldName='scheduleCredits'
        />
        {/* Actual Credits */}
        <SelectFormField
          form={editClassForm}
          content={collegeActualCredits}
          title={<Label className='font-medium text-sm'>Actual Credits</Label>}
          placeholder='1'
          fieldName='scheduleActualCredits'
        />
        {/* Alloted Slots */}
        <SelectFormField
          form={editClassForm}
          content={collegeSlots}
          title={<Label className='font-medium text-sm'>Allotted Slots</Label>}
          placeholder='50'
          fieldName='scheduleSlots'
        />
      </section>
      {/* Parent Class Code, Link Type, Instruction Language */}
      <section className='w-full grid grid-cols-3 gap-2 '>
        {/* Parent Class Code */}
        <SelectFormField
          form={editClassForm}
          content={collegeParentClassCode}
          title={
            <Label className='font-medium text-sm'>Parent Class Code</Label>
          }
          placeholder='Enter parent class code'
          fieldName='scheduleParentClassCode'
        />
        {/* Link Type */}
        <SelectFormField
          form={editClassForm}
          content={collegeLinkType}
          title={<Label className='font-medium text-sm'>Link Type</Label>}
          placeholder='Enter link type'
          fieldName='scheduleLinkType'
        />
        {/* Instructional Language */}
        <SelectFormField
          form={editClassForm}
          content={collegeInstructionLang}
          title={
            <Label className='font-medium text-sm'>
              Instructional Language
            </Label>
          }
          placeholder='Enter instructional language'
          fieldName='scheduleInstructionalLang'
        />
      </section>
      {/* Minimum Year Level, AY-SEM, College */}
      <section className='w-full grid grid-cols-3 gap-2 '>
        {/* Minimum Year Level */}
        <SelectFormField
          form={editClassForm}
          content={collegeYearLevel}
          title={
            <Label className='font-medium text-sm'>Minimum Year Level</Label>
          }
          placeholder='Enter minimum year level'
          fieldName='scheduleMinYrLevel'
        />
        {/* AY-SEM */}
        <SelectFormField
          form={editClassForm}
          content={collegeSchoolYears}
          title={<Label className='font-medium text-sm'>AY-SEM</Label>}
          placeholder='20231'
          fieldName='scheduleAYSEM'
        />
        {/* College */}
        <SelectFormField
          form={editClassForm}
          content={collegeSchoolYears}
          title={<Label className='font-medium text-sm'>College</Label>}
          placeholder='Enter AY-SEM'
          fieldName='scheduleCollege'
        />
      </section>
      {/* Is NSTP?, Is instructor concealed? */}
      <section className='w-full grid grid-cols-3 gap-2 '>
        {/* Is NSTP? */}
        <div className='grid grid-cols-1 space-y-2'>
          <div className='flex '>
            <Label className='font-medium text-sm'>Is NSTP?</Label>
            <span className='text-red-500 ml-1'> *</span>
          </div>
          <RadioGroup defaultValues='comfortable'>
            <div className='flex gap-8'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='yes'
                  id='nstpYes'
                  className='text-black'
                />
                <Label htmlFor='nstpYes'>Yes</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='no' id='nstpNo' className='text-black' />
                <Label htmlFor='nstpNo'>No</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Is instructor concealed? */}
        <div className='grid grid-cols-1 space-y-2'>
          <div className='flex '>
            <Label className='font-medium text-sm'>
              Is instructor concealed?
            </Label>
            <span className='text-red-500 ml-1'> *</span>
          </div>
          <RadioGroup defaultValues='comfortable'>
            <div className='flex gap-8'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='yes'
                  id='concealedYes'
                  className='text-black'
                />
                <Label htmlFor='concealedYes'>Yes</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='no'
                  id='concealedNo'
                  className='text-black'
                />
                <Label htmlFor='concealedNo'>No</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </section>
    </div>
  );
}

export default EditSchedClassInformation;
