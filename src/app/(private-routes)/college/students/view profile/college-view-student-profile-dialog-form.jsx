import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { StudentSchema } from '@/lib/constants/schema/student';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function ViewStudentDialogForm({ disabled, selectedStudent }) {
  const editStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
  });

  useEffect(() => {
    if (selectedStudent) {
      Object.keys(selectedStudent).forEach((key) => {
        editStudentForm.setValue(key, selectedStudent[key]);
      });
    }
  }, [selectedStudent, editStudentForm]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          {' '}
          <User className='w-4 h-5 mr-2' />
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[480px]'>
        <DialogTitle>Student Information</DialogTitle>
        {/* Student Information */}
        <Card className='w-full mb-4'>
          <CardHeader>
            <CardTitle>
              {selectedStudent?.firstName} {selectedStudent?.middleName}{' '}
              {selectedStudent?.lastName}
              <Separator className='mt-4' />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Student No. */}
            <div className='flex flex-col'>
              <div className='flex flex-col'>
                <p className='text-slate-500 font-regular text-sm'>
                  Student Number
                </p>
                <p className='flex text-sm font-medium'>
                  <User className='h-5 w-4 mr-[0.62rem]' />
                  {selectedStudent?.studentNo}
                </p>
              </div>

              {/* Program */}
              <div className='flex flex-col mt-5'>
                <p className='text-slate-500 font-normal text-sm'> Program</p>
                <p className='flex text-sm font-medium'>
                  <User className='h-5 w-4 mr-[0.62rem]' />
                  {selectedStudent?.program}
                </p>
              </div>

              {/* Year & Block */}
              <div className='flex flex-col mt-5'>
                <p className='text-slate-500 font-normal text-sm'>
                  Year & Block
                </p>
                <p className='flex text-sm font-medium'>
                  <User className='h-5 w-4 mr-[0.62rem]' />
                  {selectedStudent?.yearLevel}-{selectedStudent?.block}
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className='flex flex-col mt-5'>
              <p className='text-slate-500 font-normal text-sm '>
                Email Address
              </p>
              <p className='flex text-sm font-medium'>
                <User className='h-5 w-4 mr-[0.62rem]' />
                {selectedStudent?.emailAddress}
              </p>
            </div>

            {/* Registration Code */}
            <div className='flex flex-col mt-5'>
              <p className='text-slate-500 font-regular text-sm '>
                Registration Code
              </p>
              <p className='flex text-sm font-medium'>
                <User className='h-5 w-4 mr-[0.62rem]' />
                {selectedStudent?.regCode}
              </p>
            </div>

            {/* Enrollment Status */}
            <div className='flex flex-col mt-5'>
              <p className='text-slate-500 font-normal text-sm'>
                Enrollment Status
              </p>
              <p className='flex text-sm font-medium'>
                <User className='h-5 w-4 mr-[0.62rem]' />
                {selectedStudent?.enrollmentStatus}
              </p>
            </div>
          </CardContent>
        </Card>
        <DialogFooter className='w-full flex justify-end mt-4'>
          <DialogClose asChild>
            <Button type='submit'>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewStudentDialogForm;
