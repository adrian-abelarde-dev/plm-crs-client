import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

function PrintSchedUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <Edit className='w-4 h-4 mr-2' />
      Print List
    </Button>
  );
}

export default PrintSchedUndergrad;
