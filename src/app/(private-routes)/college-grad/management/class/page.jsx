'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { collegeClassManagementData } from '@/lib/constants/fake-data/class-management';
import { collegeClassManagementTemplate } from '@/lib/constants/table-templates/college-grad/class-management';
import { handleRowSelectionChange, testPromise } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';
import React, { useState } from 'react';

import AddClassDialogForm from './add-class-dialog-form';
import EditClassDialogForm from './edit-class-dialog-form';
import ViewClassDialogForm from './view-class-dialog-form';

function CollageGradManagementClass() {
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

  const selectedClass = handleRowSelectionChange(
    collegeClassManagementData,
    collegeClassManagementTemplate,
    rowSelection,
  );

  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeClassManagementTemplate}
        data={collegeClassManagementData}
        title='Class Management'
        searchPlaceholder='Search Class'
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <>
            <ViewClassDialogForm
              selectedClass={selectedClass[0]} // select the first item in the array
              disabled={
                Object.keys(selectedClass).length > 1 ||
                Object.keys(selectedClass).length === 0
              }
            />

            <EditClassDialogForm
              selectedClass={selectedClass[0]} // select the first item in the array
              disabled={
                Object.keys(selectedClass).length > 1 ||
                Object.keys(selectedClass).length === 0
              }
            />

            <AddClassDialogForm />
          </>
        }
        renderRowActionMenuItems={({ row }) => {
          const selectedId =
            row.original[collegeClassManagementTemplate[0].accessorKey]; // first column is required to be the id

          const status = row.original.status;

          return (
            <div className='flex flex-col w-[14.75rem] z-10'>
              <Label className='my-[0.62rem] ml-4 font-bold'>Actions</Label>
              {status === 'Active' ? (
                <AlertConfirmModal
                  label='Close'
                  title='Are you sure you want to set the status to pending?'
                  description='Once closed, this class will be inactive.'
                  cancelLabel='Cancel'
                  confirmLabel='Deactivate'
                  confirmFunction={() => sampleConfirmFunction(selectedId)}
                />
              ) : (
                <AlertConfirmModal
                  label='Activate'
                  title='Are you sure you want to set the status to active?'
                  description='Once activated, this class will be active.'
                  cancelLabel='Cancel'
                  confirmLabel='Activate'
                  confirmFunction={() => sampleConfirmFunction(selectedId)}
                />
              )}
            </div>
          );
        }}
      />
    </main>
  );
}

export default CollageGradManagementClass;
