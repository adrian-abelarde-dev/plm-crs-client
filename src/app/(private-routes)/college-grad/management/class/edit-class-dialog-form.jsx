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
import { ClassSchema } from '@/lib/constants/schema/edit-class';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Edit } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function EditClassDialogForm({ disabled, selectedClass }) {
  const editUserForm = useForm({
    resolver: zodResolver(ClassSchema),
  });

  useEffect(() => {
    if (selectedClass) {
      Object.keys(selectedClass).forEach((key) => {
        editUserForm.setValue(key, selectedClass[key]);
      });
    }
  }, [selectedClass, editUserForm]);

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
          <DialogTitle>Faculty Details</DialogTitle>
          <DialogDescription>Edit a Faculty to the system</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={editUserForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...editUserForm}>
            <ScrollArea className='h-96 w-full'>
              {/* Subject Code */}
              <InputFormField
                form={editUserForm}
                title={'Subject Code'}
                placeholder={'Subject Code'}
                fieldName={'subjectCode'}
                disabled={true}
                isOptional={true}
              />

              {/* Subject Name */}
              <InputFormField
                form={editUserForm}
                title={'Subject Name'}
                placeholder={'Subject Name'}
                fieldName={'subjectName'}
                disabled={true}
                isOptional={true}
              />

              {/* Faculty */}
              <SelectFormField
                form={editUserForm}
                content={faculties}
                title='Faculty'
                placeholder='Select Faculty'
                fieldName='professor'
              />

              {/* Maximum Slots */}
              <InputFormField
                form={editUserForm}
                title={'Maximum Slots'}
                placeholder={'Maximum Slots'}
                fieldName={'maximumSlots'}
              />

              <div className='flex justify-start my-4'>
                <CheckBoxFormField
                  form={editUserForm}
                  title={'With date range?'}
                  fieldName={'withDateRange'}
                />
              </div>

              <section className='w-full flex gap-2'>
                {/* Start Date */}
                <div className='w-full'>
                  <DateFormField
                    className=''
                    form={editUserForm}
                    title={'Start Date'}
                    placeholder={'Select date'}
                    fieldName={'startDate'}
                    disabled={!editUserForm.getValues().withDateRange}
                  />
                </div>

                {/* End Date */}
                <div className='w-full'>
                  <DateFormField
                    className='w-100'
                    form={editUserForm}
                    title={'End Date'}
                    placeholder={'Select date'}
                    fieldName={'endDate'}
                    disabled={!editUserForm.getValues().withDateRange}
                  />
                </div>
              </section>
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline' onClick={() => editUserForm.reset()}>
                  Cancel
                </Button>
              </DialogClose>

              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </Form>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditClassDialogForm;
