'use client';

import { Button } from '@/components/ui/button';
import { fakeFacultyEncodingGrades } from '@/lib/constants/fake-data/faculty-encoding-grades';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import EditGrades from '../../../encoding-grades/[courseCode]/edit-grades';

function ViewGrades({ params }) {
  const [viewGrades, setViewGrades] = useState(fakeFacultyEncodingGrades);

  useEffect(() => {
    // Update whenever params.courseCode and params.section changes
    const filteredData = fakeFacultyEncodingGrades.filter(
      (data) =>
        data.courseCode === params.courseCode &&
        data.section === params.section,
    );
    setViewGrades(filteredData);
  }, [params.courseCode, params.section]);

  return (
    <main className='p-6 flex flex-col'>
      <div className='mt-12 mb-16'>
        <h1 className='text-4xl font-medium'>View Grades</h1>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-12 mx-24 place-items-center max-md:mx-0 max-md:grid-cols-1 max-md:justify-items-start max-md:p-6 max-md:border max-md:shadow rounded'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg'>Course Code - Section</h1>
          <p>
            {params.courseCode} - {params.section}
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg'>Course Title</h1>
          <p>CS Elective 2 (lab)</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg'>Units</h1>
          <p>3</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg'>Term / A.Y</h1>
          <p>1 / 2023</p>
        </div>
      </div>

      {/* Table */}
      <EditGrades studentsData={viewGrades} setGrades={setViewGrades} />

      {/* Actions */}
      <div className='mt-4 flex gap-4 justify-center'>
        <Button variant='outline' asChild>
          <Link href='/faculty/view-grades'>Cancel</Link>
        </Button>
        {viewGrades[0]?.students.length !== 0 && <Button>Save</Button>}
      </div>
    </main>
  );
}

export default ViewGrades;
