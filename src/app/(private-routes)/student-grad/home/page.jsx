import { Alert, AlertTitle } from '@/components/ui/alert';
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
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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

const GradStudentHome = () => {
  const program = '(MIT) Master of Information Technology';
  const college = 'CET - Graduate Program';
  const schoolYear = 'School Year 2023 - 2024 1st Semester';

  const alertMessage =
    'You are not yet officially enrolled for this current term. Please settle your dues.';

  return (
    <div className='ml-9 mr-9'>
      {/* Title - Student Dashboard */}
      <div className='mt-16'>
        <Label className='font-[500] text-4xl '>Student Dashboard</Label>
      </div>

      {/* Student Dashboard Content */}
      <div className='mt-10 flex'>
        {/* Student Info */}
        <Card className='w-[24.312rem]'>
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
                  <Label className='font-[500] text-xl '>
                    Kurt Jacob Urquico
                  </Label>
                </div>
              </div>
            </CardTitle>
            <CardDescription className='flex flex-row '>
              <Info className='h-4 w-4 pt-1 -mt-2' />
              <Label className='-mt-1'>2020-42069</Label>
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
          <CardFooter className='mt-12'>
            <Button className='bg-yellow-400 text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500'>
              <Printer className='h-4 w-4 mr-2' /> Print SER
            </Button>
            <Button className='bg-[#5458AE] hover:bg-[#2e3281]'>
              <IconBrandTeams className='h-4 w-4 mr-2' /> Open Teams
            </Button>
          </CardFooter>
        </Card>

        {/* Payment */}
        <div className='ml-4 lg:mt-0 w-[49.685rem] flex flex-col justify-between'>
          {/* Alert */}
          <Alert className='bg-[#fefce8]'>
            <AlertTriangle className='h-4 w-4 -mt-1 text-yellow-700' />
            <AlertTitle className='text-yellow-700'>{alertMessage}</AlertTitle>
          </Alert>

          {/* Paayment Table */}
          <Card>
            <CardHeader>
              <TableCaption className='font-bold'>
                Payment for Academic Year 2023 - 2024 1st Trimester
              </TableCaption>
            </CardHeader>

            <Separator className='mb-4' />

            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Pay Type/Term</TableCell>
                    <TableCell className='font-bold'>
                      Five Partial Payment
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      Total Amount{' '}
                      <span className='text-zinc-500'>(Current Term)</span>
                    </TableCell>
                    <TableCell className='font-bold'>₱ 6,666.00</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Amount to be paid for 2nd payment</TableCell>
                    <TableCell className='font-bold'>₱ 6,666.00</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Overall Balance</TableCell>
                    <TableCell className='font-bold'>₱ 9,999.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Button Group */}
          <div className='flex justify-between'>
            <Button className='bg-yellow-400 text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500 '>
              <Wallet className='h-4 w-4 mr-2' /> Pay Now
            </Button>

            <div>
              <Button className='bg-white border text-[#0F172A] mr-[0.62rem] hover:bg-yellow-500 '>
                <History className='h-4 w-4 mr-2' /> Payment History
              </Button>

              <Button className='bg-white border text-[#0F172A] hover:bg-yellow-500 '>
                <History className='h-4 w-4 mr-2' /> Assessment History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradStudentHome;
