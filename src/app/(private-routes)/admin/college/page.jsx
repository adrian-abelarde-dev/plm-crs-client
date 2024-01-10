'use client';

import {
  addCollege,
  getAllCollege,
} from '@/components/component/admin/admin-api-functions';
import ProgramsTable from '@/components/component/admin/programs-table';
import AlertConfirmModal from '@/components/component/alert-dialog';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import TableMRT from '@/components/layouts/table-mrt';
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
import {
  handleRowSelectionChange,
  onError,
  onSuccess,
  testPromise,
} from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Archive, CheckCircle, PlusIcon, View, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  type: z.string(),
});

function AddCollegeDialogForm({ open, setOpen }) {
  const addCollegeForm = useForm({
    resolver: zodResolver(CollegeSchema),
  });

  async function onAddCollegeSubmit() {
    try {
      const data = await addCollege(
        addCollegeForm.getValues().college,
        addCollegeForm.getValues().type,
        addCollegeForm.getValues().collegeId,
      );
      if (data) {
        onSuccess(data.message);
      } else {
        onError('Failed to add college');
      }
    } catch (error) {
      onError('Failed to add college');
      throw error;
    }
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
              />

              {/* College */}
              <InputFormField
                form={addCollegeForm}
                title='College'
                fieldName='college'
                placeholder='College'
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
              <Button type='submit' onClick={onAddCollegeSubmit}>
                Add College
              </Button>
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
  const [colleges, setColleges] = useState([]);

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
    colleges,
    fakeCollegesTemplate,
    rowSelection,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCollege();
        setColleges(result);
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching college:', error);
      }
    };

    fetchData();
  }, []);

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
        data={colleges}
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
            {/* Code commented since there's no UI for adding programs */}
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
