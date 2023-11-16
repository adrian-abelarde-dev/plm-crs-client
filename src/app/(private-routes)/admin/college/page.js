'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
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
import { handleRowSelectionChange, testPromise } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Archive, CheckCircle, PlusIcon, View, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ProgramsTable from './programs-table';

const fakeColleges = [
  {
    collegeId: 'AYSEM20231002',
    college: 'College of Arts and Sciences',
    programsListed: '8',
    type: 'Undergraduate',
    dateCreated: '2023-08-17 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231003',
    college: 'College of Business Administration',
    programsListed: '6',
    type: 'Graduate',
    dateCreated: '2023-08-18 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231004',
    college: 'College of Education',
    programsListed: '4',
    type: 'Undergraduate',
    dateCreated: '2023-08-19 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231005',
    college: 'College of Nursing',
    programsListed: '3',
    type: 'Graduate',
    dateCreated: '2023-08-20 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231006',
    college: 'College of Fine Arts',
    programsListed: '2',
    type: 'Undergraduate',
    dateCreated: '2023-08-21 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231007',
    college: 'College of Social Sciences',
    programsListed: '7',
    type: 'Graduate',
    dateCreated: '2023-08-22 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231008',
    college: 'College of Health Sciences',
    programsListed: '5',
    type: 'Undergraduate',
    dateCreated: '2023-08-23 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231009',
    college: 'College of Information Technology',
    programsListed: '4',
    type: 'Graduate',
    dateCreated: '2023-08-24 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231010',
    college: 'College of Architecture',
    programsListed: '3',
    type: 'Undergraduate',
    dateCreated: '2023-08-25 : 12:00 AM',
  },
  {
    collegeId: 'AYSEM20231011',
    college: 'College of Agriculture',
    programsListed: '6',
    type: 'Graduate',
    dateCreated: '2023-08-26 : 12:00 AM',
  },
];

const collegeTypes = [
  {
    value: 'Undergraduate',
    label: 'Undergraduate',
  },
  {
    value: 'Graduate',
    label: 'Graduate',
  },
];

const CollegeSchema = z.object({
  collegeId: z.string(),
  college: z.string(),
  programsListed: z.string(),
  type: z.string(),
  dateCreated: z.string(),
});

function AddCollegeDialogForm({ open, setOpen }) {
  const addCollegeForm = useForm({
    resolver: zodResolver(CollegeSchema),
    defaultValues: {
      collegeId: 'AYSEM20231002',
      college: '',
      type: '',
    },
  });

  function onAddCollegeSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className='w-4 h-4 mr-2' />
          Add College
        </Button>
      </DialogTrigger>

      <Form {...addCollegeForm}>
        <form onSubmit={addCollegeForm.handleSubmit(onAddCollegeSubmit)}>
          <DialogContent className='xsm:max-w-[26.5625rem]'>
            <DialogHeader>
              <DialogTitle>Add College</DialogTitle>
              <DialogDescription>
                Add a new college here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>

            <div className='flex flex-col gap-2 w-full'>
              {/* College ID */}
              <InputFormField
                form={addCollegeForm}
                title='College ID'
                fieldName='collegeId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
                disabled={true}
              />

              {/* College */}
              <InputFormField
                form={addCollegeForm}
                title='College'
                fieldName='college'
                placeholder='College of Arts and Sciences'
              />

              {/* College Types */}
              <SelectFormField
                form={addCollegeForm}
                content={collegeTypes}
                title='College Type'
                placeholder='Select Type'
                fieldName='type'
                isOptional={false}
              />
            </div>

            <DialogFooter className='w-full flex justify-end'>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Add College</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}

function AdminCollegePage() {
  const [rowSelection, setRowSelection] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [addCollegeDialogFormOpen, setCollegeDialogFormOpen] = useState(false);

  const fakeCollegesTemplate = [
    {
      accessorKey: 'collegeId',
      id: 'collegeId',
      header: 'College ID',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'college',
      id: 'college',
      header: 'College',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'programsListed',
      id: 'programsListed',
      header: 'Programs Listed',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'type',
      id: 'type',
      header: 'Type',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'dateCreated',
      id: 'dateCreated',
      header: 'Date Created',
      filterVariant: 'fuzzy',
    },
  ];

  const selectedCollege = handleRowSelectionChange(
    fakeColleges,
    fakeCollegesTemplate,
    rowSelection,
  );

  async function sampleConfirmFunction(id) {
    try {
      const result = await testPromise(id);

      if (result) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <Label>Success!</Label>
            </div>
          ),
          description: <>Changes have been Saved.</>,
        });
      }
    } catch (error) {
      console.error({ error });

      toast({
        variant: 'destructive',
        title: (
          <div className='flex flex-row'>
            <XCircle className='mr-2 h-4 w-4' />
            <Label>Error!</Label>
          </div>
        ),
        description: <>Error saving your data</>,
      });
    }
  }

  return (
    <main className='w-full p-6'>
      <Modal
        opened={opened}
        onClose={close}
        title={selectedCollege[0]?.college}
        radius={'md'}
        zIndex={50}
        overlayProps={{
          blur: 3,
        }}
        size='100%'
      >
        <ProgramsTable selectedCollege={selectedCollege} />
      </Modal>

      <TableMRT
        template={fakeCollegesTemplate}
        data={fakeColleges}
        title='College'
        searchPlaceholder='Search College...'
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        enableRowActions={true}
        renderRowActionMenuItems={({ row }) => {
          const { collegeId } = row.original;

          return (
            <div className='flex flex-col w-[14.75rem] z-10'>
              {/* Archive Alert */}
              <AlertConfirmModal
                label='Archive College'
                title='Are you sure you want to archive this college?'
                description='You can still undo this action. This will only archive the college and not delete it.'
                cancelLabel='Cancel'
                confirmLabel='Archive'
                confirmFunction={() => sampleConfirmFunction(collegeId)}
                triggerIcon={<Archive className='w-4 h-4' />}
                className='w-full items-start justify-between text-left flex text-destructive hover:text-destructive/90'
              />
            </div>
          );
        }}
        RightButtons={
          <section className='flex gap-2 items-center'>
            <Button
              variant='outline'
              onClick={open}
              disabled={
                Object.keys(selectedCollege).length === 0 ||
                Object.keys(selectedCollege).length > 1
              }
            >
              <View className='mr-2 w-4 h-4' /> View Program
            </Button>
            <AddCollegeDialogForm
              open={addCollegeDialogFormOpen}
              setOpen={setCollegeDialogFormOpen}
            />
          </section>
        }
      />
    </main>
  );
}

export default AdminCollegePage;
