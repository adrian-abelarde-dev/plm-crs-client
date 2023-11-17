import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/components/ui/use-toast';
import { SubjectSchema } from '@/lib/constants/schema/college-grad/edit-subject';
import { unitsForSubject } from '@/lib/constants/units-subjects';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function AddSubjectDialogForm() {
  const addSubjectForm = useForm({
    resolver: zodResolver(SubjectSchema),
  });

  addSubjectForm.watch();

  useEffect(() => {
    addSubjectForm.setValue('isSure', false); // keeps the checkbox unchecked
  }, [addSubjectForm]);

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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus className='w-4 h-4 mr-2' />
          Add Subject
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Subject</AlertDialogTitle>
          <AlertDialogDescription>
            Add a Subject to the system
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form
          onSubmit={addSubjectForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...addSubjectForm}>
            <ScrollArea className='w-full'>
              {' '}
              {/* Subject Code */}
              <InputFormField
                form={addSubjectForm}
                title={'Subject Code'}
                placeholder={'Subject Code'}
                fieldName={'subjectCode'}
              />
              {/* Subject Name */}
              <InputFormField
                form={addSubjectForm}
                title={'Subject Name'}
                placeholder={'Subject Name'}
                fieldName={'subjectName'}
              />
              {/* Units */}
              <SelectFormField
                form={addSubjectForm}
                content={unitsForSubject}
                title='Units'
                placeholder='Select Unit'
                fieldName='units'
              />
              <div className='flex justify-start my-4'>
                <CheckBoxFormField
                  form={addSubjectForm}
                  title={'Are you sure?'}
                  description={
                    'Double check if all inputs are correct to make sure there are no input errors.'
                  }
                  fieldName={'isSure'}
                />
              </div>
            </ScrollArea>
            <AlertDialogFooter className='w-full flex justify-end mt-4'>
              <AlertDialogCancel asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    addSubjectForm.reset();
                  }}
                >
                  Cancel
                </Button>
              </AlertDialogCancel>

              <Button
                type='submit'
                disabled={!addSubjectForm.getValues().isSure}
              >
                Save Changes
              </Button>
            </AlertDialogFooter>
          </Form>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddSubjectDialogForm;
