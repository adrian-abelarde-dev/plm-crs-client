'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { fakeCollegeStudents } from '@/lib/constants/fake-data/students-college';
import { fakeCollegeStudentsTemplate } from '@/lib/constants/table-templates/college/view-student-profile';
import { handleRowSelectionChange } from '@/lib/utils';
import React, { useState } from 'react';

import ViewStudentDialogForm from './view-student-profile-dialog-form';

function StudentCollegePage() {
  const [rowSelection, setRowSelection] = useState({});

  const selectedStudent = handleRowSelectionChange(
    fakeCollegeStudents,
    fakeCollegeStudentsTemplate,
    rowSelection,
  );

  return (
    <main className='w-full p-6'>
      {/* Table for Students */}
      <TableMRT
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        template={fakeCollegeStudentsTemplate}
        data={fakeCollegeStudents}
        title='Students'
        description='Add, edit and view student/s.'
        isFullscreen={false}
        searchPlaceholder='Search Student'
        isCheckBoxVisible={true}
        RightButtons={
          <>
            {/* Other buttons go here */}
            <ViewStudentDialogForm
              selectedStudent={selectedStudent[0]}
              disabled={
                Object.keys(selectedStudent).length > 1 ||
                Object.keys(selectedStudent).length === 0
              }
            />
          </>
        }
      />
    </main>
  );
}

export default StudentCollegePage;
