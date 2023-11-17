import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

function EditFacultyDialogForm() {
  return (
    <Button variant='outline'>
      Edit
      <Edit className='ml-2 h-4 w-4' />
    </Button>
  );
}

export default EditFacultyDialogForm;
