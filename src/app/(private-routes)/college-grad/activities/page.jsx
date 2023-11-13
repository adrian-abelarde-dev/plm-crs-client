import TableMRT from '@/components/layouts/table-mrt';
import { fakeCollegeActivities } from '@/lib/constants/fake-data/college-activities';
import { collegeActivitiesTemplate } from '@/lib/constants/table-templates/college-grad/activities';
import React from 'react';

function CollegeGradActivities() {
  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeActivitiesTemplate}
        data={fakeCollegeActivities}
        title='Activity'
        description='Schedule of activities for School Year - 2023 - 2024 Trimester'
        searchPlaceholder='Search Activity'
      />
    </main>
  );
}

export default CollegeGradActivities;
