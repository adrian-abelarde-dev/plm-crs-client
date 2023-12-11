'use client';

// ! remove later
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeFacultyEncodingGrades } from '@/lib/constants/fake-data/faculty-encoding-grades';
import { Import, Printer } from 'lucide-react';
import React from 'react';

function GradesCourseView({ params }) {
  // filter fakeFacultyEncodingGrades by courseCode
  const filteredFakeFacultyEncodingGrades = fakeFacultyEncodingGrades.filter(
    (data) => data.courseCode === params.courseCode,
  );

  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>Encoding of Grades</Label>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <Label className='text-lg font-semibold'>REPORT OF GRADES</Label>
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
          <Label className='text-justify'>
            <span className='font-bold'>** ACCEPTABLE GRADES: </span> 1.00 1.25
            1.50 1.75 2.00 2.25 2.50 2.75 3.00 5.0-5.00
          </Label>
        </div>

        <Label>
          P-Passed INC-Incomplete DO-Dropped Officially DU-Dropped Unofficially
          DC-Dropped due to COVID-19 **
        </Label>

        <Label className='text-zinc-500'>
          [No grade has been temporarily saved OR submitted yet]
        </Label>
      </div>

      {/* Course Info */}
      <div className='grid grid-cols-4 gap-4 mt-12 mx-24 place-items-center max-md:mx-0 max-md:grid-cols-1 max-md:justify-items-start max-md:p-6 max-md:border max-md:shadow rounded'>
        <div className='flex flex-col gap-2'>
          <Label className='font-bold text-lg'>Course Code</Label>
          <Label>{params.courseCode}</Label>
        </div>

        <div className='flex flex-col gap-2'>
          <Label className='font-bold text-lg'>Course Title</Label>
          <Label>CS Elective 2 (lab)</Label>
        </div>

        <div className='flex flex-col gap-2'>
          <Label className='font-bold text-lg'>Units</Label>
          <Label>3</Label>
        </div>

        <div className='flex flex-col gap-2'>
          <Label className='font-bold text-lg'>Term / A.Y</Label>
          <Label>1 / 2023</Label>
        </div>
      </div>

      {/* Table */}
      <Table className='mt-4'>
        <TableHeader>
          <TableRow className='font-bold'>
            <TableCell>Count</TableCell>
            <TableCell>Student Number</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Final Grade</TableCell>
            <TableCell>Remarks</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredFakeFacultyEncodingGrades[0].students?.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{data.studentNumber}</TableCell>
                <TableCell>{data.studentName}</TableCell>
                <TableCell>{data.course}</TableCell>
                <TableCell>{data.year}</TableCell>
                <TableCell>{data.finalGrade}</TableCell>
                <TableCell>{data.remarks}</TableCell>
                <TableCell>
                  <Button variant='ghost'>
                    <Printer className='w-4 h-4 mr-2' />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}

export default GradesCourseView;
