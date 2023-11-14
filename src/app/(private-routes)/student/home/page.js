'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
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
  CalendarCheck,
  Printer,
  School,
} from 'lucide-react';
import Link from 'next/link';

function StudentHomePage() {
  const program = 'BS Computer Science';
  const college = 'College of Engineering and Technology';
  const schoolYear = 'School Year 2023 - 2024 1st Semester';

  return (
    <div className='ml-9 mr-9'>
      {/* Title - Student Dashboard */}
      <div className='mt-32 mb-10'>
        <Label className='font-[500] text-4xl '>Student Dashboard</Label>
      </div>
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
        <Card className='w-1/3 max-md:w-full'>
          <CardHeader>
            <CardTitle>
              <div className=''>
                <Badge
                  variant='outline'
                  className='bg-[#FEF2F2] text-[#DC2626] border-[#DC2626]'
                >
                  Not Enrolled
                </Badge>
                <div className='mt-5'>
                  <Label className='font-[600] text-xl '>Juan Dela Cruz</Label>
                </div>
              </div>
            </CardTitle>
            <CardDescription className='flex flex-row '>
              <AlertCircle className='h-5 w-5 pt-1 -mt-2.5' />
              <Label className='-mt-1'>2020-110299</Label>
            </CardDescription>
          </CardHeader>
          <CardContent className='mt-12'>
            <Label className='text-base flex flex-row'>
              <Briefcase className='h-4 w-4 mr-2 mt-1' />
              {program}
            </Label>
            <Label className='text-base flex flex-row'>
              <School className='h-4 w-4 mr-2 mt-1' />
              {college}
            </Label>
            <Label className='text-base flex flex-row'>
              <CalendarCheck className='h-4 w-4 mr-2 mt-1' />
              {schoolYear}
            </Label>
          </CardContent>
          <CardFooter className='mt-12 md:max-xl:block'>
            <Button className='bg-yellow-400 text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500'>
              <Printer className='h-4 w-4 mr-2' /> Print SER
            </Button>
            <Button className='bg-[#5458AE] hover:bg-[#2e3281] md:max-xl:mt-4 text-white'>
              <IconBrandTeams className='h-4 w-4 mr-2' />
              <Link
                href='https://www.youtube.com/watch?v=MdLbC-MmNac'
                target='_blank'
              >
                Open Teams
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default StudentHomePage;
