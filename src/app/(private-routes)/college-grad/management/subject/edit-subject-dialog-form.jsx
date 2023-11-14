import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
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
import { SubjectSchema } from '@/lib/constants/schema/college-grad/edit-subject';
import { unitsForSubject } from '@/lib/constants/units-subjects';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Edit } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function EditSubjectDialogForm({ disabled, selectedSubject }) {
  const editSubjectForm = useForm({
    resolver: zodResolver(SubjectSchema),
  });

  editSubjectForm.watch();

  useEffect(() => {
    if (selectedSubject) {
      Object.keys(selectedSubject).forEach((key) => {
        editSubjectForm.setValue(key, selectedSubject[key]);
      });
    }

    editSubjectForm.setValue('isSure', false); // keeps the checkbox unchecked
  }, [selectedSubject, editSubjectForm]);

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
          <DialogTitle>Edit Subject</DialogTitle>
          <DialogDescription>Edit a Subject to the system</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={editSubjectForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...editSubjectForm}>
            <ScrollArea className='w-full'>
              {/* Subject Code */}
              <InputFormField
                form={editSubjectForm}
                title={'Subject Code'}
                placeholder={'Subject Code'}
                fieldName={'subjectCode'}
              />
              {/* Subject Name */}
              <InputFormField
                form={editSubjectForm}
                title={'Subject Name'}
                placeholder={'Subject Name'}
                fieldName={'subjectName'}
              />
              {/* Units */}
              <SelectFormField
                form={editSubjectForm}
                content={unitsForSubject}
                title='Units'
                placeholder='Select Unit'
                fieldName='units'
              />
              <div className='flex justify-start my-4'>
                <CheckBoxFormField
                  form={editSubjectForm}
                  title={'Are you sure?'}
                  description={
                    'Double check if all inputs are correct to make sure there are no input errors.'
                  }
                  fieldName={'isSure'}
                />
              </div>
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    editSubjectForm.reset();
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type='submit'
                disabled={!editSubjectForm.getValues().isSure}
              >
                Save Changes
              </Button>
            </DialogFooter>
          </Form>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditSubjectDialogForm;
