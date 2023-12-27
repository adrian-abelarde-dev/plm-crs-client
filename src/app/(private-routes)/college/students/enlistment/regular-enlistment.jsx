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
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { blockInformation } from '@/lib/constants/fake-data/block-subjects';
import { React } from 'react';

import EnlistmentConfirmationDialogForm from './confirmation dialogs/regular-enlistment-confirmation';

function EnlistmentDialogForm({ selectedStudent }) {
  return (
    <DialogContent className='md:max-w-[1350px] h-[42rem]'>
      <DialogHeader>
        <DialogTitle className='font-bold text-2xl'>
          Enlistment Form
        </DialogTitle>
        <DialogDescription>Enlist the student</DialogDescription>
      </DialogHeader>
      <div className='flex flex-row'>
        <div className='w-3/4 flex flex-col'>
          {selectedStudent
            ?.filter(
              (student) =>
                student.block === selectedStudent[0].block &&
                student.yearLevel === selectedStudent[0].yearLevel &&
                student.program === selectedStudent[0].program,
            )
            .map((student) => {
              const blockInfo = blockInformation.find(
                (block) =>
                  block.block === student.block &&
                  block.yearLevel === student.yearLevel &&
                  block.program === student.programAc,
              );
              return (
                <Card key={student.block} className='h-[30rem]'>
                  <CardHeader>
                    <CardTitle className='text-xl font-extrabold bg-yellow-300 pl-2 pt-1 pb-1 w-full h-fit'>
                      {student.programAc} {student.yearLevel}-{student.block}
                    </CardTitle>
                    <div>
                      <Separator className='mt-4' />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h1 className='text-base font-semibold pl-2'>
                      Block Statistics
                    </h1>
                    <div className='flex flex-row mt-5'>
                      <div className='flex flex-col w-40'>
                        <h1 className='text-slate-500 text-xs pl-2'>Slots</h1>
                      </div>
                      <div className='flex flex-col w-40'>
                        <h1 className='text-xs'>{blockInfo?.slots}</h1>
                      </div>
                    </div>
                    <div className='flex flex-row mt-3'>
                      <div className='flex flex-col w-40'>
                        <h1 className='text-slate-500 text-xs pl-2'>
                          Enlisted Slots
                        </h1>
                      </div>
                      <div className='flex flex-col w-40'>
                        <h1 className='text-xs'>{blockInfo?.enlistedSlots}</h1>
                      </div>
                    </div>
                    <Table className='mt-6 text-xs'>
                      <ScrollArea className='md:max-w-3/4 h-[13rem]'>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Class</TableHead>
                            <TableHead>Section</TableHead>
                            <TableHead>Schedule</TableHead>
                            <TableHead>Slots</TableHead>
                            <TableHead>Taken Slots</TableHead>
                          </TableRow>
                        </TableHeader>
                        {blockInfo?.blockSubjects.map((blockSubs) => (
                          <TableRow key={blockSubs?.class}>
                            <TableCell>{blockSubs?.class}</TableCell>
                            <TableCell>{blockSubs?.section}</TableCell>
                            <TableCell>{blockSubs?.schedule}</TableCell>
                            <TableCell>{blockSubs?.subjectSlots}</TableCell>
                            <TableCell>{blockSubs?.takenSlots}</TableCell>
                          </TableRow>
                        ))}
                      </ScrollArea>
                    </Table>
                    <div>
                      <h1 className='mt-5 text-xs flex justify-end'>
                        Total Subjects:
                        <p className='font-bold ml-2'>
                          {' '}
                          {blockInfo?.blockSubjects?.length}
                        </p>
                      </h1>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
        <div className='w-1/4 pl-4'>
          <Card className='h-[30rem] flex flex-col'>
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
                  <h1 className='text-slate-500 text-xs'>Full Name</h1>
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
                  <h1 className='text-slate-500 text-xs'>Block Assignment</h1>
                </div>
                <div className='flex flex-col w-40 break-words'>
                  <h1 className='text-xs'>{selectedStudent[0]?.yearBlock}</h1>
                </div>
              </div>

              {/* Registration Code */}
              <div className='flex flex-row mt-3'>
                <div className='flex flex-col w-40 '>
                  <h1 className='text-slate-500 text-xs'>Registration Code</h1>
                </div>
                <div className='flex flex-col w-40'>
                  <h1 className='text-xs'>{selectedStudent[0]?.regCode}</h1>
                </div>
              </div>
              {/* Enrollment Status */}
              <div className='flex flex-row mt-3'>
                <div className='flex flex-col w-40 '>
                  <h1 className='text-slate-500 text-xs'>Enrollment Status</h1>
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
                <EnlistmentConfirmationDialogForm
                  selectedStudent={selectedStudent[0]}
                />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DialogContent>
  );
}
export default EnlistmentDialogForm;
