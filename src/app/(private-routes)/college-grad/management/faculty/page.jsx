'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { collegeGradFacultyData } from '@/lib/constants/fake-data/faculty-management';
import { collegeGradFacultyTemplate } from '@/lib/constants/table-templates/college-grad/faculty-management';
import { testPromise } from '@/lib/utils';
import { CheckCircle, Printer, XCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import EditFacultyDialogForm from './edit-faculty-dialog-form';

function CollageGradManagementFaculty() {
  const [rowSelection, setRowSelection] = useState({});
  const [confirmResult, setConfirmResult] = useState(false);

  useEffect(() => {
    if (confirmResult) {
      console.log(confirmResult); // true if you accept
      // update and handles the status of the deactivated faculty on UI

      // no backend function here; use the confirmFunction prop instead if you wish to modify the backend data
      setConfirmResult(false);
    }
  }, [confirmResult]);

  async function sampleConfirmFunction(id) {
    try {
      const result = await testPromise(id);

      if (result) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <Label>Success!</Label>
            </div>
          ),
          description: <>Changes have been Saved.</>,
        });
      }
    } catch (error) {
      console.error('Error:', error);

      toast({
        title: (
          <div className='flex flex-row'>
            <XCircle className='mr-2 h-4 w-4 text-red-400' />
            <Label>Error!</Label>
          </div>
        ),
        description: <>Error saving your data</>,
      });
    }
  }

  // collects the selected faculty data
  const selectedFaculty = collegeGradFacultyData.filter((item) => {
    const accessorKey = collegeGradFacultyTemplate[0]?.accessorKey;
    return (
      rowSelection && item && accessorKey && rowSelection[item[accessorKey]]
    );
  });

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
        renderRowActionMenuItems={({ row }) => {
          const selectedId =
            row.original[collegeGradFacultyTemplate[0].accessorKey]; // first column is required to be the id

          return (
            <div className='flex flex-col w-[14.75rem] z-10'>
              <Label className='my-[0.62rem] ml-4 font-bold'>Actions</Label>
              <AlertConfirmModal
                label='Deactivate'
                title='Are you sure you want to deactivate?'
                description='Once deactivated, all users account will be deactivated.'
                cancelLabel='Cancel'
                confirmLabel='Deactivate'
                confirmFunction={() => sampleConfirmFunction(selectedId)}
              />
            </div>
          );
        }}
      />
    </main>
  );
}

export default CollageGradManagementFaculty;
