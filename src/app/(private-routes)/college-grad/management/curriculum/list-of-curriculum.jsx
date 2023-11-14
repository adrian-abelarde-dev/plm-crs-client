'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { collegeGradCurriculumManagementData } from '@/lib/constants/fake-data/curriculum-management';
import { collegeGradCurriculumManagementTemplate } from '@/lib/constants/table-templates/college-grad/curriculum-management';
import React, { useState } from 'react';

function ListOfCurriculums() {
  const [curriculumInput, setCurriculumInput] = useState('');

  return (
    <>
      <div className='w-[20rem]'>
        <Label htmlFor='email'>Search Curriculum</Label>
        <Input
          id='curriculum'
          placeholder='Seach'
          onChange={(e) => setCurriculumInput(e.target.value)}
        />
      </div>

      {curriculumInput !== '' ? (
        <TableMRT
          title={curriculumInput}
          data={collegeGradCurriculumManagementData}
          template={collegeGradCurriculumManagementTemplate}
        />
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400 '>
          Please search for a Curriculum
        </div>
      )}
    </>
  );
}

export default ListOfCurriculums;
