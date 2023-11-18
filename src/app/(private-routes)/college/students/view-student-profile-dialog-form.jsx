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
import { Label } from '@/components/ui/label';
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
          <User className='w-4 h-4 mr-2' />
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
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
                <Label className='text-slate-500 font-normal'>
                  Student Number
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  <User className='h-4 w-4 mr-[0.62rem]' />
                  {selectedStudent?.studentNo}
                </Label>
              </div>

              {/* Program */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'> Program</Label>
                <Label className='flex mt-[0.44rem]'>
                  <User className='h-4 w-4 mr-[0.62rem]' />
                  {selectedStudent?.program}
                </Label>
              </div>

              {/* Year & Block */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>
                  Year & Block
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  <User className='h-4 w-4 mr-[0.62rem]' />
                  {selectedStudent?.yearAndBlock}
                </Label>
              </div>
            </div>

            {/* Email Address */}
            <div className='flex flex-col mt-5'>
              <Label className='text-slate-500 font-normal'>
                Email Address
              </Label>
              <Label className='flex mt-[0.44rem]'>
                <User className='h-4 w-4 mr-[0.62rem]' />
                {selectedStudent?.emailAddress}
              </Label>
            </div>

            {/* Registration Code */}
            <div className='flex flex-col mt-5'>
              <Label className='text-slate-500 font-normal'>
                Registration Code
              </Label>
              <Label className='flex mt-[0.44rem]'>
                <User className='h-4 w-4 mr-[0.62rem]' />
                {selectedStudent?.regCode}
              </Label>
            </div>

            {/* Enrollment Status */}
            <div className='flex flex-col mt-5'>
              <Label className='text-slate-500 font-normal'>
                Enrollment Status
              </Label>
              <Label className='flex mt-[0.44rem]'>
                <User className='h-4 w-4 mr-[0.62rem]' />
                {selectedStudent?.enrollmentStatus}
              </Label>
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
