'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Printer } from 'lucide-react';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import ContentLoadAssignment from './load-assignment-content';

function PrintLayoutTeachingAssignment() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Print a Copy
          <Printer className='w-4 h-4 ml-2' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[80vw]'>
        <DialogHeader>
          <DialogTitle>Print Preview</DialogTitle>
          <DialogDescription>
            Please use the print button on the bottom right corner of the
            document to print this page.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className='h-[70vh] w-full'>
          {/* Printable form */}
          <div className='flex flex-col space-x-2' ref={componentRef}>
            <ContentLoadAssignment enablePrintMode />
          </div>
        </ScrollArea>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Cancel
            </Button>
          </DialogClose>

          {/* Print Button */}
          <Button onClick={handlePrint}>
            Print
            <Printer className='w-4 h-4 ml-2' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PrintLayoutTeachingAssignment;
