'use client';
import { Button } from "@/components/ui/button";
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AlertCircle, CalendarIcon, School, Briefcase,Printer } from "lucide-react"
import { AlertTitle } from "@/components/ui/alert"
import Link from 'next/link';
import { fakeStudentsDashboard } from '@/lib/constants/fake-data/schedule';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



function StudentHomePage() {

  const fakeStudentsDashboardTemplate = [
    {
      accessorKey: 'classId',
      id: 'classId',
      header: 'Class/Section',
    },
    {
      accessorKey: 'classTitleId',
      id: 'classTitleId',
      header: 'Class Title',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'schedId',
      id: 'schedId',
      header: 'Schedule',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'roomId',
      id: 'roomId',
      header: 'Room',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <main className='w-full p-20'>
      <h1 className='font-bold text-2xl py-12'>Student Dashboard</h1>
    <div className='flex space-x-3'>
    <div className="rounded-md border w-3/4 p-2">
    {/*Table for Schedules*/}
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Class/Section</TableHead>
      <TableHead>Class Title</TableHead>
      <TableHead>Schedule</TableHead>
      <TableHead className="text-right">Room</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/*Inputing Data to table cells*/}
  {fakeStudentsDashboard.map((row, index) => (
    <TableRow key={index}>
      <TableCell className="font-medium" >{row.classId}</TableCell>
      <TableCell>{row.classTitleId}</TableCell>
      <TableCell>{row.schedId}</TableCell>
      <TableCell className="text-right">{row.roomId}</TableCell>
    </TableRow>
     ))}
  </TableBody>
</Table>
</div>
{/*Table for Student Information*/}
<div className="rounded-md border w-96 p-4">
  <div className='w-12'>
<h1 className='rounded-md border-2 border-green-500 text-xs text-green-800 bg-green-100'>Regular</h1>
</div>
    <h1 className="py-4"></h1>
    <h1 className="font-bold text-lg">Juan Dela Cruz</h1>
    <div className="flex gap-2">
      <AlertCircle className="h-4 w-4" />
        <AlertTitle>2020-11299</AlertTitle>
    </div>
          <h1 className="py-4"></h1>
    <div className="flex gap-1">
      <Briefcase className="h-4 w-4"/>
        <h1 className="">Computer Science</h1>
    </div>
    
    <div className="flex gap-2">
      <School />
        <h1 className="">College of Engineering and Technology - Graduate Program</h1>
    </div>
    
    <div className="flex gap-1">
      <CalendarIcon className="h-5 w-5" />
        <h1 className="">School Year 2023 - 2024 1st Semester</h1>
    </div>
      <div className="py-5">
      <div className="flex space-x-3">
      <div className="flex gap-2">
        <Button variant='outline' className="bg-yellow-500">
        <Printer className="h-4 w-4"/>Print SER</Button>
        </div>
        <Button variant="outline" className="bg-purple-500 text-white">
          <Link href="https://teams.microsoft.com">Open Teams
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
