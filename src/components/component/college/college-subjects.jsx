'use client';

import TableMRT from '@/components/layouts/table-mrt';
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
import {
  fakeSubjectRowActions,
  fakeSubjects,
} from '@/lib/constants/fake-data/college-subjects';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArchiveIcon, Edit } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import InputFormField from '../form/input-formfield';
import SelectFormField from '../form/select-formfield';
import { toast } from '@/components/ui/use-toast';

export const collegeSubjectName = [
  {
    label: 'Synchronization and Concurrency',
    value: 'CSE2SYNC202310001',
  },
  {
    label: 'Database Management Systems',
    value: 'CSE2DBMS202310002',
  },
  {
    label: 'Operating Systems',
    value: 'CSE2OS202310003',
  },
  {
    label: 'Data Structures and Algorithms',
    value: 'CSE2DSA202310004',
  },
  {
    label: 'Computer Networks',
    value: 'CSE2CN202310005',
  },
  {
    label: 'Software Engineering',
    value: 'CSE2SE202310006',
  },
  {
    label: 'Artificial Intelligence',
    value: 'CSE2AI202310007',
  },
  {
    label: 'Machine Learning',
    value: 'CSE2ML202310008',
  },
  {
    label: 'Web Development',
    value: 'CSE2WD202310009',
  },
  {
    label: 'Mobile Application Development',
    value: 'CSE2MAD202310010',
  },
];

export const collegeSubjectType = [
  {
    label: 'Face-to-Face',
    value: 'f2f',
  },
  {
    label: 'Online',
    value: 'online',
  },
  {
    label: 'Lecture',
    value: 'lecture',
  },
  {
    label: 'Lab',
    value: 'lab',
  },
];

export const collegeActiveStatus = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

function ArchiveSubjectsUndergrad({ disabled }) {
  return (
    <Button
      disabled={disabled}
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <ArchiveIcon className='inline-block w-4 h-4 mr-2' />
      Archive
    </Button>
  );
}

function EditSubjectsUndergrad({ disabled }) {
  const editSubjectForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
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
  }
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
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Edit Individual Subject</DialogTitle>
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
                <Button type='submit'>Save Subject</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function AddSubjectsUndergrad() {
  const addSubjectForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
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
  }
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

function CollegeSubjectsPage() {
  const [selectedSubject, setSelectedSubject] = useState({});

  useEffect(() => {
    console.log({ selectedSubject });
  }, [selectedSubject]);

  const fakeSubjectTemplate = [
    {
      accessorKey: 'subjectName',
      id: 'subjectName',
      header: 'Subject',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'underGrad',
      id: 'underGrad',
      header: 'Type',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'subjectType',
      id: 'subjectType',
      header: 'Subject Type',
      filterVariant: 'fuzzy',
      Cell: ({ cell }) => {
        return (
          <Badge
            variant={
              cell.getValue() === 'Synchronous' ? 'outlinePrimary' : 'outline'
            }
          >
            {cell.getValue()}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'activeStatus',
      id: 'activeStatus',
      header: 'Active Status',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'dateCreated',
      id: 'dateCreated',
      header: 'Created At',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeSubjectTemplate}
        data={fakeSubjects}
        title='Subjects'
        description=''
        searchPlaceholder='Search subjects...'
        isCheckBoxVisible={true}
        rowSelection={selectedSubject}
        setRowSelection={setSelectedSubject}
        RightButtons={
          <div className='flex gap-2 items-center'>
            <ArchiveSubjectsUndergrad
              disabled={Object.keys(selectedSubject).length === 0}
            />
            <EditSubjectsUndergrad
              disabled={Object.keys(selectedSubject).length === 0}
            />
            <AddSubjectsUndergrad />
          </div>
        }
        RowActions={
          <>
            {fakeSubjectRowActions.map((rowAction) => {
              return (
                <Button
                  key={rowAction.label}
                  className={cn(
                    `text-zinc-900 justify-between hover:bg-zinc-100`,
                    (rowAction.label.toLowerCase().includes('trash') ||
                      rowAction.label.toLowerCase().includes('delete')) &&
                      'text-destructive hover:text-red-400',
                  )}
                  variant='ghost'
                >
                  {rowAction.label}
                  {rowAction.icon}
                </Button>
              );
            })}
          </>
        }
      />
    </main>
  );
}

export default CollegeSubjectsPage;
