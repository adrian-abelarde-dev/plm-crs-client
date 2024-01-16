import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';

function DeleteFacultyDialogForm({ disabled }) {
  return (
    <Button
      variant='outline'
      disabled={disabled}
      className='bg-red-500 text-white hover:bg-red-500/80 hover:text-white'
    >
      Archive
      <Delete className='ml-2 h-4 w-4 text-white hover:bg-red-500/80' />
    </Button>
  );
}

export default DeleteFacultyDialogForm;
