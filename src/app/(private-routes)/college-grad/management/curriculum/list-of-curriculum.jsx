'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { collegeGradCurriculumManagementData } from '@/lib/constants/fake-data/curriculum-management';
import { collegeGradCurriculumManagementTemplate } from '@/lib/constants/table-templates/college-grad/curriculum-management';
import { testPromise } from '@/lib/utils';
import { CheckCircle, Plus, Trash, XCircle } from 'lucide-react';
import React, { useState } from 'react';

function ListOfCurriculums() {
  const [curriculumInput, setCurriculumInput] = useState('OKCPTR');

  async function sampleConfirmFunction(id) {
    try {
      const result = await testPromise(id);

      if (result) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <Label>Success!</Label>
            </div>
          ),
          description: <>Changes have been Saved.</>,
        });
      }
    } catch (error) {
      console.error({ error });

      toast({
        title: (
          <div className='flex flex-row'>
            <XCircle className='mr-2 h-4 w-4 text-red-400' />
            <Label>Error!</Label>
          </div>
        ),
        description: <>Error saving your data</>,
      });
    }
  }

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
          placeholder='Seach'
          onChange={(e) => setCurriculumInput(e.target.value)}
          value={curriculumInput}
        />
      </div>

      {curriculumInput !== '' ? (
        <TableMRT
          title={curriculumInput}
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
                title='Are you sure you want to set the status to pending?'
                description='Once deactivated, all users account will be deactivated.'
                cancelLabel='Cancel'
                confirmLabel='Deactivate'
                confirmFunction={deleteCurriculum}
              />

              <Button>
                <Plus className='w-4 h-4 mr-2' />
                Add Subject
              </Button>
            </>
          }
          renderRowActionMenuItems={({ row }) => {
            const selectedId =
              row.original[
                collegeGradCurriculumManagementTemplate[0].accessorKey
              ]; // first column is required to be the id

            return (
              <div className='flex flex-col w-[14.75rem] z-10'>
                <Label className='my-[0.62rem] ml-4 font-bold'>Actions</Label>
                <AlertConfirmModal
                  label='Deactivate'
                  title='Are you sure you want to set the status to pending?'
                  description='Once deactivated, all users account will be deactivated.'
                  cancelLabel='Cancel'
                  confirmLabel='Deactivate'
                  confirmFunction={() => sampleConfirmFunction(selectedId)}
                />
              </div>
            );
          }}
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
