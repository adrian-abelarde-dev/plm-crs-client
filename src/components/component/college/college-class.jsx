'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { fakeCollegeSchedule } from '@/lib/constants/fake-data/college-schedule';
import { ArchiveIcon, Edit } from 'lucide-react';

function CollegeSchedulePage() {
  function DepartmentFilterUndergrad() {
    return (
      <Button
        className='text-zinc-900 justify-between hover:bg-zinc-100'
        variant='outline'
      >
        Department
      </Button>
    );
  }

  function AcadYearFilterUndergrad() {
    return (
      <Button
        className='text-zinc-900 justify-between hover:bg-zinc-100'
        variant='outline'
      >
        Academic Year
      </Button>
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
