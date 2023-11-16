'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import InputFormField from '@/components/component/form/input-formfield';
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
import { testPromise } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Archive, CheckCircle, PlusIcon, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ProgramSchema = z.object({
  programId: z.string(),
  program: z.string(),
});

function AddProjectDialogForm({ open, setOpen }) {
  const addProjectForm = useForm({
    resolver: zodResolver(ProgramSchema),
    defaultValues: {
      programId: 'AYSEM20231002',
      program: '',
    },
  });

  function onAddProgramSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className='w-4 h-4 mr-2' />
          Add Program
        </Button>
      </DialogTrigger>

      <Form {...addProjectForm}>
        <form onSubmit={addProjectForm.handleSubmit(onAddProgramSubmit)}>
          <DialogContent className='xsm:max-w-[26.5625rem]'>
            <DialogHeader>
              <DialogTitle>Add Program</DialogTitle>
              <DialogDescription>
                Add a new program here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>

            <div className='flex flex-col gap-2 w-full'>
              {/* Program ID */}
              <InputFormField
                form={addProjectForm}
                title='Program ID'
                fieldName='programId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
                disabled={true}
              />

              {/* College */}
              <InputFormField
                form={addProjectForm}
                title='Program'
                fieldName='program'
                placeholder='College of Arts and Sciences'
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

export default function ProgramsTable({ selectedCollege }) {
  const [addProgramDialogOpen, setProgramDialogOpen] = useState(false);

  const fakeProgramsTemplate = [
    {
      accessorKey: 'programId',
      id: 'programId',
      header: 'Program ID',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'program',
      id: 'program',
      header: 'Program',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'studentsEnlisted',
      id: 'studentsEnlisted',
      header: 'Students Enlisted',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'dateCreated',
      id: 'dateCreated',
      header: 'Date Created',
      filterVariant: 'fuzzy',
    },
  ];

  const fakePrograms = [
    {
      programId: 'AYSEM20231002',
      program: 'Bachelor of Arts in English',
      studentsEnlisted: '8',
      dateCreated: '2023-08-17 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231003',
      program: 'Bachelor of Arts in Psychology',
      studentsEnlisted: '6',
      dateCreated: '2023-08-18 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231004',
      program: 'Bachelor of Science in Accountancy',
      studentsEnlisted: '4',
      dateCreated: '2023-08-19 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231005',
      program: 'Bachelor of Science in Business Administration',
      studentsEnlisted: '3',
      dateCreated: '2023-08-20 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231006',
      program: 'Bachelor of Science in Entrepreneurship',
      studentsEnlisted: '2',
      dateCreated: '2023-08-21 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231007',
      program: 'Bachelor of Science in Marketing',
      studentsEnlisted: '7',
      dateCreated: '2023-08-22 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231008',
      program: 'Bachelor of Science in Management',
      studentsEnlisted: '5',
      dateCreated: '2023-08-23 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231009',
      program: 'Bachelor of Science in Management Accounting',
      studentsEnlisted: '4',
      dateCreated: '2023-08-24 : 12:00 AM',
    },
    {
      programId: 'AYSEM20231010',
      program: 'Bachelor of Science in Mathematics',
      studentsEnlisted: '3',
      dateCreated: '2023-08-25 : 12:00 AM',
    },
  ];

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
    <TableMRT
      template={fakeProgramsTemplate}
      data={fakePrograms}
      title={`${selectedCollege[0].college} Programs`}
      searchPlaceholder='Search Programs...'
      enableRowActions={true}
      renderRowActionMenuItems={({ row }) => {
        const { programId } = row.original;

        return (
          <div className='flex flex-col w-[14.75rem] z-10'>
            {/* Archive Alert */}
            <AlertConfirmModal
              label='Archive Program'
              title='Are you sure you want to program this college?'
              description='You can still undo this action. This will only archive the program and not delete it.'
              cancelLabel='Cancel'
              confirmLabel='Archive'
              confirmFunction={() => sampleConfirmFunction(programId)}
              triggerIcon={<Archive className='w-4 h-4' />}
              className='w-full items-start justify-between text-left flex text-destructive hover:text-destructive/90'
            />
          </div>
        );
      }}
      RightButtons={
        <section className='flex gap-2 items-center'>
          <AddProjectDialogForm
            open={addProgramDialogOpen}
            setOpen={setProgramDialogOpen}
          />
        </section>
      }
    />
  );
}
