import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { grades } from '@/lib/constants/fake-data/grades';

function GradesTable({ selectedAysem }) {
  return (
    <div className='mt-5'>
      {selectedAysem ? (
        <Table className='w-full'>
          <TableHeader>
            <TableRow>
              <TableHead className='font-bold text-black'>
                Subject Code - Section
              </TableHead>
              <TableHead className='font-bold text-black'>
                Subject Title
              </TableHead>
              <TableHead className='font-bold text-black'>Units</TableHead>
              <TableHead className='font-bold text-black'>Grade</TableHead>
              <TableHead className='font-bold text-black'>Remarks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{grade.subjectCode}</TableCell>
                  <TableCell>{grade.subjectTitle}</TableCell>
                  <TableCell>{grade.units}</TableCell>
                  <TableCell>{grade.grade}</TableCell>
                  <TableCell>{grade.remarks}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400'>
          Please Select AY/SEM
        </div>
      )}
    </div>
  );
}

export default GradesTable;
