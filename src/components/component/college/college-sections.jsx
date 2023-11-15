'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import {
  fakeSection,
  fakeSectionRowActions,
} from '@/lib/constants/fake-data/college-sections';
import { fakeSectionTemplate } from '@/lib/constants/table-templates/college/college-sections-table';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

import AddSectionUndergrad from './college-sections-add';
import ArchiveSectionUndergrad from './college-sections-archive';
import EditSectionUndergrad from './college-sections-edit';

function CollegeSectionsPage() {
  const [selectedSection, setSelectedSection] = useState({});

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeSectionTemplate}
        data={fakeSection}
        title='Sections'
        description=''
        searchPlaceholder='Search sections...'
        isCheckBoxVisible={true}
        isFullscreen={false}
        rowSelection={selectedSection}
        setRowSelection={setSelectedSection}
        RightButtons={
          <div className='flex gap-2 items-center'>
            <ArchiveSectionUndergrad
              disabled={Object.keys(selectedSection).length === 0}
            />
            <EditSectionUndergrad
              disabled={Object.keys(selectedSection).length === 0}
              onClick={() => console.log('edit')}
            />
            <AddSectionUndergrad />
          </div>
        }
        RowActions={
          <>
            {fakeSectionRowActions.map((rowAction) => {
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

export default CollegeSectionsPage;
