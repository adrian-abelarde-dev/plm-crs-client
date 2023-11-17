'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Label } from '@/components/ui/label';
import { addDropRequestData } from '@/lib/constants/fake-data/grad-add-drop-request';
import { addDropRequestTemplate } from '@/lib/constants/table-templates/college-grad/add-drop-request';
import React from 'react';

function CollegeGradAddDropPage() {
  return (
    <main className='p-6'>
      <div className='mt-12 mb-16'>
        <Label className='text-4xl font-medium'>Add/Drop</Label>
      </div>

      <TableMRT
        template={addDropRequestTemplate}
        data={addDropRequestData}
        title='List of Add/Drop Requests'
        searchPlaceholder='Search Request'
      />
    </main>
  );
}

export default CollegeGradAddDropPage;
