'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { collegeGradFacultyData } from '@/lib/constants/fake-data/faculty-management';
import { collegeGradFacultyTemplate } from '@/lib/constants/table-templates/college-grad/faculty-management';
import { Printer } from 'lucide-react';
import React, { useState } from 'react';

import EditFacultyDialogForm from './edit-faculty-dialog-form';

function CollageGradManagementFaculty() {
  const [rowSelection, setRowSelection] = useState({});

  // collects the selected faculty data
  const selectedFaculty = collegeGradFacultyData.filter(
    (item) => rowSelection[item[collegeGradFacultyTemplate[0].accessorKey]],
  );

  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeGradFacultyTemplate}
        data={collegeGradFacultyData}
        title='Faculty'
        searchPlaceholder='Search Faculty'
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <>
            <EditFacultyDialogForm
              selectedFaculty={selectedFaculty[0]} // select the first item in the array
              disabled={
                Object.keys(selectedFaculty).length > 1 ||
                Object.keys(selectedFaculty).length === 0
              }
            />

            <Button disabled={Object.keys(selectedFaculty).length > 1}>
              <Printer className='w-4 h-4 mr-2' />
              Print SER
            </Button>
          </>
        }
        RowActions={
          <>
            {/* {collegeGradFacultyRowActions.map((rowAction) => {
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
            })} */}
          </>
        }
      />
    </main>
  );
}

export default CollageGradManagementFaculty;
