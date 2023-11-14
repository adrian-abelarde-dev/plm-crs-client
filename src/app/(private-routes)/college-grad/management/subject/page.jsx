'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { collegeGradSubjectManagementData } from '@/lib/constants/fake-data/subject-management';
import { collegeGradSubjectManagementTemplate } from '@/lib/constants/table-templates/college-grad/subject-management';
import { handleRowSelectionChange } from '@/lib/utils';
import React, { useState } from 'react';

import AddSubjectDialogForm from './add-subject-dialog-form';
import EditSubjectDialogForm from './edit-subject-dialog-form';

function CollageGradManagementSubject() {
  const [rowSelection, setRowSelection] = useState({});

  const selectedSubject = handleRowSelectionChange(
    collegeGradSubjectManagementData,
    collegeGradSubjectManagementTemplate,
    rowSelection,
  );

  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeGradSubjectManagementTemplate}
        data={collegeGradSubjectManagementData}
        title='Subject Management'
        searchPlaceholder='Search Subject'
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <>
            <EditSubjectDialogForm
              selectedSubject={selectedSubject[0]} // select the first item in the array
              disabled={
                Object.keys(selectedSubject).length > 1 ||
                Object.keys(selectedSubject).length === 0
              }
            />

            <AddSubjectDialogForm />
          </>
        }
      />
    </main>
  );
}

export default CollageGradManagementSubject;
