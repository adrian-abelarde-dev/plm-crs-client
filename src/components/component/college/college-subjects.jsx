'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  fakeSubjectRowActions,
  fakeSubjects,
} from '@/lib/constants/fake-data/college-subjects';
import { cn } from '@/lib/utils';
import { ArchiveIcon, Edit } from 'lucide-react';

function ArchiveSubjectsUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <ArchiveIcon className='inline-block w-4 h-4 mr-2' />
      Archive
    </Button>
  );
}

function EditSubjectsUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <Edit className='inline-block w-4 h-4 mr-2 justify-between' />
      Edit
    </Button>
  );
}

function AddSubjectsUndergrad() {
  return (
    <Button className='bg border-black justify-between'>Add Subject</Button>
  );
}

function CollegeSubjectsPage() {
  const fakeSubjectTemplate = [
    {
      accessorKey: 'subjectName',
      id: 'subjectName',
      header: 'Subject',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'underGrad',
      id: 'underGrad',
      header: 'Type',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'subjectType',
      id: 'subjectType',
      header: 'Subject Type',
      filterVariant: 'fuzzy',
      Cell: ({ cell }) => {
        return (
          <Badge
            variant={
              cell.getValue() === 'Synchronous' ? 'outlinePrimary' : 'outline'
            }
          >
            {cell.getValue()}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'activeStatus',
      id: 'activeStatus',
      header: 'Active Status',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'dateCreated',
      id: 'dateCreated',
      header: 'Created At',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <TableMRT
      template={fakeSubjectTemplate}
      data={fakeSubjects}
      title='Subjects'
      description=''
      searchPlaceholder='Search subjects...'
      isCheckBoxVisible={true}
      RightButtons={
        <>
          <ArchiveSubjectsUndergrad />
          <EditSubjectsUndergrad />
          <AddSubjectsUndergrad />
        </>
      }
      RowActions={
        <>
          {fakeSubjectRowActions.map((rowAction) => {
            return (
              <Button
                key={rowAction.label}
                className={cn(
                  `text-zinc-900 justify-between hover:bg-zinc-100`,
                  (rowAction.label.toLowerCase().includes('trash') ||
                    rowAction.label.toLowerCase().includes('delete')) &&
                    'text-destructive hover:text-red-400',
                )}
                variant='ghost'
              >
                {rowAction.label}
                {rowAction.icon}
              </Button>
            );
          })}
        </>
      }
    />
  );
}

export default CollegeSubjectsPage;
