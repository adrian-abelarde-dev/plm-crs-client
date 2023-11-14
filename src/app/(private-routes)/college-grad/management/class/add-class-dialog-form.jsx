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
import { classTypes } from '@/lib/constants/fake-data/class-type';
import { faculties } from '@/lib/constants/fake-data/faculties';
import { sections } from '@/lib/constants/fake-data/section';
import { subjects } from '@/lib/constants/fake-data/subjects';
import { ClassSchema } from '@/lib/constants/schema/edit-class';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import ScheduleInformation from './schedule-information';

function AddClassDialogForm() {
  const [schedule, setSchedule] = useState([]);
  const addClassForm = useForm({
    resolver: zodResolver(ClassSchema),
    defaultValues: {
      subjectName: '',
      classType: '',
      professor: '',
      section: '',
      maximumSlots: '',
      withDateRange: false,
      startDate: '',
      endDate: '',
    },
  });

  function onSubmit(values) {
    if (schedule.length >= 1) {
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
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className='w-4 h-4 mr-2' />
          Add Class
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Class Schedule</DialogTitle>
          <DialogDescription>
            Add a Class Schedule to the system
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={addClassForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...addClassForm}>
            <ScrollArea className='h-96 w-full'>
              <div className='mb-[1.31rem] '>
                <Label className='font-bold text-lg'>Subject Information</Label>
              </div>
              {/* Subject Name */}
              <SelectFormField
                form={addClassForm}
                content={subjects}
                title='Subject Name'
                placeholder='Select Subject'
                fieldName='subjectName'
              />

              {/* Class Type */}
              <SelectFormField
                form={addClassForm}
                content={classTypes}
                title='Class Type'
                placeholder='Select Class Type'
                fieldName='classType'
              />

              {/* Faculty */}
              <SelectFormField
                form={addClassForm}
                content={faculties}
                title='Faculty'
                placeholder='Select Faculty'
                fieldName='professor'
              />

              {/* Section */}
              <SelectFormField
                form={addClassForm}
                content={sections}
                title='Section'
                placeholder='Select Section'
                fieldName='section'
              />

              {/* Maximum Slots */}
              <InputFormField
                form={addClassForm}
                title={'Maximum Slots'}
                placeholder={'Maximum Slots'}
                fieldName={'maximumSlots'}
              />

              <div className='flex justify-start my-4'>
                <CheckBoxFormField
                  form={addClassForm}
                  title={'With date range?'}
                  fieldName={'withDateRange'}
                />
              </div>

              <section className='w-full flex gap-2'>
                {/* Start Date */}
                <div className='w-full'>
                  <DateFormField
                    form={addClassForm}
                    title={'Start Date'}
                    placeholder={'Select date'}
                    fieldName={'startDate'}
                    disabled={!addClassForm.getValues().withDateRange}
                  />
                </div>

                {/* End Date */}
                <div className='w-full'>
                  <DateFormField
                    className='w-100'
                    form={addClassForm}
                    title={'End Date'}
                    placeholder={'Select date'}
                    fieldName={'endDate'}
                    disabled={!addClassForm.getValues().withDateRange}
                  />
                </div>
              </section>

              {/* Schedule Information */}
              <ScheduleInformation
                setSchedule={setSchedule}
                schedule={schedule}
              />
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    addClassForm.reset();
                    setSchedule([]);
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button type='submit' onClick={() => addClassForm.reset()}>
                Add Class
              </Button>
            </DialogFooter>
          </Form>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddClassDialogForm;
