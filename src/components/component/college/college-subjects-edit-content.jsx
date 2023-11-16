import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import React from 'react';
import { useForm } from 'react-hook-form';

import InputFormField from '../form/input-formfield';
import SelectFormField from '../form/select-formfield';

function CollegeSubjectsEditIndivOrMultiple({
  editIndivMultipleSubjects,
  selectedSubjects,
}) {
  const editSubjectForm = useForm({
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

  if (editIndivMultipleSubjects === 1) {
    return (
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-medium'>
            Edit Individual Subject
          </DialogTitle>
        </DialogHeader>

        <Form {...editSubjectForm}>
          <form onSubmit={editSubjectForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* Subject ID */}
              <InputFormField
                disabled={true}
                form={editSubjectForm}
                title='Subject ID'
                placeholder='CSE2SYNC202310001'
                fieldName='subjectId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />

              {/* Subject Title */}
              <SelectFormField
                form={editSubjectForm}
                content={collegeSubjectName}
                title='Subject Title'
                placeholder='Type title here...'
                fieldName='collegeSubjectName'
              />

              {/* Subject Type */}
              <SelectFormField
                form={editSubjectForm}
                content={collegeSubjectType}
                title='Subject Type'
                placeholder='Select subject type...'
                fieldName='collegeSubjectType'
              />

              {/* Active Status */}
              <SelectFormField
                form={editSubjectForm}
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
                <Button type='submit'>Save Changes</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    );
  } else if (editIndivMultipleSubjects > 1) {
    return (
      <DialogContent className='sm:max-w-[800px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-medium'>
            Edit Multiple Subjects
          </DialogTitle>
        </DialogHeader>

        <Form {...editSubjectForm}>
          <form onSubmit={editSubjectForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* Selected Subjects */}
              <Label className='font-medium text-xl'>Selected Subjects</Label>
              <Table className='w-full mt-2 mb-10'>
                <TableHeader>
                  <TableRow>
                    <TableHead className='font-medium text-black'>
                      Subject
                    </TableHead>
                    <TableHead className='font-medium text-black'>
                      Subject Type
                    </TableHead>
                    <TableHead className='font-medium text-black'>
                      Active Status
                    </TableHead>
                    <TableHead className='font-medium text-black'>
                      Created At
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedSubjects.map((_subject, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{_subject.subjectName}</TableCell>
                        <TableCell>{_subject.subjectType}</TableCell>
                        <TableCell>{_subject.activeStatus}</TableCell>
                        <TableCell>{_subject.dateCreated}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>

              {/* Subject Title */}
              <Label className='font-medium text-xl'>Subject Details</Label>
              <section className='w-full grid grid-cols-2 gap-4 mt-2'>
                <SelectFormField
                  form={editSubjectForm}
                  content={collegeSubjectType}
                  title='Subject Type'
                  placeholder='(Mixed)'
                  fieldName='collegeSubjectType'
                />

                {/* Active Status */}
                <SelectFormField
                  form={editSubjectForm}
                  content={collegeActiveStatus}
                  title='Active Status'
                  placeholder='(Mixed)'
                  fieldName='collegeStatus'
                />
              </section>

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
                <Button type='submit'>Save Changes</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    );
  }
}

export default CollegeSubjectsEditIndivOrMultiple;
