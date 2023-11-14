import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import DateFormField from '@/components/component/form/date-formfield';
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
import { faculties } from '@/lib/constants/fake-data/faculties';
import { ClassSchema } from '@/lib/constants/schema/college-grad/edit-class';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Edit } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ScheduleInformation from './schedule-information';

function EditClassDialogForm({ disabled, selectedClass }) {
  const [schedule, setSchedule] = useState([]);

  const editClassForm = useForm({
    resolver: zodResolver(ClassSchema),
  });

  editClassForm.watch();

  useEffect(() => {
    if (selectedClass) {
      Object.keys(selectedClass).forEach((key) => {
        editClassForm.setValue(key, selectedClass[key]);
      });
    }
  }, [selectedClass, editClassForm]);

  useEffect(() => {
    setSchedule(selectedClass?.scheduleInformation);
  }, [selectedClass]);

  function onSubmit(values) {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Changes has been Saved.</>,
    });

    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <Edit className='w-4 h-4 mr-2' />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Class Schedule</DialogTitle>
          <DialogDescription>Edit a Class to the system</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={editClassForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...editClassForm}>
            <ScrollArea className='h-96 w-full'>
              {/* Schedule Information */}
              <ScheduleInformation
                setSchedule={setSchedule}
                schedule={schedule}
              />

              <div className='mb-[1.31rem]'>
                <Label className='font-bold text-lg'>Subject Information</Label>
              </div>

              {/* Subject Code */}
              <InputFormField
                form={editClassForm}
                title={'Subject Code'}
                placeholder={'Subject Code'}
                fieldName={'subjectCode'}
                disabled={true}
                isOptional={true}
              />

              {/* Subject Name */}
              <InputFormField
                form={editClassForm}
                title={'Subject Name'}
                placeholder={'Subject Name'}
                fieldName={'subjectName'}
                disabled={true}
                isOptional={true}
              />

              {/* Faculty */}
              <SelectFormField
                form={editClassForm}
                content={faculties}
                title='Faculty'
                placeholder='Select Faculty'
                fieldName='professor'
              />

              {/* Maximum Slots */}
              <InputFormField
                form={editClassForm}
                title={'Maximum Slots'}
                placeholder={'Maximum Slots'}
                fieldName={'maximumSlots'}
              />

              <div className='flex justify-start my-4'>
                <CheckBoxFormField
                  form={editClassForm}
                  title={'With date range?'}
                  fieldName={'withDateRange'}
                />
              </div>

              <section className='w-full flex gap-2'>
                {/* Start Date */}
                <div className='w-full'>
                  <DateFormField
                    className=''
                    form={editClassForm}
                    title={'Start Date'}
                    placeholder={'Select date'}
                    fieldName={'startDate'}
                    disabled={!editClassForm.getValues().withDateRange}
                  />
                </div>

                {/* End Date */}
                <div className='w-full'>
                  <DateFormField
                    className='w-100'
                    form={editClassForm}
                    title={'End Date'}
                    placeholder={'Select date'}
                    fieldName={'endDate'}
                    disabled={!editClassForm.getValues().withDateRange}
                  />
                </div>
              </section>
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    editClassForm.reset();
                    setSchedule([]);
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type='submit'>Save Changes</Button>
              </DialogClose>
            </DialogFooter>
          </Form>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditClassDialogForm;
