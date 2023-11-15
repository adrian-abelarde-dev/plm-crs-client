import SelectFormField from '@/components/component/form/select-formfield';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/components/ui/use-toast';
import { subjects } from '@/lib/constants/fake-data/subjects';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

function AddProgramForm({ curriculum }) {
  const addProgramForm = useForm({
    resolver: zodResolver(
      z.object({
        programId: z.string(),
      }),
    ),
    defaultValues: {
      programId: '',
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
      description: <>Program has been added.</>,
    });

    console.log(values);
    addProgramForm.reset();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus className='w-4 h-4 mr-2' />
          Add Program
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Add Program to {curriculum.toUpperCase()}
          </AlertDialogTitle>
          <AlertDialogDescription>
            Add a Program to the Curriculum
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form
          onSubmit={addProgramForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...addProgramForm}>
            <ScrollArea className='w-full'>
              {/* Program */}
              <SelectFormField
                form={addProgramForm}
                content={subjects}
                title='Program Name'
                placeholder='Select Program'
                fieldName='programId'
              />
            </ScrollArea>
            <AlertDialogFooter className='w-full flex justify-end mt-4'>
              <AlertDialogCancel asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    addProgramForm.reset();
                  }}
                >
                  Cancel
                </Button>
              </AlertDialogCancel>

              <Button type='submit'>Add Program</Button>
            </AlertDialogFooter>
          </Form>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddProgramForm;
