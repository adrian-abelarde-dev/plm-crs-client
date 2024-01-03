'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Edit } from 'lucide-react';
import * as React from 'react';

import EditClassPrintSched from './print-sched-edit-class';

function PrintSchedUndergrad({ disabled, selectedSched }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          Print List
          <Edit className='w-4 h-4 ml-2' />
        </Button>
      </DialogTrigger>
      <EditClassPrintSched selectedSched={selectedSched} />
    </Dialog>
  );
}

export default PrintSchedUndergrad;
