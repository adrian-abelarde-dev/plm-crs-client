'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import {
  fakeSection,
  fakeSectionRowActions,
} from '@/lib/constants/fake-data/college-sections';
import { fakeSectionTemplate } from '@/lib/constants/table-templates/college/college-sections-table';
import { cn, handleRowSelectionChange } from '@/lib/utils';
import React, { useState } from 'react';

import AddSectionUndergrad from './sections/add-sections';
import ArchiveSectionUndergrad from './sections/archive-sections';
import EditSectionUndergrad from './sections/edit-sections';

function CollegeSectionsPage() {
  const [rowSelection, setRowSelection] = useState({});

  const selectedSections = handleRowSelectionChange(
    fakeSection,
    fakeSectionTemplate,
    rowSelection,
  );

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeSectionTemplate}
        data={fakeSection}
        title='Sections'
        searchPlaceholder='Search sections...'
        isCheckBoxVisible={true}
        isFullscreen={false}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <div className='flex gap-2 items-center'>
            <ArchiveSectionUndergrad
              disabled={Object.keys(rowSelection).length === 0}
            />
            <EditSectionUndergrad
              disabled={Object.keys(rowSelection).length === 0}
              editIndivMultipleSections={Object.keys(rowSelection).length}
              selectedSections={selectedSections}
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
