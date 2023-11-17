import TableMRT from '@/components/layouts/table-mrt';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { fakeGradAssessmentHistories } from '@/lib/constants/fake-data/grad-assessment-history';
import { fakeGradClasses } from '@/lib/constants/fake-data/grad-classes';
import { fakeGradPaymentHistories } from '@/lib/constants/fake-data/grad-payment-history';
import { gradAssessmentHistoryTemplate } from '@/lib/constants/table-templates/student-grad/assessment-history';
import { gradClassesTemplate } from '@/lib/constants/table-templates/student-grad/classes';
import { gradPaymentHistoryTemplate } from '@/lib/constants/table-templates/student-grad/payment-history';
import { IconBrandTeams } from '@tabler/icons-react';
import {
  AlertTriangle,
  Briefcase,
  CalendarCheck,
  History,
  Info,
  Printer,
  School,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

const program = '(MIT) Master of Information Technology';
const college = 'CET - Graduate Program';
const schoolYear = 'School Year 2023 - 2024 1st Semester';
const alertMessage =
  'You are not yet officially enrolled for this current term. Please settle your dues.';

function GradStudentHome() {
  return (
    <div className='ml-9 mr-9'>
      {/* Title - Student Dashboard */}
      <h1 className='mt-32 font-medium text-4xl'>Student Dashboard</h1>

      {/* Student Dashboard Content */}
      <div className='mt-10 flex flex-col md:flex-row gap-4'>
        {/* Student Info */}
        <Card className='w-1/3 max-md:w-full flex flex-col justify-between'>
          <CardHeader>
            <Badge
              variant='outline'
              className='bg-destructive/10 text-destructive border-destructive w-fit'
            >
              Not Enrolled
            </Badge>
            <CardTitle className='font-semibold text-2xl mt-4'>
              Kurt Jacob Urquico
            </CardTitle>
            <CardDescription className='flex flex-row gap-2 items-center'>
              <Info className='h-auto w-4 pt-1 -mt-2' />
              2020-42069
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

          <CardFooter className='mt-12 md:max-xl:block'>
            <Button className='bg-yellow-400 text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500'>
              <Printer className='h-4 w-4 mr-2' /> Print SER
            </Button>
            <Button className='bg-[#5458AE] hover:bg-[#2e3281] md:max-xl:mt-4 text-white'>
              <IconBrandTeams className='h-4 w-4 mr-2' />
              <Link
                href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                target='_blank'
              >
                Open Teams
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Payment */}
        <div className='md:max-xl:ml-4 w-2/3 max-md:w-full flex flex-col justify-between max-md:mt-4'>
          {/* Alert */}
          <Alert className='border-yellow-700 border-2 bg-yellow/20 text-yellow-700'>
            <AlertTriangle className='w-4 h-4 -mt-1' color='#A16207' />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{alertMessage} </AlertDescription>
          </Alert>

          {/* Paayment Table */}
          <Card>
            <CardHeader className='flex justify-center items-center font-semibold'>
              Payment for Academic Year 2023 - 2024 1st Trimester
            </CardHeader>

            <Separator className='mb-4' />

            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Pay Type/Term</TableCell>
                    <TableCell className='font-medium'>
                      Five Partial Payment
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      Total Amount{' '}
                      <span className='text-zinc-500'>(Current Term)</span>
                    </TableCell>
                    <TableCell className='font-medium'>₱ 6,666.00</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Amount to be paid for 2nd payment</TableCell>
                    <TableCell className='font-medium'>₱ 6,666.00</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Overall Balance</TableCell>
                    <TableCell className='font-medium'>₱ 9,999.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Button Group */}
          <div className='flex max-md:grid max-md:grid-cols-1 max-md:grid-rows-1 max-md:mt-4 max-md:justify-items-start justify-between'>
            <Button className='bg-yellow-400 text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500 max-md:mb-3 '>
              <Wallet className='h-4 w-4 mr-2' /> Pay Now
            </Button>

            <div className='max-md:flex max-md:flex-col'>
              <Button className='bg-white border text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500 max-md:mb-3'>
                <History className='h-4 w-4 mr-2' />
                <Link href='#payment-history'>Payment History</Link>
              </Button>

              <Button className='bg-white border text-[#0F172A] hover:bg-yellow-500 max-md:mb-3'>
                <History className='h-4 w-4 mr-2' />
                <Link href='#assessment-history'>Assessment History</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Table */}
      <div className='mt-10'>
        <TableMRT
          template={gradClassesTemplate}
          data={fakeGradClasses}
          title={'Classes'}
          searchPlaceholder={'Search class'}
        />
      </div>

      {/* Payment History */}
      <div className='mt-10' id='payment-history'>
        <TableMRT
          template={gradPaymentHistoryTemplate}
          data={fakeGradPaymentHistories}
          title={'Payment History'}
          searchPlaceholder={'Search payment history'}
          isRowNumbersVisible={true}
        />
      </div>

      {/* Assessment History */}
      <div className='mt-10 mb-[6.35rem]' id='assessment-history'>
        <TableMRT
          template={gradAssessmentHistoryTemplate}
          data={fakeGradAssessmentHistories}
          title={'Assessment History'}
          searchPlaceholder={'Search assessment history'}
          isRowNumbersVisible={true}
        />
      </div>
    </div>
  );
}

export default GradStudentHome;
