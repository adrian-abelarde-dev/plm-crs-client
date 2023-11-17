'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from '@/components/ui/use-toast';
import {
  collegeParentClassCode,
  collegeSchoolYears,
  collegeSection,
  collegeSlots,
  collegeYearLevel,
  fakeCollegeClassHours,
  fakeCollegeClassRestrictions,
  fakeCollegeFaculty,
} from '@/lib/constants/fake-data/college-schedule';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import {
  fakeCollegeClassHoursTemplate,
  fakeCollegeClassResTemplate,
  fakeCollegeFacultyTemplate,
} from '@/lib/constants/table-templates/college/college-schedule-table';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, HelpCircle } from 'lucide-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';
import AddFacultyDialogForm from './faculty-add-faculty';
import DeleteFacultyDialogForm from './faculty-delete-faculty';
import EditFacultyDialogForm from './faculty-edit-faculty';
import AddClassHourDialogForm from './hours-add-class-hours';
import DeleteClassHourDialogForm from './hours-delete-class-hours';
import EditClassHourDialogForm from './hours-edit-class-hours';
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
      <DialogContent className='md:max-w-[1024px] h-5/6 overflow-auto'>
        <DialogHeader>
          <DialogTitle className='font-bold text-2xl'>Add Class</DialogTitle>
        </DialogHeader>

        <Form {...addClassForm}>
          <form onSubmit={addClassForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-4 mt-3'>
              {/* Class Information */}
              <Label className='font-semibold text-xl pt-4'>
                Class Information
              </Label>
              {/* Schedule ID */}
              <InputFormField
                disabled={true}
                form={addClassForm}
                title={
                  <Label className='font-medium text-sm'>Schedule ID</Label>
                }
                placeholder='CETBSCS0401'
                fieldName='scheduleId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />
              {/* Subject */}
              <InputFormField
                form={addClassForm}
                title={<Label className='font-medium text-sm'>Subject</Label>}
                placeholder='Enter subject'
                fieldName='scheduleSubject'
              />
              {/* Section, Credits, Alloted Slots */}
              <section className='w-full grid grid-cols-3 gap-2 '>
                {/* Section */}
                <SelectFormField
                  form={addClassForm}
                  content={collegeSection}
                  title={<Label className='font-medium text-sm'>Section</Label>}
                  placeholder='1'
                  fieldName='scheduleSection'
                />
                {/* Credits */}
                <SelectFormField
                  form={addClassForm}
                  content={collegeSection}
                  title={<Label className='font-medium text-sm'>Credits</Label>}
                  placeholder='1'
                  fieldName='scheduleCredits'
                />
                {/* Alloted Slots */}
                <SelectFormField
                  form={addClassForm}
                  content={collegeSlots}
                  title={
                    <Label className='font-medium text-sm'>
                      Allotted Slots
                    </Label>
                  }
                  placeholder='1'
                  fieldName='scheduleSlots'
                />
              </section>
              {/* Parent Class Code */}
              <SelectFormField
                form={addClassForm}
                content={collegeParentClassCode}
                title={
                  <Label className='font-medium text-sm'>
                    Parent Class Code
                  </Label>
                }
                placeholder='Enter parent class code'
                fieldName='scheduleParentClassCode'
              />
              {/* Minimum Year Level, AY-SEM, College */}
              <section className='w-full grid grid-cols-3 gap-2 '>
                {/* Minimum Year Level */}
                <SelectFormField
                  form={addClassForm}
                  content={collegeYearLevel}
                  title={
                    <Label className='font-medium text-sm'>
                      Minimum Year Level
                    </Label>
                  }
                  placeholder='Enter minimum year level'
                  fieldName='scheduleMinYrLevel'
                />
                {/* AY-SEM */}
                <SelectFormField
                  disabled={true}
                  form={addClassForm}
                  content={collegeSchoolYears}
                  title={<Label className='font-medium text-sm'>AY-SEM</Label>}
                  placeholder='20231'
                  fieldName='scheduleAYSEM'
                />
                {/* College */}
                <SelectFormField
                  form={addClassForm}
                  content={collegeSchoolYears}
                  title={<Label className='font-medium text-sm'>College</Label>}
                  placeholder='Enter AY-SEM'
                  fieldName='scheduleCollege'
                />
              </section>
              {/* Faculty Table */}
              <TableMRT
                className='pt-5'
                template={fakeCollegeFacultyTemplate}
                data={fakeCollegeFaculty}
                title={
                  <Label className='font-semibold text-xl pt-3'>Faculty</Label>
                }
                searchPlaceholder='Search faculty...'
                isFullscreen={false}
                RightButtons={
                  <>
                    <DeleteFacultyDialogForm />
                    <EditFacultyDialogForm />
                    <AddFacultyDialogForm />
                  </>
                }
              />
              {/* Class Information */}
              <Label className='font-semibold text-xl pt-2'>Class Hours</Label>
              {/* Is the class hours to be announced or unknown yet? */}
              <div className='grid grid-cols-1 space-y-2'>
                <div className='flex gap-8'>
                  <div className='flex '>
                    <Label className='font-medium text-sm'>
                      Is the class hours to be announced or unknown yet?
                    </Label>
                    <span className='text-red-500'> *</span>
                  </div>
                  <div className='flex'>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className='flex mt-1'>
                            <HelpCircle className='h-4 w-4 inline-flex' />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className='h-20 w-64 bg-black text-white justify-evenly tooltip-right'>
                          <p className='text-justify'>
                            The University Registrar is appealing to your
                            department to accomplish this part professionally by
                            truthfully stating the room assignment for planning
                            purposes.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <RadioGroup defaultValues='comfortable'>
                  <div className='flex gap-8'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='yes'
                        id='tbaYes'
                        className='text-black'
                      />
                      <Label htmlFor='tbaYes'>Yes</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='no'
                        id='tbaNo'
                        className='text-black'
                      />
                      <Label htmlFor='tbaNo'>No</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              {/* Class has no definite time and day? */}
              <div className='grid grid-cols-1 mt-4'>
                <div className='flex gap-8 items-center'>
                  <div className='flex flex-col'>
                    <Label className='font-medium text-sm mb-2'>
                      Class has no definite time and day?
                      <span className='text-red-500'> *</span>
                    </Label>
                    <Label className='font-medium text-sm text-zinc-500 pb-4'>
                      (e.g. Thesis / Practicum / Field / College of Music)
                    </Label>
                  </div>
                  <div className='flex'>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className='flex'>
                            <HelpCircle className='h-4 w-4 inline-flex' />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className='h-20 w-64 bg-black text-white justify-evenly tooltip-right'>
                          <p className='text-justify'>
                            The University Registrar is appealing to your
                            department to accomplish this part professionally by
                            truthfully stating the room assignment for planning
                            purposes.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <RadioGroup defaultValues=''>
                  <div className='flex gap-8'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='yes'
                        id='definiteTimeDayYes'
                        className='text-black'
                      />
                      <Label htmlFor='definiteTimeDayYes'>Yes</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='no'
                        id='definiteTimeDayNo'
                        className='text-black'
                      />
                      <Label htmlFor='definiteTimeDayNo'>No</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              {/* Table for Class Hours*/}
              <TableMRT
                className='pt-2'
                template={fakeCollegeClassHoursTemplate}
                data={fakeCollegeClassHours}
                searchPlaceholder='Search schedule...'
                isCheckBoxVisible={true}
                isFullscreen={false}
                RightButtons={
                  <>
                    <DeleteClassHourDialogForm />
                    <EditClassHourDialogForm />
                    <AddClassHourDialogForm />
                  </>
                }
              />
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
                RightButtons={
                  <>
                    <DeleteClassResDialogForm />
                    <EditClassResDialogForm />
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
