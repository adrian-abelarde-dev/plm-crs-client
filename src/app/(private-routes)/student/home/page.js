'use client';

import { AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeStudentsDashboard } from '@/lib/constants/fake-data/schedule';
import { IconBrandTeams } from '@tabler/icons-react';
import {
  AlertCircle,
  Briefcase,
  CalendarIcon,
  Printer,
  School,
} from 'lucide-react';
import Link from 'next/link';

function StudentHomePage() {
  return (
    <main className='w-full p-20'>
      <h1 className='font-bold text-2xl py-12'>Student Dashboard</h1>
      <div className='flex space-x-3'>
        <div className='rounded-md border w-3/4 p-2'>
          {/*Table for Schedules*/}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Class/Section</TableHead>
                <TableHead>Class Title</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead className='text-right'>Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/*Inputing Data to table cells*/}
              {fakeStudentsDashboard.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className='font-medium'>{row.classId}</TableCell>
                  <TableCell>{row.classTitleId}</TableCell>
                  <TableCell>{row.schedId}</TableCell>
                  <TableCell className='text-right'>{row.roomId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/*Table for Student Information*/}
        <div className='rounded-md border w-96 p-4'>
          <Badge variant='outlineGreen' className='mb-8'>
            Regular
          </Badge>
          <h1 className='font-bold text-lg'>Juan Dela Cruz</h1>
          <div className='flex gap-2'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>2020-11299</AlertTitle>
          </div>
          <h1 className='py-4'></h1>
          <div className='flex gap-1'>
            <Briefcase className='h-4 w-4 mr-2' />
            <h1>Computer Science</h1>
          </div>
          <div className='flex gap-2'>
            <School className='h-6 w-6 mr-1.5' />
            <h1>College of Engineering and Technology - Graduate Program</h1>
          </div>
          <div className='flex gap-1'>
            <CalendarIcon className='h-4 w-4 mr-2' />
            <h1 className=''>School Year 2023 - 2024 1st Semester</h1>
          </div>
          <div className='py-5'>
            <div className='flex space-x-3'>
              <Button
                variant='outline'
                className='bg-yellow-400 hover:bg-yellow-500'
              >
                <Printer className='h-4 w-4 mr-2' />
                Print SER
              </Button>
              <Button
                variant='outline'
                className='bg-[#5458AE] hover:bg-[#2e3281] hover:text-white md:max-xl:mt-4 text-white'
              >
                <IconBrandTeams className='h-4 w-4 mr-2' />
                <Link
                  href='https://www.youtube.com/watch?v=oHPjYCS3JKQ'
                  target='_blank'
                >
                  {' '}
                  Open Teams
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StudentHomePage;
