import TableMRT from '@/components/layouts/table-mrt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DialogContent,
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
import { fakeCollegeStudentsTemplate } from '@/lib/constants/table-templates/college/view-student-profile';

import MultipleEnlistmentConfirmationDialogForm from './confirmation-dialogs/multiple-enlistment-confirmation';

function MultipleEnlistmentDialogForm({ selectedStudent }) {
  let prevBlockInfo = null;

  return (
    <DialogContent className='md:max-w-[1350px] h-[44rem] overflow-auto'>
      <DialogHeader>
        <DialogTitle className='font-bold text-2xl'>
          Enlistment Form
        </DialogTitle>
      </DialogHeader>
      <div className='w-full flex flex-col'>
        <TableMRT
          title='Students'
          description='Summary of the students to be enlisted.'
          className='h-[27rem]'
          template={fakeCollegeStudentsTemplate.filter(
            (column) =>
              column.id !== 'enrollmentStatus' &&
              column.id !== 'yearBlock' &&
              column.id !== 'aySem' &&
              column.id !== 'regCode',
          )}
          data={selectedStudent}
          isFullscreen={false}
          searchPlaceholder='Search Student'
          RightButtons={
            <MultipleEnlistmentConfirmationDialogForm
              selectedStudent={selectedStudent}
            />
          }
        />
      </div>
      <div className='w-full flex flex-col'>
        {selectedStudent.map((student) => {
          const blockInfo = blockInformation.find(
            (block) =>
              block.block === student.block &&
              block.yearLevel === student.yearLevel &&
              block.program === student.programAc,
          );
          if (prevBlockInfo !== blockInfo) {
            prevBlockInfo = blockInfo;
            return (
              <Card key={student.block} className='h-[27rem]'>
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
                    <ScrollArea className='md:max-w-3/4 h-40'>
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
                  <div className='flex justify-end'>
                    <h1 className='mt-6 text-xs flex justify-center'>
                      Total Subjects:
                      <p className='font-bold ml-2 '>
                        {' '}
                        {blockInfo?.blockSubjects?.length}
                      </p>
                    </h1>
                  </div>
                </CardContent>
              </Card>
            );
          }
        })}
      </div>
    </DialogContent>
  );
}
export default MultipleEnlistmentDialogForm;
