import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

function MultipleEnlistmentConfirmationDialogForm({ selectedStudent }) {
  const [enlistmentStatus, setEnlistmentStatus] = useState('Not Enlisted');

  const handleEnlistment = () => {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <h1>Officially enlisted!</h1>
        </div>
      ),
      description: <>Changes has been Saved.</>,
    });
    setEnlistmentStatus('Enlisted');
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className='mt-auto flex justify-center'>
          <Button className='w-[200px]'>Enlist Students</Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='md:max-w-[700px] h-[380px] flex flex-col overflow-auto'>
        <AlertDialogHeader>
          <AlertDialogTitle>Enlistment Overview</AlertDialogTitle>
          <AlertDialogDescription>
            Proceeding will result in the enlistments of the following student/s
            to{'  '}
            <strong>
              {selectedStudent[0].programAc} {selectedStudent[0]?.yearLevel} -{' '}
              {selectedStudent[0]?.block}
              {'  '}
            </strong>
            this academic school year.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ScrollArea className='overflow-y-auto flex-grow'>
          <Table>
            <TableHeader className='text-black'>
              <TableRow>
                <TableHead>Student Number</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Registration Code</TableHead>
                <TableHead>Student Type</TableHead>
              </TableRow>
            </TableHeader>
            {selectedStudent.map((student) => (
              <TableRow key={student.studentNo}>
                <TableCell className='font-semibold'>
                  {student.studentNo}
                </TableCell>
                <TableCell>{student.fullName}</TableCell>
                <TableCell>{student.regCode}</TableCell>
                <TableCell>{student.studentType}</TableCell>
              </TableRow>
            ))}
          </Table>
        </ScrollArea>
        <AlertDialogFooter className='mt-auto justify-center'>
          <AlertDialogAction onClick={handleEnlistment}>
            <div
              className='flex justify-center'
              enlistmentStatus={enlistmentStatus}
            >
              Enlist Students
            </div>
          </AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default MultipleEnlistmentConfirmationDialogForm;
