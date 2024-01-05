import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Edit } from 'lucide-react';

import CollegeStudentsEditIndivOrMultiple from './college-update-logic';

function UpdateStudentUndergrad({
  disabled,
  updateIndivMultipleStudents,
  selectedStudent,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
        >
          <Edit className='w-4 h-4 mr-2' />
          Update
        </Button>
      </DialogTrigger>
      <CollegeStudentsEditIndivOrMultiple
        updateIndivMultipleStudents={updateIndivMultipleStudents}
        selectedStudent={selectedStudent}
      />
    </Dialog>
  );
}

export default UpdateStudentUndergrad;
