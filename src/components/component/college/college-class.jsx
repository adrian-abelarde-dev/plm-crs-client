'use client';

import TableMRT from '@/components/layouts/table-mrt';
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
import { fakeCollegeSchedule } from '@/lib/constants/fake-data/college-schedule';
import { cn } from '@/lib/utils';
import { ArchiveIcon, Check, ChevronDown, Edit } from 'lucide-react';
import * as React from 'react';

export const collegeDepartments = [
  {
    value: 'coe',
    label: 'COE',
  },
  {
    value: 'plmbs',
    label: 'PLMBS',
  },
  {
    value: 'chass',
    label: 'CHASS',
  },
  {
    value: 'cet',
    label: 'CET',
  },
  {
    value: 'caup',
    label: 'CAUP',
  },
  {
    value: 'cs',
    label: 'CS',
  },
  {
    value: 'cn',
    label: 'CN',
  },
  {
    value: 'cpt',
    label: 'CPT',
  },
];

export const collegeSchoolYears = [
  {
    value: '20201',
    label: '2020 1st Semester',
  },
  {
    value: '20202',
    label: '2020 2nd Semester',
  },
  {
    value: '20211',
    label: '2021 1st Semester',
  },
  {
    value: '20212',
    label: '2021 2nd Semester',
  },
  {
    value: '20221',
    label: '2022 1st Semester',
  },
  {
    value: '20222',
    label: '2022 2nd Semester',
  },
];

function CollegeSchedulePage() {
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

  function AcadYearFilterUndergrad() {
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
              ? collegeSchoolYears.find(
                  (collegeSchoolYear) => collegeSchoolYear.value === value,
                )?.label
              : 'Academic Year'}
            <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search academic year...' />
            <CommandEmpty>No academic year found.</CommandEmpty>
            <CommandGroup>
              {collegeSchoolYears.map((collegeSchoolYear) => (
                <CommandItem
                  key={collegeSchoolYear.value}
                  value={collegeSchoolYear.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === collegeSchoolYear.value
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {collegeSchoolYear.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }

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

  function PrintSchedUndergrad() {
    return (
      <Button
        className='text-zinc-900 justify-between hover:bg-zinc-100'
        variant='outline'
      >
        <Edit className='w-4 h-4 mr-2' />
        Print List
      </Button>
    );
  }

  function AddClassUndergrad() {
    return <Button>Add Class</Button>;
  }

  const fakeCollegeScheduleTemplate = [
    {
      accessorKey: 'schedName',
      id: 'schedName',
      header: 'Schedule',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'schedSubject',
      id: 'schedSubject',
      header: 'Subject',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'schedSection',
      id: 'schedSection',
      header: 'Section At',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'schedSlots',
      id: 'schedSlots',
      header: 'Slots',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeCollegeScheduleTemplate}
        data={fakeCollegeSchedule}
        title='Class'
        description=''
        searchPlaceholder='Search subject...'
        isCheckBoxVisible={true}
        isFullscreen={false}
        LeftButtons={
          <>
            <DepartmentFilterUndergrad />
            <AcadYearFilterUndergrad />
          </>
        }
        RightButtons={
          <>
            <ArchiveSchedUndergrad />
            <PrintSchedUndergrad />
            <AddClassUndergrad />
          </>
        }
      />
    </main>
  );
}

export default CollegeSchedulePage;
