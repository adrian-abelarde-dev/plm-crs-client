'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeFacultyEncodingGrades } from '@/lib/constants/fake-data/faculty-encoding-grades';
import Link from 'next/link';
import { useState } from 'react';

function ViewGradesPage() {
  const [courseCodeInput, setCourseCodeInput] = useState('');

  return (
    <main className='p-6 flex flex-col'>
      <div className='mt-12 mb-16'>
        <h1 className='text-4xl font-medium'>View Grades</h1>
      </div>

      <div className='w-[20rem] mb-10'>
        <Label htmlFor='courseCode'>Search Course Code</Label>
        <Input
          id='courseCode'
          placeholder='Search'
          onChange={(e) => setCourseCodeInput(e.target.value)}
          value={courseCodeInput}
        />
      </div>

      {courseCodeInput !== '' ? (
        <>
          {/* Table Layout */}
          <Table>
            <TableHeader>
              <TableRow className='font-bold'>
                <TableCell>Course Code</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Course Title</TableCell>
                <TableCell>Class Schedule</TableCell>
                <TableCell>Instructor</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fakeFacultyEncodingGrades?.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className='underline font-bold text-yellow-500'>
                      <Link
                        href={`/faculty/view-grades/${data.courseCode}/${data.section}`}
                      >
                        {data.courseCode}
                      </Link>
                    </TableCell>
                    <TableCell>{data.section}</TableCell>
                    <TableCell>{data.courseTitle}</TableCell>
                    <TableCell>{data.classSchedule}</TableCell>
                    <TableCell>{data.instructor}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400 '>
          Please search for a Course Code
        </div>
      )}
    </main>
  );
}

export default ViewGradesPage;
