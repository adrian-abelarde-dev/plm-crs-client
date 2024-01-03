'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { fakeCollegeStudents } from '@/lib/constants/fake-data/students-college';
import { fakeCollegeStudentsTemplate } from '@/lib/constants/table-templates/college/view-student-profile';
import { handleRowSelectionChange } from '@/lib/utils';
import { Archive } from 'lucide-react';
import React, { useState } from 'react';

import DisableAddDrop from './add-drop/add-drop-disable-logic';
import AddDropDialogForm from './add-drop/college-add-drop';
import EnlistStudentUndergrad from './enlistment/enlistment';
import shouldDisable from './enlistment/enlistment-disable-logic';
import UpdateStudentUndergrad from './update/college-update';
import ViewStudentDialogForm from './view-profile/college-view-student-profile-dialog-form';

function StudentCollegeUndergrad() {
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
            <Button
              variant='outline'
              selectedStudent={selectedStudent[0]}
              disabled={Object.keys(selectedStudent).length === 0}
            >
              <Archive className='mr-2 h-4 w-4' />
              Archive
            </Button>

            <ViewStudentDialogForm
              selectedStudent={selectedStudent[0]}
              disabled={
                Object.keys(selectedStudent).length > 1 ||
                Object.keys(selectedStudent).length === 0
              }
            />

            <UpdateStudentUndergrad
              updateIndivMultipleStudents={Object.keys(rowSelection).length}
              selectedStudent={selectedStudent}
              disabled={Object.keys(rowSelection).length === 0}
            />

            <AddDropDialogForm
              selectedStudent={selectedStudent[0]}
              disabled={DisableAddDrop(selectedStudent, rowSelection)}
            />
            <EnlistStudentUndergrad
              selectedStudent={selectedStudent}
              disabled={shouldDisable(selectedStudent, rowSelection)}
              enlistStudents={Object.keys(rowSelection).length}
            />
          </>
        }
      />
    </main>
  );
}

export default StudentCollegeUndergrad;
