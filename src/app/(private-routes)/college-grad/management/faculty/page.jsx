'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { collegeGradFacultyData } from '@/lib/constants/fake-data/faculty-management';
import { collegeGradFacultyTemplate } from '@/lib/constants/table-templates/college-grad/faculty-management';
import { Printer } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import EditFacultyDialogForm from './edit-faculty-dialog-form';

function CollageGradManagementFaculty() {
  const [rowSelection, setRowSelection] = useState({});
  const [confirmResult, setConfirmResult] = useState(false);

  useEffect(() => {
    if (confirmResult) {
      console.log(confirmResult);
      // update and handles the status of the deactivated faculty on UI

      // no backend function here; use the confirmFunction prop instead if you wish to modify the backend data
      setConfirmResult(false);
    }
  }, [confirmResult]);

  function exampleAsyncFunction() {
    // sample async function for future reference
    // contents of this function will be the connected to the backend
    return new Promise((resolve, reject) => {
      // Perform asynchronous operations, such as API calls, database queries, etc.
      // Simulating an asynchronous operation using setTimeout
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve('Operation succeeded');
        } else {
          reject('Operation failed');
        }
      }, 1000); // Simulating a delay of 1 second
    });
  }

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
        setConfirmResult={setConfirmResult}
        confirmFunction={() => exampleAsyncFunction()}
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
        RowActions={<></>}
      />
    </main>
  );
}

export default CollageGradManagementFaculty;
