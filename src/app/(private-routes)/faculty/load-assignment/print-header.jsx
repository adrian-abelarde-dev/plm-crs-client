import { Label } from '@/components/ui/label';
import React from 'react';

// ? can be used as a header for printables, etc.
// TODO: Modify the code to enable logos for both sides.
// TODO: Logo should be hidden if logo prop is empty --> leftLogo && rightLogo
function PrintHeader({ college }) {
  return (
    <div className='mt-4 flex flex-col place-items-center gap-1'>
      <Label className='text-base font-bold'>
        PAMANTASAN NG LUNGSOD NG MAYNILA
      </Label>
      <Label className='text-xs italic'>
        (University of the City of Manila)
      </Label>
      <Label className='text-xs'>Intramuros, Manila</Label>
      <Label className='pt-4 text-base font-bold'>{college}</Label>
    </div>
  );
}

export default PrintHeader;
