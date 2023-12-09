import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';

function DeleteClassHourDialogForm({ disabled }) {
  return (
    <Button
      variant='outline'
      disabled={disabled}
      className='bg-red-500 text-white'
    >
      Delete
      <Delete className='ml-2 h-4 w-4 text-white' />
    </Button>
  );
}

export default DeleteClassHourDialogForm;
