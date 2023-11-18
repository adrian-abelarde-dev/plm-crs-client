import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

function PrintSchedUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      Print List
      <Edit className='w-4 h-4 ml-2' />
    </Button>
  );
}

export default PrintSchedUndergrad;
