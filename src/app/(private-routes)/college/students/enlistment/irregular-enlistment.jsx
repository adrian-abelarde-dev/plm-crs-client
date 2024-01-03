import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Separator } from '@radix-ui/react-dropdown-menu';

import IrregularEnlistmentConfirmationDialogForm from './confirmation-dialogs/irregular-enlistment-confirmation';

function IrregularEnlistmentDialogForm({ selectedStudent }) {
  const enrolledStudents =
    selectedStudent?.filter(
      (student) =>
        (student.regCode == 'Irregular' &&
          student.enrollmentStatus == 'Enrolled') ||
        student.enrollmentStatus == 'Enlisted',
    ).length > 0;
  return (
    <DialogContent className='md:min-w-[1350px] h-[42rem] min-w-full'>
      <DialogHeader>
        <DialogTitle className='font-bold text-2xl'>
          Enlistment Form
        </DialogTitle>
        <DialogDescription>Enlist the student</DialogDescription>
      </DialogHeader>
      <div className='overflow-auto'>
        <div className='flex flex-row  min-w-[1200px]'>
          <div className='w-2/3 flex flex-col mb-[6rem] '>
            <Card className='h-[23rem] p-6 overflow-auto'>
              <CardTitle>
                Added Classes
                <Separator className='mt-4' />
              </CardTitle>
              <ScrollArea className='md:max-w-3/4'>
                <Table className='mt-3 text-xs'>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Credits</TableHead>
                    </TableRow>
                  </TableHeader>
                  {selectedStudent[0]?.addDropSubjects?.map((subject) => (
                    <TableRow key={subject.subject}>
                      <TableCell>{subject.subject}</TableCell>
                      <TableCell>{subject.section}</TableCell>
                      <TableCell>{subject.schedule}</TableCell>
                      <TableCell>{subject.credits}</TableCell>
                    </TableRow>
                  ))}
                </Table>
              </ScrollArea>
              <div className='mt-auto'>
                <h1 className='mt-5 text-xs flex justify-end'>
                  Total Subjects:
                  <p className='font-bold ml-2'>
                    {' '}
                    {selectedStudent[0]?.addDropSubjects?.length}
                  </p>
                </h1>
              </div>
            </Card>
          </div>
          <div className='w-1/3 flex flex-col pl-4'>
            <Card className=' flex flex-col h-[23rem] '>
              <CardHeader>
                <CardTitle>
                  Student Profile
                  <Separator className='mt-4' />
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Full Name */}
                <div className='flex flex-row'>
                  <div className='flex flex-col w-40'>
                    <h1 l className='text-slate-500 text-xs'>
                      Full Name
                    </h1>
                  </div>
                  <div className='flex flex-col w-40 break-words'>
                    <h1 className='text-xs'>
                      {selectedStudent[0]?.firstName}{' '}
                      {selectedStudent[0]?.middleName}{' '}
                      {selectedStudent[0]?.lastName}
                    </h1>
                  </div>
                </div>
                {/* Student Number */}
                <div className='flex flex-row mt-3'>
                  <div className='flex flex-col w-40 '>
                    <h1 className='text-slate-500 text-xs'>Student Number</h1>
                  </div>
                  <div className='flex flex-col w-40 break-words'>
                    <h1 className='text-xs'>{selectedStudent[0]?.studentNo}</h1>
                  </div>
                </div>
                {/* Program */}
                <div className='flex flex-row mt-3'>
                  <div className='flex flex-col w-40 '>
                    <h1 className='text-slate-500 text-xs'>Program</h1>
                  </div>
                  <div className='flex flex-col w-40 break-words'>
                    <h1 className='text-xs'>{selectedStudent[0]?.program}</h1>
                  </div>
                </div>
                {/* Email Address */}
                <div className='flex flex-row mt-3'>
                  <div className='flex flex-col w-40'>
                    <h1 className='text-slate-500 text-xs'>Email Address</h1>
                  </div>
                  <div className='flex flex-col w-40 break-words overflow-ellipsis overflow-hidden'>
                    <h1 className='text-xs'>
                      {selectedStudent[0]?.emailAddress}
                    </h1>
                  </div>
                </div>
                {/* Block Assignment */}
                <div className='flex flex-row mt-3'>
                  <div className='flex flex-col w-40 break-words'>
                    <h1 className='text-slate-500 text-xs'>Year</h1>
                  </div>
                  <div className='flex flex-col w-40 break-words'>
                    <h1 className='text-xs'>{selectedStudent[0]?.yearLevel}</h1>
                  </div>
                </div>

                {/* Registration Code */}
                <div className='flex flex-row mt-3'>
                  <div className='flex flex-col w-40 '>
                    <h1 className='text-slate-500 text-xs'>
                      Registration Code
                    </h1>
                  </div>
                  <div className='flex flex-col w-40'>
                    <h1 className='text-xs'>{selectedStudent[0]?.regCode}</h1>
                  </div>
                </div>
                {/* Enrollment Status */}
                <div className='flex flex-row mt-3'>
                  <div className='flex flex-col w-40 '>
                    <h1 className='text-slate-500 text-xs'>
                      Enrollment Status
                    </h1>
                  </div>
                  <div className='flex flex-col w-40'>
                    <h1 className='text-xs'>
                      {selectedStudent[0]?.enrollmentStatus}
                    </h1>
                  </div>
                </div>
              </CardContent>
              <div className='mt-auto' />
              <CardFooter className='mt-auto justify-center'>
                <div className='flex justify-center'>
                  {!enrolledStudents && (
                    <IrregularEnlistmentConfirmationDialogForm
                      selectedStudent={selectedStudent[0]}
                    />
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
export default IrregularEnlistmentDialogForm;
