import { Button } from '@/components/ui/button';
import { ArchiveIcon } from 'lucide-react';

function ArchiveSubjectsUndergrad({ disabled }) {
  return (
    <Button
      disabled={disabled}
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <ArchiveIcon className='inline-block w-4 h-4 mr-2' />
      Archive
    </Button>
  );
}

export default ArchiveSubjectsUndergrad;
