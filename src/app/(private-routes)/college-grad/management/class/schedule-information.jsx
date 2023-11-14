import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import { Button } from '@/components/ui/button';
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
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/components/ui/use-toast';
import { classDays } from '@/lib/constants/class-day';
import { meetingTypes } from '@/lib/constants/meeting-types';
import { rooms } from '@/lib/constants/rooms';
import { ScheduleSchema } from '@/lib/constants/schema/edit-class';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, CornerDownRight, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';

function ScheduleInformation({ setSchedule, schedule }) {
  const addScheduleForm = useForm({
    resolver: zodResolver(ScheduleSchema),
    defaultValues: {
      classDay: '',
      startTime: '',
      endTime: '',
      room: '',
      meetingType: '',
    },
  });

  addScheduleForm.watch(); // update watch fields every input update

  function onSubmit(values) {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Schedule has been added</>,
    });

    // setSchedule(values);
    // push values in setSchedule
    setSchedule((prev) => [...prev, values]);
  }

  return (
    <>
      <Dialog className='w-[100]'>
        <DialogTrigger asChild className=' mt-4 flex cursor-pointer'>
          <Label className='font-bold text-lg'>
            Schedule Information <Plus className='h-4 w-4 ml-2 mt-[0.35rem]' />
          </Label>
        </DialogTrigger>

        <DialogContent className='sm:max-w-[45rem]'>
          <DialogHeader>
            <DialogTitle>Class Schedule</DialogTitle>
            <DialogDescription>
              Add a Class Schedule to the system
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={addScheduleForm.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <Form {...addScheduleForm}>
              <ScrollArea className='h-96 w-full'>
                <div className='mb-[1.31rem]'>
                  <Label className='font-bold text-lg'>
                    Schedule Information
                  </Label>
                </div>

                {/* Class Day */}
                <SelectFormField
                  form={addScheduleForm}
                  content={classDays}
                  title='Class Day'
                  placeholder='Select Day'
                  fieldName='classDay'
                />

                {/* Start Time */}
                <InputFormField
                  form={addScheduleForm}
                  title={'Start Time'}
                  placeholder={'Start Time'}
                  fieldName={'startTime'}
                />

                {/* End Time */}
                <InputFormField
                  form={addScheduleForm}
                  title={'End Time'}
                  placeholder={'End Time'}
                  fieldName={'endTime'}
                />

                {/* Room */}
                <SelectFormField
                  form={addScheduleForm}
                  content={rooms}
                  title='Room'
                  placeholder='Select Room'
                  fieldName='room'
                />

                {/* Meeting Type */}
                <SelectFormField
                  form={addScheduleForm}
                  content={meetingTypes}
                  title='Meeting Type'
                  placeholder='Select Meeting Type'
                  fieldName='meetingType'
                />
              </ScrollArea>
              <DialogFooter className='w-full flex justify-end mt-4'>
                <DialogClose asChild>
                  <Button
                    variant='outline'
                    onClick={() => addScheduleForm.reset()}
                  >
                    Close
                  </Button>
                </DialogClose>

                <Button type='submit'>Add Schedule</Button>
              </DialogFooter>
            </Form>
          </form>
        </DialogContent>
      </Dialog>
      <div className='ml-4 mb-4'>
        {schedule?.map((_class, index) => {
          return (
            <Label className='flex mt-[0.44rem]' key={index}>
              <CornerDownRight className='h-4 w-4 mr-[0.62rem]' />
              {`${_class.startTime} - ${_class.endTime} ${_class.classDay} - ${_class.room} ${_class.meetingType}`}
            </Label>
          );
        })}
      </div>
      {schedule?.length > 0 && (
        <a
          onClick={() => setSchedule([])}
          variant='ghost'
          className='text-xs underline cursor-pointer text-slate-500 '
        >
          Clear Schedule
        </a>
      )}
    </>
  );
}

export default ScheduleInformation;
