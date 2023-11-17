import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';

function DeleteFacultyDialogForm() {
  return (
    <Button variant='outline'>
      Delete
      <Delete className='ml-2 h-4 w-4' />
    </Button>
  );
}

export default DeleteFacultyDialogForm;
