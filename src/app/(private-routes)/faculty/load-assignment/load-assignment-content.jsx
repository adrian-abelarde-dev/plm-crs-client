import PrintHeader from '@/components/component/printables/print-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fakeFacultyLoadAssignmentData } from '@/lib/constants/fake-data/faculty-load-assignment';
import { cn } from '@/lib/utils';

import PrintLayoutTeachingAssignment from './print-teaching-assignment';
import SignaturesApprovals from './signatures-approvals';

function ContentLoadAssignment({ enablePrintMode }) {
  return (
    <div className={cn(enablePrintMode && 'mx-8')}>
      {enablePrintMode && <div className='mt-16' />}
      {/* Headers */}
      {/* TODO: Pass enablePrintMode here to display logos */}
      <PrintHeader college={'COLLEGE OF ENGINEERING'} />

      <div className='mt-4 flex flex-col place-items-center gap-1'>
        <h1 className='font-semibold'>TEACHING ASSIGNMENTS</h1>
        <h2 className='font-normal text-xs'>1st Sem A.Y. 2023-2024</h2>
      </div>

      <div className='flex justify-between mt-6'>
        {/* Faculty Name */}
        <div className='flex flex-col gap-1'>
          <h1 className='font-bold text-lg underline'>Thom Yorke</h1>
          <p className='text-sm text-zinc-500 font-normal italic'>
            This college has considered you to teach the following subject(s)
            for the stipulated term.
          </p>
        </div>

        {/* Print Button */}
        {!enablePrintMode && <PrintLayoutTeachingAssignment />}
      </div>

      {/* Faculty Table */}
      <Table className='mt-8'>
        <TableHeader>
          <TableRow className='font-bold'>
            <TableCell>Course Code & Section</TableCell>
            <TableCell>Course Title</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Class Schedule</TableCell>
            <TableCell>No. of Students</TableCell>
            <TableCell>Credited Units</TableCell>
            <TableCell>College</TableCell>
            <TableCell>Type of Load</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeFacultyLoadAssignmentData.map((load, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{load.courseCodeSection}</TableCell>
                <TableCell>{load.courseTitle}</TableCell>
                <TableCell>{load.units}</TableCell>
                <TableCell>{load.classSchedule}</TableCell>
                <TableCell>{load.studentCount}</TableCell>
                <TableCell>{load.creditedUnits}</TableCell>
                <TableCell>{load.college}</TableCell>
                <TableCell>{load.loadType}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Signatures | Approvals */}
      {enablePrintMode && <SignaturesApprovals />}
    </div>
  );
}

export default ContentLoadAssignment;
