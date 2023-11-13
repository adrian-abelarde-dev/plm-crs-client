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
import React, { useState } from 'react';

import EditFacultyDialogForm from './edit-faculty-dialog-form';

function CollageGradManagementFaculty() {
  const [rowSelection, setRowSelection] = useState({});

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
      console.error({ error });

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

          const status = row.original.status;

          return (
            <div className='flex flex-col w-[14.75rem] z-10'>
              <Label className='my-[0.62rem] ml-4 font-bold'>Actions</Label>
              {status === 'Active' && (
                <>
                  <AlertConfirmModal
                    label='Deactivate'
                    title='Are you sure you want to set the status to pending?'
                    description='Once deactivated, all users account will be deactivated.'
                    cancelLabel='Cancel'
                    confirmLabel='Deactivate'
                    confirmFunction={() => sampleConfirmFunction(selectedId)}
                  />
                  <AlertConfirmModal
                    label='Set to Pending'
                    title='Are you sure?'
                    description='Once set to pending, all users account will be set to pending.'
                    cancelLabel='Cancel'
                    confirmLabel='Confirm'
                    confirmFunction={() => sampleConfirmFunction(selectedId)}
                  />
                </>
              )}

              {status === 'Inactive' && (
                <>
                  <AlertConfirmModal
                    label='Activate Faculty'
                    title='Are you sure?'
                    description='Once activated, all users account will be activated.'
                    cancelLabel='Cancel'
                    confirmLabel='Activate'
                    confirmFunction={() => sampleConfirmFunction(selectedId)}
                  />
                  <AlertConfirmModal
                    label='Set to Pending'
                    title='Are you sure?'
                    description='Once set to pending, all users account will be set to pending.'
                    cancelLabel='Cancel'
                    confirmLabel='Confirm'
                    confirmFunction={() => sampleConfirmFunction(selectedId)}
                  />
                </>
              )}

              {status === 'Pending to Assign' && (
                <>
                  <AlertConfirmModal
                    label='Activate Faculty'
                    title='Are you sure?'
                    description='Once activated, all users account will be activated.'
                    cancelLabel='Cancel'
                    confirmLabel='Activate'
                    confirmFunction={() => sampleConfirmFunction(selectedId)}
                  />
                  <AlertConfirmModal
                    label='Deactivate'
                    title='Are you sure you want to set the status to pending?'
                    description='Once deactivated, all users account will be deactivated.'
                    cancelLabel='Cancel'
                    confirmLabel='Deactivate'
                    confirmFunction={() => sampleConfirmFunction(selectedId)}
                  />
                </>
              )}
            </div>
          );
        }}
      />
    </main>
  );
}

export default CollageGradManagementFaculty;
