'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { fakeCollegeSchedule } from '@/lib/constants/fake-data/college-schedule';
import { fakeCollegeScheduleTemplate } from '@/lib/constants/table-templates/college/college-schedule-table';
import * as React from 'react';
import { useState } from 'react';

import AddClassUndergrad from './schedule/add-class';
import ArchiveSchedUndergrad from './schedule/archive-sched';
import AcadYearFilterUndergrad from './schedule/filter-acad-year';
import DepartmentFilterUndergrad from './schedule/filter-department';
import PrintSchedUndergrad from './schedule/print-sched';

function CollegeSchedulePage() {
  const [rowSelection, setRowSelection] = useState({});
  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeCollegeScheduleTemplate}
        data={fakeCollegeSchedule}
        title='Schedule'
        description=''
        searchPlaceholder='Search schedule...'
        isCheckBoxVisible={true}
        isFullscreen={false}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        LeftButtons={
          <>
            <DepartmentFilterUndergrad />
            <AcadYearFilterUndergrad />
          </>
        }
        RightButtons={
          <>
            <ArchiveSchedUndergrad
              disabled={Object.keys(rowSelection).length === 0}
            />
            <PrintSchedUndergrad
              disabled={Object.keys(rowSelection).length === 0}
              selectedSched={Object.keys(rowSelection).length}
            />
            <AddClassUndergrad />
          </>
        }
      />
    </main>
  );
}

export default CollegeSchedulePage;
