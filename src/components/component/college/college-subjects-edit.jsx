import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Edit } from 'lucide-react';
import React from 'react';

import CollegeSubjectsEditIndivOrMultiple from './college-subjects-edit-content';

function EditSubjectsUndergrad({
  disabled,
  editIndivMultipleSubjects,
  selectedSubjects,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <Edit className='w-4 h-4 mr-2' />
          Edit
        </Button>
      </DialogTrigger>
      <CollegeSubjectsEditIndivOrMultiple
        editIndivMultipleSubjects={editIndivMultipleSubjects}
        selectedSubjects={selectedSubjects}
      />
    </Dialog>
  );
}

export default EditSubjectsUndergrad;
