import { Button } from '@/components/ui/button';
import { ArchiveIcon } from 'lucide-react';

function ArchiveSchedUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <ArchiveIcon className='w-4 h-4 mr-2' />
      Archive
    </Button>
  );
}

export default ArchiveSchedUndergrad;
