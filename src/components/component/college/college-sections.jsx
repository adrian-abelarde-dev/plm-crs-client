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
import { Label } from '@/components/ui/label';
import {
  fakeSection,
  fakeSectionRowActions,
} from '@/lib/constants/fake-data/college-sections';
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

export const collegeDepartments = [
  { label: 'College of Education', value: 'coe' },
  { label: 'PLM Business School', value: 'business' },
  { label: 'College of Humanities and Social Sciences', value: 'chass' },
  { label: 'College of Engineering', value: 'cet' },
  { label: 'College of Architecture and Urban Planning', value: 'archi' },
  { label: 'College of Science', value: 'cs' },
  { label: 'College of Nursing', value: 'cn' },
  { label: 'College of Physical Therapy', value: 'cpt' },
];

export const collegePrograms = [
  {
    label: 'Bachelor of Science in Accountancy',
    value: 'bsa',
  },
  {
    label: 'Bachelor of Science in Business Administration',
    value: 'bsba',
  },
  {
    label: 'Bachelor of Science in Entrepreneurship',
    value: 'bse',
  },
  {
    label: 'Bachelor of Science in Hotel and Restaurant Management',
    value: 'bshrm',
  },
  {
    label: 'Bachelor of Science in Tourism Management',
    value: 'bstm',
  },
  {
    label: 'Bachelor of Arts in English Language Studies',
    value: 'baels',
  },
  {
    label: 'Bachelor of Arts in Political Science',
    value: 'baps',
  },
  {
    label: 'Bachelor of Science in Psychology',
    value: 'bspsy',
  },
  {
    label: 'Bachelor of Science in Civil Engineering',
    value: 'bsce',
  },
  {
    label: 'Bachelor of Science in Computer Engineering',
    value: 'bscoe',
  },
  {
    label: 'Bachelor of Science in Electrical Engineering',
    value: 'bsee',
  },
  {
    label: 'Bachelor of Science in Architecture',
    value: 'bsarchi',
  },
  {
    label: 'Bachelor of Science in Chemistry',
    value: 'bschem',
  },
  {
    label: 'Bachelor of Science in Mathematics',
    value: 'bsmath',
  },
  { label: 'Bachelor of Science in Nursing', value: 'bsn' },
  {
    label: 'Bachelor of Science in Physical Therapy',
    value: 'bspt',
  },
];

export const collegeYear = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];

export const collegeSection = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];

function ArchiveSectionUndergrad({ disabled }) {
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

function EditSectionUndergrad({ disabled }) {
  const editSectionForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });

  function onSubmit(values) {
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
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Edit Section</DialogTitle>
        </DialogHeader>

        <Form {...editSectionForm}>
          <form onSubmit={editSectionForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* Section ID */}
              <InputFormField
                disabled={true}
                form={editSectionForm}
                title='Section ID'
                placeholder='CETBSCS0401'
                fieldName='sectionId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />

              {/* Department */}
              <SelectFormField
                form={editSectionForm}
                content={collegeDepartments}
                title='Department'
                placeholder='Select department...'
                fieldName='collegeDepartment'
              />

              {/* Programs */}
              <SelectFormField
                form={editSectionForm}
                content={collegePrograms}
                title='Program'
                placeholder='Select program...'
                fieldName='collegeProgram'
              />

              {/* Year Level and Section */}
              <section className='w-full flex gap-2 justify-items-start'>
                {/* Year Level */}
                <SelectFormField
                  form={editSectionForm}
                  content={collegeYear}
                  title='Year Level'
                  placeholder='Select year level...'
                  fieldName='collegeYear'
                />
                <Label className='flex items-center'>-</Label>
                {/* Section */}
                <SelectFormField
                  form={editSectionForm}
                  content={collegeSection}
                  title='Section'
                  placeholder='Select section...'
                  fieldName='collegeSection'
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
                <Button type='submit'>Save Section</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function AddSectionUndergrad() {
  const addSectionForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Section</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Add Section</DialogTitle>
        </DialogHeader>

        <Form {...addSectionForm}>
          <form onSubmit={addSectionForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* Section ID */}
              <InputFormField
                disabled={true}
                form={addSectionForm}
                title='Section ID'
                placeholder='CETBSCS0401'
                fieldName='sectionId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />

              {/* Year Level and Section */}
              <section className='w-full flex gap-2 justify-items-start'>
                {/* Year Level */}
                <SelectFormField
                  form={addSectionForm}
                  content={collegeYear}
                  title='Year Level'
                  placeholder='Select year level...'
                  fieldName='collegeYear'
                />
                <Label className='flex items-center'>-</Label>
                {/* Section */}
                <SelectFormField
                  form={addSectionForm}
                  content={collegeSection}
                  title='Section'
                  placeholder='Select section...'
                  fieldName='collegeSection'
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
                <Button type='submit'>Save Section</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function CollegeSectionsPage() {
  const [selectedSection, setSelectedSection] = useState({});

  useEffect(() => {
    console.log({ selectedSection });
  }, [selectedSection]);

  const fakeSectionTemplate = [
    {
      accessorKey: 'collegeSection',
      id: 'collegeSection',
      header: 'Section',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'dateCreated',
      id: 'dateCreated',
      header: 'Date Created',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeSectionTemplate}
        data={fakeSection}
        title='Sections'
        description=''
        searchPlaceholder='Search sections...'
        isCheckBoxVisible={true}
        rowSelection={selectedSection}
        setRowSelection={setSelectedSection}
        RightButtons={
          <div className='flex gap-2 items-center'>
            <ArchiveSectionUndergrad
              disabled={Object.keys(selectedSection).length === 0}
            />
            <EditSectionUndergrad
              disabled={Object.keys(selectedSection).length === 0}
            />
            <AddSectionUndergrad />
          </div>
        }
        RowActions={
          <>
            {fakeSectionRowActions.map((rowAction) => {
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

export default CollegeSectionsPage;
