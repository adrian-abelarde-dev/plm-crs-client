'use client';

import { Button } from '@/components/ui/button';
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
import { Import, Printer } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  const grades = [
    {
      grade: '1.00',
    },
    {
      grade: '1.25',
    },
    {
      grade: '1.75',
    },
    {
      grade: '2.00',
    },
    {
      grade: '2.25',
    },
    {
      grade: '2.50',
    },
    {
      grade: '2.75',
    },
    {
      grade: '3.00',
    },
    {
      grade: '5.00 - 5.00',
    },
  ];

  const remarksData = [
    { remarks: 'Passed' },
    { remarks: 'Incomplete' },
    { remarks: 'Dropped Officially' },
    { remarks: 'Dropped Unofficially' },
    { remarks: 'Dropped due to COVID-19' },
  ];

  const changeGrade = (index, grade) => {
    // TODO: Update this later when we have the API
    const updatedFacultyGrades = [...facultyEncodingGrades];
    updatedFacultyGrades[0].students[index].finalGrade = grade;
    setFacultyEncodingGrades(updatedFacultyGrades);
  };

  const changeRemarks = (index, remarks) => {
    // TODO: Update this later when we have the API
    const updatedFacultyGrades = [...facultyEncodingGrades];
    updatedFacultyGrades[0].students[index].remarks = remarks;
    setFacultyEncodingGrades(updatedFacultyGrades);
  };

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
          {facultyEncodingGrades[0].students?.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{data.studentNumber}</TableCell>
                <TableCell>{data.studentName}</TableCell>
                <TableCell>{data.course}</TableCell>
                <TableCell>{data.year}</TableCell>
                {/* Final Grade Encoding */}
                <TableCell className='w-40'>
                  <Select
                    onValueChange={(grade) => changeGrade(index, grade)}
                    defaultValue={data.finalGrade}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          <h1 className='text-zinc-400'>Select grade</h1>
                        }
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {grades.map((grade, index) => {
                        return (
                          <SelectItem key={index} value={grade.grade}>
                            {grade.grade}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </TableCell>

                {/* Final Grade Encoding */}
                <TableCell>
                  <Select
                    onValueChange={(remarks) => changeRemarks(index, remarks)}
                    defaultValue={data.remarks}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          <h1 className='text-zinc-400'>Select remarks</h1>
                        }
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {remarksData.map((remarks, index) => {
                        return (
                          <SelectItem key={index} value={remarks.remarks}>
                            {remarks.remarks}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Actions */}
      <div className='mt-4 flex gap-4 justify-center'>
        <Button variant='outline' asChild>
          <Link href='/faculty/encoding-grades'>Cancel</Link>
        </Button>
        <Button>Save</Button>
      </div>
    </main>
  );
}

export default GradesCourseView;
