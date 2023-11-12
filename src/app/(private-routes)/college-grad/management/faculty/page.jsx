'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { collegeGradFacultyData } from '@/lib/constants/fake-data/faculty-management';
import {
  collegeGradFacultyRowActions,
  collegeGradFacultyTemplate,
} from '@/lib/constants/table-templates/college-grad/faculty-management';
import { cn } from '@/lib/utils';
import { Printer } from 'lucide-react';
import React, { useState } from 'react';

function CollageGradManagementFaculty() {
  const [selectedFaculty, setSelectedFaculty] = useState({});

  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeGradFacultyTemplate}
        data={collegeGradFacultyData}
        title='Faculty'
        searchPlaceholder='Search Faculty'
        isCheckBoxVisible={true}
        rowSelection={selectedFaculty}
        setRowSelection={setSelectedFaculty}
        RightButtons={
          <Button disabled={Object.keys(selectedFaculty).length > 1}>
            <Printer className='w-4 h-4 mr-2' />
            Print SER
          </Button>
        }
        RowActions={
          <>
            {collegeGradFacultyRowActions.map((rowAction) => {
              return (
                <Button
                  key={rowAction.label}
                  className={cn(
                    `text-zinc-900 justify-between hover:bg-zinc-100`,
                    // If label includes 'trash' or 'delete' make the text red and icon
                    // color red
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

export default CollageGradManagementFaculty;
