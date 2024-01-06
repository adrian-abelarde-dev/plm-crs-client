import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

import MultipleIndivIrregRegEnlistment from './enlistment-logic';

function EnlistStudentUndergrad({ disabled, enlistStudents, selectedStudent }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
        >
          <Plus className='w-4 h-4 mr-2' />
          Enlist
        </Button>
      </DialogTrigger>
      <MultipleIndivIrregRegEnlistment
        enlistStudents={enlistStudents}
        selectedStudent={selectedStudent}
      />
    </Dialog>
  );
}

export default EnlistStudentUndergrad;
