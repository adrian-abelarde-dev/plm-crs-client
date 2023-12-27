'use client';

import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  collegeParentClassCode,
  collegeSchoolYears,
  collegeSection,
  collegeSlots,
  collegeYearLevel,
} from '@/lib/constants/fake-data/college-schedule';
import * as React from 'react';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';

function AddSchedClassInfo({ addClassForm }) {
  return (
    <div>
      {/* Class Information */}
      <h1 className='font-semibold text-xl pt-4'>Class Information</h1>

      {/* Schedule ID, Subject */}
      <section className='w-full grid lg:grid-cols-2 lg:gap-2 '>
        {/* Schedule ID */}
        <InputFormField
          disabled={true}
          form={addClassForm}
          title={<Label className='font-medium text-sm'>Schedule ID</Label>}
          placeholder='CETBSCS0401'
          fieldName='scheduleId'
          badge={<Badge variant='outline'>Auto-generated</Badge>}
        />
        {/* Subject */}
        <InputFormField
          form={addClassForm}
          title={<Label className='font-medium text-sm'>Subject</Label>}
          placeholder='Enter subject'
          fieldName='scheduleSubject'
        />
      </section>

      {/* Section, Credits, Alloted Slots */}
      <section className='w-full grid lg:grid-cols-3 lg:gap-2 '>
        {/* Section */}
        <SelectFormField
          form={addClassForm}
          content={collegeSection}
          title={<Label className='font-medium text-sm'>Section</Label>}
          placeholder='1'
          fieldName='scheduleSection'
        />
        {/* Credits */}
        <SelectFormField
          form={addClassForm}
          content={collegeSection}
          title={<Label className='font-medium text-sm'>Credits</Label>}
          placeholder='1'
          fieldName='scheduleCredits'
        />
        {/* Alloted Slots */}
        <SelectFormField
          form={addClassForm}
          content={collegeSlots}
          title={<Label className='font-medium text-sm'>Allotted Slots</Label>}
          placeholder='1'
          fieldName='scheduleSlots'
        />
      </section>
      {/* Parent Class Code */}
      <SelectFormField
        form={addClassForm}
        content={collegeParentClassCode}
        title={<Label className='font-medium text-sm'>Parent Class Code</Label>}
        placeholder='Enter parent class code'
        fieldName='scheduleParentClassCode'
      />
      {/* Minimum Year Level, AY-SEM, College */}
      <section className='w-full grid lg:grid-cols-3 lg:gap-2 '>
        {/* Minimum Year Level */}
        <SelectFormField
          form={addClassForm}
          content={collegeYearLevel}
          title={
            <Label className='font-medium text-sm'>Minimum Year Level</Label>
          }
          placeholder='Enter minimum year level'
          fieldName='scheduleMinYrLevel'
        />
        {/* AY-SEM */}
        <SelectFormField
          disabled={true}
          form={addClassForm}
          content={collegeSchoolYears}
          title={<Label className='font-medium text-sm'>AY-SEM</Label>}
          placeholder='20231'
          fieldName='scheduleAYSEM'
        />
        {/* College */}
        <SelectFormField
          form={addClassForm}
          content={collegeSchoolYears}
          title={<Label className='font-medium text-sm'>College</Label>}
          placeholder='Enter AY-SEM'
          fieldName='scheduleCollege'
        />
      </section>
    </div>
  );
}
export default AddSchedClassInfo;
