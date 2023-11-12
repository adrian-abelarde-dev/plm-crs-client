'use client';

import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
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
import { toast } from '@/components/ui/use-toast';
import { collegeGradFacultyData } from '@/lib/constants/fake-data/faculty-management';
import {
  FacultySchema,
  facultySchemaDefaultValues,
} from '@/lib/constants/schema/edit-faculty';
import {
  collegeGradFacultyRowActions,
  collegeGradFacultyTemplate,
} from '@/lib/constants/table-templates/college-grad/faculty-management';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Printer, View } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const facultyStatus = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
  { label: 'Pending to Assign', value: 'Pending to Assign' },
];

function CollageGradManagementFaculty() {
  const [selectedFaculty, setSelectedFaculty] = useState({});

  return (
    <main className='p-6'>
      {/* Table for Activities */}
      <TableMRT
        template={collegeGradFacultyTemplate}
        data={collegeGradFacultyData}
        title='Faculty'
        searchPlaceholder='Search Faculty'
        isCheckBoxVisible={true}
        rowSelection={selectedFaculty}
        setRowSelection={setSelectedFaculty}
        RightButtons={
          <>
            <EditUserDialogForm
              disabled={
                Object.keys(selectedFaculty).length > 1 ||
                Object.keys(selectedFaculty).length === 0
              }
            />
            <Button disabled={Object.keys(selectedFaculty).length > 1}>
              <Printer className='w-4 h-4 mr-2' />
              Print SER
            </Button>
          </>
        }
        RowActions={
          <>
            {collegeGradFacultyRowActions.map((rowAction) => {
              return (
                <Button
                  key={rowAction.label}
                  className={cn(
                    `text-zinc-900 justify-between hover:bg-zinc-100`,
                    // If label includes 'trash' or 'delete' make the text red and icon
                    // color red
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

function CustomFacultyStatusBadges({ value }) {
  switch (value) {
    case 'Active':
      return (
        <Badge
          variant='ghost'
          className={'bg-[#c0e6dc] text-[#00b983] border-[#00b983]'}
        >
          {value}
        </Badge>
      );
    case 'Pending to Assign':
      return (
        <Badge
          variant='ghost'
          className={'bg-[#fff9e1] text-[#fec141] border-[#fec141]'}
        >
          {value}
        </Badge>
      );
    case 'Inactive':
      return (
        <Badge
          variant='ghost'
          className={'bg-[#fff9e1] text-[#fec141] border-[#fec141] '}
        >
          {value}
        </Badge>
      );
    default:
      return <Badge variant='outline'>Unknown</Badge>;
  }
}

function EditUserDialogForm({ disabled }) {
  const editUserForm = useForm({
    resolver: zodResolver(FacultySchema),
    defaultValues: { ...facultySchemaDefaultValues },
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
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <View className='w-4 h-4 mr-2' />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Faculty Details</DialogTitle>
          <DialogDescription>Edit a Faculty to the system</DialogDescription>
        </DialogHeader>
        <Form {...editUserForm}>
          <form
            onSubmit={editUserForm.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <InputFormField
              className=''
              form={editUserForm}
              title={'Faculty ID'}
              placeholder={'Faculty ID'}
              fieldName={'facultyId'}
            />

            <section className='w-full flex gap-2'>
              {/* First Name */}
              <InputFormField
                form={editUserForm}
                title='First Name'
                placeholder='Enter first name'
                fieldName='firstName'
              />
              {/* Middle Name */}
              <InputFormField
                form={editUserForm}
                title='Middle Name'
                placeholder='Enter middle name'
                fieldName='middleName'
              />
            </section>

            {/* Last Name */}
            <InputFormField
              form={editUserForm}
              title='Last Name'
              placeholder='Enter last name'
              fieldName='lastName'
            />

            <SelectFormField
              form={editUserForm}
              content={facultyStatus}
              title='User Type'
              placeholder='Select'
              fieldName='status'
              customItem={CustomFacultyStatusBadges}
            />

            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline' onClick={() => editUserForm.reset()}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CollageGradManagementFaculty;
