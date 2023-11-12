'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { collegeGradStudentsData } from '@/lib/constants/fake-data/grad-students';
import { collegeGradStudentsTemplate } from '@/lib/constants/table-templates/college-grad/grad-students';
import { Printer } from 'lucide-react';
import React, { useState } from 'react';

function CollegeGradActivities() {
  const [selectedStudent, setSelectedStudent] = useState({});

  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeGradStudentsTemplate}
        data={collegeGradStudentsData}
        title='Students'
        searchPlaceholder='Search Student'
        isCheckBoxVisible={true}
        rowSelection={selectedStudent}
        setRowSelection={setSelectedStudent}
        RightButtons={
          <Button
            disabled={
              Object.keys(selectedStudent).length > 1 ||
              Object.keys(selectedStudent).length === 0
            }
          >
            <Printer className='w-4 h-4 mr-2' />
            Print SER
          </Button>
        }
      />
    </main>
  );
}

export default CollegeGradActivities;
