'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import {
  fakeSubjectRowActions,
  fakeSubjects,
} from '@/lib/constants/fake-data/college-subjects';
import '@/lib/constants/schema/user';
import { fakeSubjectTemplate } from '@/lib/constants/table-templates/college/college-subjects-table';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

import AddSubjectsUndergrad from './college-subjects-add';
import ArchiveSubjectsUndergrad from './college-subjects-archive';
import EditSubjectsUndergrad from './college-subjects-edit';

function CollegeSubjectsPage() {
  const [rowSelection, setRowSelection] = useState({});

  const selectedSubjects = fakeSubjects.filter(
    (item) => setRowSelection[item[fakeSubjectTemplate[0].accessorKey]],
  );

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeSubjectTemplate}
        data={fakeSubjects}
        title='Subjects'
        searchPlaceholder='Search subjects...'
        isCheckBoxVisible={true}
        isFullscreen={false}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <div className='flex gap-2 items-center'>
            <ArchiveSubjectsUndergrad
              disabled={Object.keys(rowSelection).length === 0}
            />
            <EditSubjectsUndergrad
              disabled={Object.keys(rowSelection).length === 0}
              editIndivMultipleSubjects={Object.keys(rowSelection).length}
              selectedSubjects={selectedSubjects}
            />
            <AddSubjectsUndergrad />
          </div>
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
    </main>
  );
}

export default CollegeSubjectsPage;
