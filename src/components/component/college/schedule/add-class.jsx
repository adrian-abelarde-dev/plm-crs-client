'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
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
  fakeCollegeClassRestrictions,
  fakeCollegeFaculty,
} from '@/lib/constants/fake-data/college-schedule';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import {
  fakeCollegeClassResTemplate,
  fakeCollegeFacultyTemplate,
} from '@/lib/constants/table-templates/college/college-schedule-table';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import AddSchedClassHours from './add-class-class-hours';
import AddSchedClassInfo from './add-class-class-info';
import AddFacultyDialogForm from './faculty-add-faculty';
import DeleteFacultyDialogForm from './faculty-delete-faculty';
import EditFacultyDialogForm from './faculty-edit-faculty';
import AddClassResDialogForm from './restrictions-add-restrictions';
import DeleteClassResDialogForm from './restrictions-delete-restrictions';
import EditClassResDialogForm from './restrictions-edit-restrictions';

function AddClassUndergrad() {
  const addClassForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });
  const [facultySelection, setFacultySelection] = useState({});
  const [classResSelection, setClassResSelection] = useState({});

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
        <Button>Add Class</Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[1280px] h-5/6 overflow-auto'>
        <DialogHeader>
          <DialogTitle className='font-bold text-2xl'>Add Class</DialogTitle>
        </DialogHeader>

        <Form {...addClassForm}>
          <form onSubmit={addClassForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-4 mt-3'>
              <AddSchedClassInfo addClassForm={addClassForm} />

              {/* Faculty Table */}
              <TableMRT
                className='pt-5'
                template={fakeCollegeFacultyTemplate}
                data={fakeCollegeFaculty}
                title={
                  <Label className='font-semibold text-xl pt-3'>Faculty</Label>
                }
                searchPlaceholder='Search faculty...'
                isCheckBoxVisible={true}
                isFullscreen={false}
                rowSelection={facultySelection}
                setRowSelection={setFacultySelection}
                RightButtons={
                  <>
                    <DeleteFacultyDialogForm
                      disabled={
                        Object.keys(facultySelection).length === 0 ||
                        Object.keys(facultySelection).length > 1
                      }
                    />
                    <EditFacultyDialogForm
                      disabled={
                        Object.keys(facultySelection).length === 0 ||
                        Object.keys(facultySelection).length > 1
                      }
                    />
                    <AddFacultyDialogForm />
                  </>
                }
              />
              <AddSchedClassHours />

              {/* Table for Class Restriction*/}
              <TableMRT
                className='pt-3'
                template={fakeCollegeClassResTemplate}
                data={fakeCollegeClassRestrictions}
                title={
                  <Label className='font-semibold text-xl'>
                    Class Restriction
                  </Label>
                }
                searchPlaceholder='Search restriction...'
                isCheckBoxVisible={true}
                isFullscreen={false}
                rowSelection={classResSelection}
                setRowSelection={setClassResSelection}
                RightButtons={
                  <>
                    <DeleteClassResDialogForm
                      disabled={
                        Object.keys(classResSelection).length === 0 ||
                        Object.keys(classResSelection).length > 1
                      }
                    />
                    <EditClassResDialogForm
                      disabled={
                        Object.keys(classResSelection).length === 0 ||
                        Object.keys(classResSelection).length > 1
                      }
                    />
                    <AddClassResDialogForm />
                  </>
                }
              />

              {/* Checkbox for Confirmation */}
              <div className='items-top flex space-x-4 pt-2'>
                <Checkbox id='confirm' />
                <div className='grid gap-1 leading-none'>
                  <label
                    htmlFor='confirm'
                    className='text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Are you sure?
                  </label>
                  <p className='text-sm text-muted-foreground w-72'>
                    Double check if all inputs are correct to make sure there
                    are no input errors.
                  </p>
                  <DialogFooter className='mt-4 font-semibold'>
                    <Button type='submit' className='w-80'>
                      Add Schedule
                    </Button>
                  </DialogFooter>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddClassUndergrad;
