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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Diff, MinusCircle, Printer } from 'lucide-react';
import { useEffect, useState } from 'react';
import * as React from 'react';

import AddClassDialogForm from './college-add-class';

function AddDropDialogForm({ selectedStudent, disabled }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleRowSelectionChange = (subject) => {
    const isSubjectSelected = selectedSubjects.some(
      (selectedSubject) => selectedSubject.class === subject.class,
    );

    if (isSubjectSelected) {
      setSelectedSubjects((prevSelectedSubjects) =>
        prevSelectedSubjects.filter(
          (selectedSubject) => selectedSubject.class !== subject.class,
        ),
      );
    } else {
      setSelectedSubjects((prevSelectedSubjects) => [
        ...prevSelectedSubjects,
        subject,
      ]);
    }
  };

  // Reset checkboxes whenever new student is selected
  useEffect(() => {
    setSelectedSubjects([]);
  }, [selectedStudent]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          disabled={disabled}
        >
          {' '}
          <Diff className='w-4 h-4 mr-2' />
          Add Drop
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[1000px] h-[700px] flex flex-col overflow-auto'>
        <DialogHeader>
          <DialogTitle className='font-bold text-2xl'>
            Enlistment Form 5A
          </DialogTitle>
          <DialogDescription>Add or drop subjects.</DialogDescription>
        </DialogHeader>
        <div className='justify-right flex flex-row ml-auto gap-2 items-center'>
          {/* Cancel Class */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant='outline'
                selectedSubjects={selectedSubjects[0]}
                disabled={Object.keys(selectedSubjects).length == 0}
              >
                <MinusCircle className='w-4 h-4 mr-2' />
                Cancel Class
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='md:max-w-[700px] h-[380px] overflow-auto'>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Proceeding will result in the cancellation of the following
                  subjects:
                </AlertDialogDescription>
              </AlertDialogHeader>
              <ScrollArea className='overflow-y-auto flex-grow'>
                <Table>
                  <TableHeader className='text-black'>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Credits</TableHead>
                    </TableRow>
                  </TableHeader>
                  {selectedSubjects.map((subject) => (
                    <TableRow key={subject.class}>
                      <TableCell className='font-semibold'>
                        {subject.class}
                      </TableCell>
                      <TableCell>{subject.section}</TableCell>
                      <TableCell>{subject.schedule}</TableCell>
                      <TableCell>{subject.credits}</TableCell>
                    </TableRow>
                  ))}
                </Table>
              </ScrollArea>
              <div className='mt-auto'>
                <AlertDialogFooter className='bottom-0 right-0 w-full'>
                  <AlertDialogCancel
                    onClick={() => {
                      setSelectedSubjects([]);
                    }}
                  >
                    Exit
                  </AlertDialogCancel>
                  <AlertDialogAction>Cancel Subject/s</AlertDialogAction>
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialog>

          {/* Add Class */}
          <AddClassDialogForm
            selectedSubjects={selectedSubjects[0]}
            disabled={Object.keys(selectedSubjects).length != 0}
          />

          {/* Print SER, Assessment Form and Generate Print ID */}
          <Popover>
            <PopoverTrigger>
              <Button variant='outline'>
                <Printer className='w-4 h-4' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col gap-3'>
              <Button variant='no_outline' className='justify-start'>
                Print SER
              </Button>
              <Button variant='no_outline'>Print Assessment</Button>
              <Button variant='no_outline'>Generate Print ID</Button>
            </PopoverContent>
          </Popover>
        </div>

        <ScrollArea className='overflow-y-auto flex-grow'>
          <Table className='mt-[-5px]'>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Credits</TableHead>
              </TableRow>
            </TableHeader>
            {selectedStudent?.addDropClassList?.map((subject, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    className='align-center'
                    checked={selectedSubjects.some(
                      (selectedSubject) =>
                        selectedSubject.class === subject.class,
                    )}
                    onCheckedChange={() => handleRowSelectionChange(subject)}
                  />
                </TableCell>
                <TableCell>{subject.class}</TableCell>
                <TableCell>{subject.section}</TableCell>
                <TableCell>{subject.section}</TableCell>
                <TableCell>{subject.credits}</TableCell>
              </TableRow>
            ))}
          </Table>

          {/* Student Profile */}
          <div className='mt-10' />
          <Card className='w-1/2'>
            <CardHeader>
              <CardTitle className='justify-left text-xl font-bold'>
                Student Profile
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className='justify-left flex flex-row mt-5'>
                <div className='flex flex-col font-semibold text-sm'>
                  <p className='mt-1'>Last Name</p>
                  <p className='mt-1'>First Name</p>
                  <p className='mt-1'>Middle Name</p>
                  <p className='mt-1'>Program</p>
                  <p className='mt-1'>Year Level</p>
                  <p className='mt-1'>Registration Code</p>
                  <p className='mt-1'>Status</p>
                </div>
                <div className='flex flex-col text-sm ml-10'>
                  <p className='mt-1'>{selectedStudent?.lastName}</p>
                  <p className='mt-1'>{selectedStudent?.firstName}</p>
                  <p className='mt-1'>{selectedStudent?.middleName}</p>
                  <p className='mt-1'>{selectedStudent?.program}</p>
                  <p className='mt-1'>{selectedStudent?.yearLevel}</p>
                  <p className='mt-1'>{selectedStudent?.regCode}</p>
                  <p className='mt-1'>{selectedStudent?.enrollmentStatus}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <DialogFooter className='w-full flex justify-end mt-4'>
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default AddDropDialogForm;
