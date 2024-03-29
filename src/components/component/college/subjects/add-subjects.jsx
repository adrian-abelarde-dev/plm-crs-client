import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import {
  collegeActiveStatus,
  collegeSubjectName,
  collegeSubjectType,
} from '@/lib/constants/fake-data/college-subjects';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';

function AddSubjectsUndergrad() {
  const addSubjectForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });

  function onSubmit(values) {
    console.log(values);
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Changes has been Saved.</>,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Subject</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Add Subject</DialogTitle>
        </DialogHeader>

        <Form {...addSubjectForm}>
          <form onSubmit={addSubjectForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* Subject ID */}
              <InputFormField
                disabled={true}
                form={addSubjectForm}
                title='Subject ID'
                placeholder='CSE2SYNC202310001'
                fieldName='subjectId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />

              {/* Subject Title */}
              <SelectFormField
                form={addSubjectForm}
                content={collegeSubjectName}
                title='Subject Title'
                placeholder='Type title here...'
                fieldName='collegeSubjectName'
              />

              {/* Subject Type */}
              <SelectFormField
                form={addSubjectForm}
                content={collegeSubjectType}
                title='Subject Type'
                placeholder='Select subject type...'
                fieldName='collegeSubjectType'
              />

              {/* Active Status */}
              <SelectFormField
                form={addSubjectForm}
                content={collegeActiveStatus}
                title='Active Status'
                placeholder='Select status...'
                fieldName='collegeStatus'
              />

              {/* Checkbox for Confirmation */}
              <div className='items-top flex space-x-2 pt-2'>
                <Checkbox id='confirm' />
                <div className='grid gap-1.5 leading-none'>
                  <label
                    htmlFor='confirm'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Are you sure?
                  </label>
                  <p className='text-sm text-muted-foreground'>
                    Double check if all inputs are correct to make sure there
                    are no input errors.
                  </p>
                </div>
              </div>

              <DialogFooter className='w-full flex justify-end mt-4'>
                <DialogClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button type='submit'>Add Subject</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddSubjectsUndergrad;
