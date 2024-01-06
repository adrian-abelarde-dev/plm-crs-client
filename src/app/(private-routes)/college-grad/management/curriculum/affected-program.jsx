'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { collegeGradAffectedProgramsData } from '@/lib/constants/fake-data/curriculum-management';
import { collegeGradAffectedProgramsTemplate } from '@/lib/constants/table-templates/college-grad/affected-programs';
import React, { useState } from 'react';

import AddProgramForm from './add-program';

function AffectedProgram() {
  const [curriculumInput, setCurriculumInput] = useState('OKCPTR');

  return (
    <>
      <div className='w-[20rem] mb-10'>
        <Label htmlFor='email'>Search Curriculum</Label>
        <Input
          id='curriculum'
          placeholder='Seach'
          onChange={(e) => setCurriculumInput(e.target.value)}
          value={curriculumInput}
        />
      </div>

      {curriculumInput !== '' ? (
        <TableMRT
          title={curriculumInput.toUpperCase()}
          data={collegeGradAffectedProgramsData}
          template={collegeGradAffectedProgramsTemplate}
          searchPlaceholder={'Search Program'}
          RightButtons={
            <>
              <AddProgramForm curriculum={curriculumInput} />
            </>
          }
        />
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400 '>
          Please search for a Curriculum
        </div>
      )}
    </>
  );
}

export default AffectedProgram;
