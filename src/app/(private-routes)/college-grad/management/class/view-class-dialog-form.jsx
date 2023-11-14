import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ClassSchema } from '@/lib/constants/schema/edit-class';
import { formatDateString } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Backpack,
  Book,
  Briefcase,
  Calendar,
  CornerDownRight,
  Presentation,
  School,
  User,
  View,
} from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function ViewClassDialogForm({ disabled, selectedClass }) {
  const editClassForm = useForm({
    resolver: zodResolver(ClassSchema),
  });

  useEffect(() => {
    if (selectedClass) {
      Object.keys(selectedClass).forEach((key) => {
        editClassForm.setValue(key, selectedClass[key]);
      });
    }
  }, [selectedClass, editClassForm]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <View className='w-4 h-4 mr-2' />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Class Schedule</DialogTitle>
          <DialogDescription>View a Class to the system</DialogDescription>
        </DialogHeader>

        <ScrollArea className='h-96 w-full'>
          {/* Class Information */}
          <Card className='w-full mb-4'>
            <CardHeader>
              <CardTitle>
                Class Information
                <Separator className='mt-4' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Class Id */}
              <div className='flex flex-col'>
                <Label className='text-slate-500 font-normal'>Class ID</Label>
                <Label className='flex mt-[0.44rem]'>
                  <User className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.classId}
                </Label>
              </div>

              {/* Subject Code */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>
                  Subject Code
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  <Briefcase className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.subjectCode}
                </Label>
              </div>

              {/* Subject Name */}
              <div className='flex flex-col mt-4'>
                <Label className='text-slate-500 font-normal'>
                  Subject Name
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  <Book className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.subjectName}
                </Label>
              </div>

              {/* Year Term */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Year/Term</Label>
                <Label className='flex mt-[0.44rem]'>
                  <School className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.yearTerm}
                </Label>
              </div>

              {/* Professor */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Professor</Label>
                <Label className='flex mt-[0.44rem]'>
                  <School className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.professor}
                </Label>
              </div>

              {/* Section */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Section</Label>
                <Label className='flex mt-[0.44rem]'>
                  <Backpack className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.section}
                </Label>
              </div>

              {/* Class Type */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Class Type</Label>
                <Label className='flex mt-[0.44rem]'>
                  <Presentation className='h-4 w-4 mr-[0.62rem]' />
                  {selectedClass?.classType}
                </Label>
              </div>

              {/* Year Class Schedule */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>
                  Class Schedule
                </Label>
                {selectedClass?.scheduleInformation.map((_class, index) => {
                  return (
                    <Label className='flex mt-[0.44rem]' key={index}>
                      <CornerDownRight className='h-4 w-4 mr-[0.62rem]' />
                      {`${_class.startTime} - ${_class.endTime} ${_class.classDay} - ${_class.room} ${_class.meetingType}`}
                    </Label>
                  );
                })}
              </div>

              {/* Start Date */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Start Date</Label>
                <Label className='flex mt-[0.44rem]'>
                  <Calendar className='h-4 w-4 mr-[0.62rem]' />
                  {formatDateString(selectedClass?.startDate)}
                </Label>
              </div>

              {/* End Date */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>End Date</Label>
                <Label className='flex mt-[0.44rem]'>
                  <Calendar className='h-4 w-4 mr-[0.62rem]' />
                  {formatDateString(selectedClass?.endDate)}
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Slot Information */}
          <Card className='w-full mb-4'>
            <CardHeader>
              <CardTitle>
                Slot Information
                <Separator className='mt-4' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Maximum Slots / Alotted Slots */}
              <div className='flex flex-col'>
                <Label className='text-slate-500 font-normal'>
                  Alotted Slots
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  {selectedClass?.maximumSlots}
                </Label>
              </div>

              {/* Remaining Slots */}
              <div className='flex flex-col mt-4'>
                <Label className='text-slate-500 font-normal'>
                  Alotted Slots
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  {selectedClass?.maximumSlots - selectedClass?.enrolledSlots}
                </Label>
              </div>

              {/* Enlisted */}
              <div className='flex flex-col mt-4'>
                <Label className='text-slate-500 font-normal'>
                  Enlisted Slots
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  {selectedClass?.enlistedSlots}
                </Label>
              </div>

              {/* Enrolled */}
              <div className='flex flex-col mt-4'>
                <Label className='text-slate-500 font-normal'>
                  Enrolled Slots
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  {selectedClass?.enrolledSlots}
                </Label>
              </div>
            </CardContent>
          </Card>
        </ScrollArea>
        <DialogFooter className='w-full flex justify-end mt-4'>
          <DialogClose asChild>
            <Button type='submit'>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewClassDialogForm;
