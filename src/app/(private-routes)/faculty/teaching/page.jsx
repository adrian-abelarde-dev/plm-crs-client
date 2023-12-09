import TableMRT from '@/components/layouts/table-mrt';
import { Label } from '@/components/ui/label';
import { addDropRequestData } from '@/lib/constants/fake-data/grad-add-drop-request';
import { addDropRequestTemplate } from '@/lib/constants/table-templates/college-grad/add-drop-request';
import React from 'react';

function FacultyTeaching() {
  return (
    <main className='p-6'>
      <div className='mt-12 mb-16'>
        <Label className='text-4xl font-medium'>Current Class Assignment</Label>
      </div>

      <TableMRT
        template={addDropRequestTemplate}
        data={addDropRequestData}
        title='1st Semester A.Y 2023 - 2024'
        searchPlaceholder='Search Class'
      />
    </main>
  );
}

export default FacultyTeaching;
