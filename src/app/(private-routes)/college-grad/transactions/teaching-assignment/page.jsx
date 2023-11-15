'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { facultyTeachingAssignments } from '@/lib/constants/fake-data/teaching-assignments-grad';
import { totalUnits } from '@/lib/utils';
import { Printer } from 'lucide-react';
import { useState } from 'react';

import EditTeachingAssignment from './edit-teaching-assignment';

function CollegeGradTeachingAssignment() {
  const [facultyInput, setFacultyInput] = useState('Urquico, Kurt Jacob E.');
  const [subjects, setSubjects] = useState(facultyTeachingAssignments);

  return (
    <main className='p-6'>
      <div className='mt-12'>
        <Label className='text-4xl font-medium'>Teaching Assignment</Label>
      </div>

      <div className='w-[20rem] mb-10 mt-16'>
        <Label htmlFor='email'>Search Faculty</Label>
        <Input
          id='faculty'
          placeholder='Search'
          onChange={(e) => setFacultyInput(e.target.value)}
          value={facultyInput}
        />
      </div>

      {facultyInput !== '' ? (
        <>
          {/* Faculty Name */}
          <div className='flex flex-col place-items-start mb-16'>
            <Label className='text-4xl uppercase font-bold'>
              {facultyInput}
            </Label>
            <Label>Lecturer II, Part Time</Label>
          </div>

          <div className='flex flex-col place-items-center'>
            <Label className='text-lg uppercase font-medium'>
              College of Engineering and Technology
            </Label>
            <Label>1st Sem, SY 2023-2024</Label>
          </div>

          <div className='flex justify-end gap-2'>
            <EditTeachingAssignment
              subjects={subjects}
              setSubjects={setSubjects}
            />
            <Button
              className='text-zinc-900 justify-between hover:bg-zinc-100'
              variant='outline'
            >
              <Printer className='w-4 h-4 mr-2' />
              Print PDF
            </Button>
          </div>

          <Table className='mt-8'>
            <TableCaption>
              This college has considered you to teach the following subject(s)
              for the stipulated term.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold text-black'>
                  Subject Code
                </TableHead>
                <TableHead className='font-bold text-black'>Section</TableHead>
                <TableHead className='font-bold text-black'>
                  Subject Title
                </TableHead>
                <TableHead className='font-bold text-black text-center'>
                  Units
                </TableHead>
                <TableHead className='font-bold text-black'>Schedule</TableHead>
                <TableHead className='font-bold text-black'>
                  No. of Students
                </TableHead>
                <TableHead className='font-bold text-black text-center'>
                  Credited Units
                </TableHead>
                <TableHead className='font-bold text-black'>College</TableHead>
                <TableHead className='font-bold text-black'>
                  Type of Load
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subjects, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{subjects.subjectCode}</TableCell>
                    <TableCell>{subjects.section}</TableCell>
                    <TableCell>{subjects.subjectTitle}</TableCell>
                    <TableCell className='text-center'>
                      {subjects.units.toFixed(1)}
                    </TableCell>
                    <TableCell>{subjects.schedule}</TableCell>
                    <TableCell>{subjects.noOfStudents}</TableCell>
                    <TableCell className='text-center'>
                      {subjects.creditedUnits.toFixed(1)}
                    </TableCell>
                    <TableCell>{subjects.college}</TableCell>
                    <TableCell>{subjects.typeOfLoad}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell className='text-center'>
                  Total No. of Units:{' '}
                  <span className='text-bold'>
                    {totalUnits('units', subjects)}
                  </span>
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell className='text-center'>
                  Total No. of Credits:{' '}
                  <span className='text-bold'>
                    {totalUnits('creditedUnits', subjects)}
                  </span>
                </TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableFooter>
          </Table>
        </>
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400 '>
          Please search for a Faculty
        </div>
      )}
    </main>
  );
}

export default CollegeGradTeachingAssignment;
