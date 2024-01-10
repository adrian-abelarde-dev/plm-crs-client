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
import { onError, onSuccess, testPromise } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Archive, CheckCircle, PlusIcon, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { addProgram, getAllProgramsByCollege } from './admin-api-functions';

const ProgramSchema = z.object({
  programId: z.string(),
  program: z.string(),
});

function AddProjectDialogForm({ open, setOpen, selectedCollege}) {
  const addProjectForm = useForm({
    resolver: zodResolver(ProgramSchema),

  });

    async function onSubmit() {
    try {
      const data = await addProgram(
        addProjectForm.getValues().program,
        selectedCollege.collegeId.toString(),
        addProjectForm.getValues().programId,
      );
      if (data) {
        onSuccess(data.message);
      } else {
        onError("Failed to add program");
      }
    } catch (error) {
      onError("Failed to add program");
      console.log(error);
      throw error;
    }
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
        <form onSubmit={addProjectForm.handleSubmit(onSubmit)}>
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
              <Button type='submit' onClick={ onSubmit}>Add Program</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}

export default function ProgramsTable({ selectedCollege }) {
  const [addProgramDialogOpen, setProgramDialogOpen] = useState(false);
  const [programs, setPrograms] = useState([])

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

    useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllProgramsByCollege([selectedCollege[0].collegeId]);
        setPrograms(result)
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [selectedCollege[0].collegeId]);

  return (
    <TableMRT
      template={fakeProgramsTemplate}
      data={programs}
      title={`${selectedCollege[0]?.college} Programs`}
      searchPlaceholder='Search Programs...'
      enableRowActions={true}
      renderRowActionMenuItems={({ row }) => {
        const { programId } = row.original;

        return (
          <div className='flex flex-col w-[14.75rem] z-10'>
            {/* Archive Alert */}
            <AlertConfirmModal
              label='Archive Program'
              title='Are you sure you want to archive this program?'
              description='You can still undo this action. This will only archive the program and not delete it.'
              cancelLabel='Cancel'
              confirmLabel='Archive'
              confirmFunction={() => {}}
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
            selectedCollege={selectedCollege[0]}
          />
        </section>
      }
    />
  );
}
