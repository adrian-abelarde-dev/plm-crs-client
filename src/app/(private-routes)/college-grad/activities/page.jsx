import TableMRT from '@/components/layouts/table-mrt';
import {
  fakeActivitiesTemplate,
  fakeCollegeActivities,
} from '@/lib/constants/fake-college-activities';
import React from 'react';

const CollegeGradActivities = () => {
  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={fakeActivitiesTemplate}
        data={fakeCollegeActivities}
        title='Activity'
        description='Schedule of activities for School Year - 2023 - 2024 Trimester'
        searchPlaceholder='Search Activitiy'
      />
    </main>
  );
};

export default CollegeGradActivities;
