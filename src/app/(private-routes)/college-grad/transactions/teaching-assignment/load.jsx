import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { computeLoads } from '@/lib/utils';

function Load({ label, loadType, subjects }) {
  return (
    <div className='flex justify-between place-items-center py-3 px-2 border rounded-md'>
      <div className='mr-10'>
        <Label className='pr-10 font-bold'>{label}</Label>
      </div>

      <Button variant='outline' className='cursor-context-menu'>
        {computeLoads('creditedUnits', subjects, loadType)}
      </Button>
    </div>
  );
}

export default Load;
