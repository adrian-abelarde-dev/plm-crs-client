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
  collegeSubjectType,
} from '@/lib/constants/fake-data/college-subjects';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import SelectFormField from '../../form/select-formfield';

function CollegeSubjectsEditMultiple({ selectedSubjects }) {
  const [defaultSubjectType, setDefaultSubjectType] = useState('');
  const [defaultActiveStatus, setDefaultActiveStatus] = useState('');
  const editSubjectForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });

  useEffect(() => {
    // check if all subjectType on selectedSubjects are all the same
    // if all are same, set the default value of subjectType to that value
    // else, set the default value of subjectType to '(Mixed)'
    // check if all activeStatus on selectedSubjects are all the same
    // if all are same, set the default value of activeStatus to that value
    // else, set the default value of activeStatus to '(Mixed)'
    // Extract unique values for subjectType and activeStatus
    const uniqueSubjectTypes = [
      ...new Set(selectedSubjects.map((subject) => subject.subjectType)),
    ];
    const uniqueActiveStatus = [
      ...new Set(selectedSubjects.map((subject) => subject.activeStatus)),
    ];

    // Determine default values based on uniqueness
    const defaultSubjectTypeValue =
      uniqueSubjectTypes.length === 1 ? uniqueSubjectTypes[0] : '(Mixed)';
    const defaultActiveStatusValue =
      uniqueActiveStatus.length === 1 ? uniqueActiveStatus[0] : '(Mixed)';

    // Set default values in state
    setDefaultSubjectType(defaultSubjectTypeValue);
    setDefaultActiveStatus(defaultActiveStatusValue);
  }, [editSubjectForm, selectedSubjects]);

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
                placeholder={defaultSubjectType}
                fieldName='collegeSubjectType'
              />

              {/* Active Status */}
              <SelectFormField
                form={editSubjectForm}
                content={collegeActiveStatus}
                title='Active Status'
                placeholder={defaultActiveStatus}
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
                  Double check if all inputs are correct to make sure there are
                  no input errors.
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

export default CollegeSubjectsEditMultiple;
