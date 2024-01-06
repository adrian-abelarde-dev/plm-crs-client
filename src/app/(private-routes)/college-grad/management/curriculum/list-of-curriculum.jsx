'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { collegeGradCurriculumManagementData } from '@/lib/constants/fake-data/curriculum-management';
import { collegeGradCurriculumManagementTemplate } from '@/lib/constants/table-templates/college-grad/curriculum-management';
import { CheckCircle, Trash } from 'lucide-react';
import React, { useState } from 'react';

import AddCourseForm from './add-course';

function ListOfCurriculums() {
  const [curriculumInput, setCurriculumInput] = useState('');

  async function deleteCurriculum() {
    setCurriculumInput('');

    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Curriculum has been deleted.</>,
    });
  }

  return (
    <>
      <div className='w-[20rem] mb-10'>
        <Label htmlFor='email'>Search Curriculum</Label>
        <Input
          id='curriculum'
          placeholder='Search'
          onChange={(e) => setCurriculumInput(e.target.value)}
          value={curriculumInput}
        />
      </div>

      {curriculumInput !== '' ? (
        <TableMRT
          title={curriculumInput.toUpperCase()}
          data={collegeGradCurriculumManagementData}
          template={collegeGradCurriculumManagementTemplate}
          searchPlaceholder={'Search Course'}
          RightButtons={
            <>
              <AlertConfirmModal
                label={
                  <Button
                    className='text-zinc-900 justify-between hover:bg-zinc-100'
                    variant='outline'
                  >
                    <Trash className='w-4 h-4 mr-2' />
                    Delete Curriculum
                  </Button>
                }
                title='Are you sure?'
                description='Once deleted, curriculum will be deleted.'
                cancelLabel='Cancel'
                confirmLabel='Delete Curriculum'
                confirmFunction={deleteCurriculum}
              />

              <AddCourseForm curriculum={curriculumInput} />
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

export default ListOfCurriculums;
