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
  const [rowSelection, setRowSelection] = useState({});
  const selectedSections = fakeSection.filter(
    (item) => setRowSelection[item[fakeSectionTemplate[0].accessorKey]],
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
