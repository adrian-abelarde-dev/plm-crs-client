'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
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
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { facultyNames } from '@/lib/constants/fake-data/college-schedule';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

const faculty = facultyNames.map((facultyName) => ({
  label: facultyName,
  value: facultyName.toLowerCase(),
}));
console.log(faculty);
[];

function AddClassCollegeDialogForm() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Activity</Button>
        </DialogTrigger>
        <DialogContent className='xsm:max-w-[100px]'>
          <DialogHeader>
            <DialogTitle>Add Faculty</DialogTitle>
            <DialogDescription>
              Add a faculty here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-4'>
            {/* Faculty Name */}
            <section className='w-full flex flex-col gap-2'>
              <Label htmlFor='activity-name'>Faculty Name</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className='w-[200px] justify-between'
                  >
                    {value
                      ? faculty.find((framework) => framework.value === value)
                          ?.label
                      : 'Select faculty here...'}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput placeholder='Enter a faculty name...' />
                    <CommandEmpty>No faculty member found.</CommandEmpty>
                    <CommandGroup>
                      {faculty.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? '' : currentValue,
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value === framework.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </section>
          </div>
          <DialogFooter className='w-full flex justify-start'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <div className='justify-between' />
            <Button variant='secondary' type='submit'>
              Add Faculty
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddClassCollegeDialogForm;
