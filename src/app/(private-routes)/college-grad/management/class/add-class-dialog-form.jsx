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
import { useForm } from 'react-hook-form';

function AddClassDialogForm() {
  const addUserForm = useForm({
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
          onSubmit={addUserForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...addUserForm}>
            <ScrollArea className='h-96 w-full'>
              {/* Subject Name */}
              <SelectFormField
                form={addUserForm}
                content={subjects}
                title='Subject Name'
                placeholder='Select Subject'
                fieldName='subjectName'
              />

              {/* Class Type */}
              <SelectFormField
                form={addUserForm}
                content={classTypes}
                title='Class Type'
                placeholder='Select Class Type'
                fieldName='classType'
              />

              {/* Faculty */}
              <SelectFormField
                form={addUserForm}
                content={faculties}
                title='Faculty'
                placeholder='Select Faculty'
                fieldName='professor'
              />

              {/* Section */}
              <SelectFormField
                form={addUserForm}
                content={sections}
                title='Section'
                placeholder='Select Section'
                fieldName='section'
              />

              {/* Maximum Slots */}
              <InputFormField
                form={addUserForm}
                title={'Maximum Slots'}
                placeholder={'Maximum Slots'}
                fieldName={'maximumSlots'}
              />

              <div className='flex justify-start my-4'>
                <CheckBoxFormField
                  form={addUserForm}
                  title={'With date range?'}
                  fieldName={'withDateRange'}
                />
              </div>

              <section className='w-full flex gap-2'>
                {/* Start Date */}
                <div className='w-full'>
                  <DateFormField
                    form={addUserForm}
                    title={'Start Date'}
                    placeholder={'Select date'}
                    fieldName={'startDate'}
                    disabled={!addUserForm.getValues().withDateRange}
                  />
                </div>

                {/* End Date */}
                <div className='w-full'>
                  <DateFormField
                    className='w-100'
                    form={addUserForm}
                    title={'End Date'}
                    placeholder={'Select date'}
                    fieldName={'endDate'}
                    disabled={!addUserForm.getValues().withDateRange}
                  />
                </div>
              </section>
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline' onClick={() => addUserForm.reset()}>
                  Cancel
                </Button>
              </DialogClose>

              <Button type='submit' onClick={() => addUserForm.reset()}>
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
