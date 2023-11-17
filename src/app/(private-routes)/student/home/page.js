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

const program = 'BS Computer Science';
const college = 'College of Engineering and Technology - Graduate Program';
const schoolYear = 'School Year 2023 - 2024 1st Semester';

function StudentHomePage() {
  return (
    <div className='ml-9 mr-9'>
      {/* Title - Student Dashboard */}
      <h1 className='mt-32 font-medium text-4xl'>Student Dashboard</h1>

      <div className='mt-10 flex flex-col md:flex-row gap-4'>
        <div className='rounded-md border w-full'>
          {/*Table for Schedules*/}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-28'>Class/Section</TableHead>
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
        <Card className='w-full flex flex-col justify-between'>
          <section className='flex flex-col'>
            <CardHeader>
              <CardTitle>
                <Badge
                  variant='outline'
                  className='bg-destructive/10 text-destructive border-destructive leading-none p-1'
                >
                  Not Enrolled
                </Badge>
                <h1 className='font-semibold text-2xl mt-4'>Juan Dela Cruz</h1>
              </CardTitle>
              <CardDescription className='flex flex-row gap-2 items-center'>
                <AlertCircle className='h-auto w-4' />
                <p className='-mt-1'>2020-110299</p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <h1 className='text-base flex flex-row'>
                <Briefcase className='h-4 w-4 mr-2 mt-1' />
                {program}
              </h1>
              <h1 className='text-base flex flex-row'>
                <School className='h-4 w-4 mr-2 mt-1' />
                {college}
              </h1>
              <h1 className='text-base flex flex-row'>
                <CalendarCheck className='h-4 w-4 mr-2 mt-1' />
                {schoolYear}
              </h1>
            </CardContent>
          </section>

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
