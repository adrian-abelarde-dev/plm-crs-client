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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { collegeDepartments } from '@/lib/constants/fake-data/college-schedule';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

function DepartmentFilterUndergrad() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value
            ? collegeDepartments.find(
                (collegeDepartment) => collegeDepartment.value === value,
              )?.label
            : 'Department'}
          <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search department...' />
          <CommandEmpty>No department found.</CommandEmpty>
          <CommandGroup>
            {collegeDepartments.map((collegeDepartment) => (
              <CommandItem
                key={collegeDepartment.value}
                value={collegeDepartment.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === collegeDepartment.value
                      ? 'opacity-100'
                      : 'opacity-0',
                  )}
                />
                {collegeDepartment.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default DepartmentFilterUndergrad;
