'use client';

import { Button } from '@/components/ui/button';
import { fakeFacultyEncodingGrades } from '@/lib/constants/fake-data/faculty-encoding-grades';
import { Import, Printer } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import EditGrades from './edit-grades';

function GradesCourseView({ params }) {
  const [facultyEncodingGrades, setFacultyEncodingGrades] = useState(
    fakeFacultyEncodingGrades,
  );

 useEffect(() => {
  // Update the filteredFacultyGrades whenever fakeFacultyEncodingGrades or params.courseCode changes
  const filteredData = fakeFacultyEncodingGrades.filter(
    (data) => data.courseCode === params.courseCode,
  );
  setFacultyEncodingGrades(filteredData);
}, [params.courseCode]);


  return (
    <main className='p-6'>
      <div className='mt-12'>
        <h1 className='text-4xl font-medium'>Encoding of Grades</h1>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <h1 className='font-semibold'>REPORT OF GRADES</h1>
      </div>

      {/* Actions */}
      <div className='flex gap-4 justify-end mt-4'>
        <Button variant='outline'>
          <Import className='w-4 h-4 mr-2' />
          Import CSV
        </Button>
        <Button>
          <Printer className='w-4 h-4 mr-2' />
          Print SER
        </Button>
      </div>

      {/* Notes */}
      <div className='mt-8 text-sm flex flex-col items-center gap-4'>
        <div className='w-[34rem] max-md:w-auto'>
          <h1 className='text-justify'>
            <span className='font-bold'>** ACCEPTABLE GRADES: </span> 1.00 1.25
            1.50 1.75 2.00 2.25 2.50 2.75 3.00 5.0-5.00
          </h1>
        </div>

        <p>
          P-Passed INC-Incomplete DO-Dropped Officially DU-Dropped Unofficially
          DC-Dropped due to COVID-19 **
        </p>

        <h1 className='text-zinc-500'>
          [No grade has been temporarily saved OR submitted yet]
        </h1>
      </div>

      {/* Course Info */}
      <div className='grid grid-cols-4 gap-4 mt-12 mx-24 place-items-center max-md:mx-0 max-md:grid-cols-1 max-md:justify-items-start max-md:p-6 max-md:border max-md:shadow rounded'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg'>Course Code</h1>
          <p>{params.courseCode}</p>
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
      <EditGrades
        studentsData={facultyEncodingGrades}
        setGrades={setFacultyEncodingGrades}
      />

      {/* Actions */}
      <div className='mt-4 flex gap-4 justify-center'>
        <Button variant='outline' asChild>
          <Link href='/faculty/encoding-grades' >Cancel</Link>
        </Button>
        {facultyEncodingGrades[0]?.students.length !== 0 && (
          <Button>Save</Button>
        )}
      </div>
    </main>
  );
}

export default GradesCourseView;
