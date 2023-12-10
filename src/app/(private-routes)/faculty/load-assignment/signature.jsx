import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React from 'react';

function Signature({ name, position, withDate }) {
  return (
    <div className='flex gap-4 gap-x-7'>
      <div className='flex flex-col items-center gap-1'>
        <Label className='text-base font-medium'>{name}</Label>
        <Separator className='border-b border-solid border-zinc-500 w-36 mx-auto' />
        <Label className='text-xs'>{position}</Label>
      </div>

      {/* Date --> Optional */}
      {withDate && (
        <div className='flex flex-col items-center gap-1'>
          <Label className='text-base font-medium text-white'>{name}</Label>
          <Separator className='border-b border-solid border-zinc-500 w-36 mx-auto' />
          <Label className='text-xs'>Date</Label>
        </div>
      )}
    </div>
  );
}

export default Signature;
