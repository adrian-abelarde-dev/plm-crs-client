import { Button } from '@/components/ui/button';
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
import { cn } from '@/lib/utils';
import { Printer } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function EncodingGradesPage() {
  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>Encoding of Grades</Label>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <Label className='text-lg font-semibold'>GRADE SHEET INPUT</Label>

        {/* Enter AYSEM */}
        <div className='w-96 mt-4'>
          <Label htmlFor='aysem'>A.Y. Sem</Label>
          <Input type='number' id='aysem' placeholder='Enter A.Y. Sem' />
        </div>

        {/* Note */}
        <div className='mt-8 text-sm flex flex-col items-center gap-4'>
          <div className='w-[34rem]'>
            <Label className='text-justify'>
              <span className='font-bold'>NOTE:</span> If some of the classes do
              not appear at this list, you may need to call the attention of
              ICTO to update the classes' database to mark you as its
              instructor.
            </Label>
          </div>
          <Label className='text-zinc-500'>
            (Encoding of grades for classes in red color has been expired)
          </Label>

          <Label className='text-lg py-8 font-semibold'>
            GRADING SHEET(S) FOR S.Y 2023 - 2024 1ST SEMESTER
          </Label>
        </div>
      </div>

      {/* Table Layout */}
      <Table>
        <TableHeader>
          <TableRow className='font-bold'>
            <TableCell>Course Code</TableCell>
            <TableCell>Section</TableCell>
            <TableCell>Course Title</TableCell>
            <TableCell>Class Schedule</TableCell>
            <TableCell>Instructor</TableCell>
            <TableCell>Class List</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeFacultyEncodingGrades.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableCell
                  className={cn(
                    'underline',
                    data.isExpired ? 'text-red-500' : 'text-yellow-500',
                  )}
                >
                  <Link href={`/faculty/encoding-grades/${data.courseCode}`}>
                    {data.courseCode}
                  </Link>
                </TableCell>
                <TableCell>{data.section}</TableCell>
                <TableCell>{data.courseTitle}</TableCell>
                <TableCell>{data.classSchedule}</TableCell>
                <TableCell>{data.instructor}</TableCell>
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

export default EncodingGradesPage;
