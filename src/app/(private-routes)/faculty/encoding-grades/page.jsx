'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import React, { useState } from 'react';

function EncodingGradesPage() {
  const [selectedAysem, setSelectedAysem] = useState();

  const aysem = [
    {
      aysem: 20201,
    },
    {
      aysem: 20202,
    },
    {
      aysem: 20211,
    },
    {
      aysem: 20212,
    },
    {
      aysem: 20221,
    },
  ];

  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>Encoding of Grades</Label>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <Label className='text-lg font-semibold'>GRADE SHEET INPUT</Label>

        {/* Enter AYSEM */}
        <div className='w-96 mt-4'>
          <Select onValueChange={setSelectedAysem} defaultValue={selectedAysem}>
            <Label className='font-semibold'>AY/SEM</Label>

            <SelectTrigger>
              <SelectValue
                placeholder={
                  <Label className='text-zinc-400'>Enter Aysem</Label>
                }
              />
            </SelectTrigger>

            <SelectContent>
              {aysem.map((year, index) => {
                return (
                  <SelectItem key={index} value={year.aysem}>
                    {year.aysem}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Note */}
        <div className='mt-8 text-sm flex flex-col items-center gap-4'>
          <div className='w-[34rem]'>
            <Label className='text-justify'>
              <span className='font-bold'>NOTE:</span> If some of the classes do
              not appear at this list, you may need to call the attention of
              ICTO to update the classes&apos; database to mark you as its
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
                    'underline font-bold',
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
