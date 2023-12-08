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
import { Check, ChevronsUpDown, Edit } from 'lucide-react';
import React from 'react';

function EditFacultyDialogForm({ disabled }) {
  const faculty = facultyNames.map((facultyName) => ({
    label: facultyName,
    value: facultyName.toLowerCase(),
  }));

  console.log(faculty);
  [];
  const [open, setOpen] = React.useState();
  const [value, setValue] = React.useState('');

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' disabled={disabled}>
            Edit
            <Edit className='ml-2 h-4 w-4' />
          </Button>
        </DialogTrigger>
        <DialogContent className='xsm:max-w-[100px]'>
          <DialogHeader>
            <DialogTitle>Edit Faculty</DialogTitle>
            <DialogDescription>Edit existing faculty.</DialogDescription>
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
                    className='w-full justify-between'
                  >
                    {value
                      ? faculty.find((framework) => framework.value === value)
                          ?.label
                      : 'Select faculty here...'}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-full p-0'>
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
          <DialogFooter className='w-full flex justify-evenly'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <div className='justify-between' />
            <Button type='submit'>Edit Faculty</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditFacultyDialogForm;
