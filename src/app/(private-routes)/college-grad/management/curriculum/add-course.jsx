import SelectFormField from '@/components/component/form/select-formfield';
import {
  AlertDialog,
  AlertDialogAction,
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

function AddCourseForm({ curriculum }) {
  const addCourseForm = useForm({
    resolver: zodResolver(
      z.object({
        courseCode: z.string(),
      }),
    ),
    defaultValues: {
      courseCode: '',
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
      description: <>Course has been added.</>,
    });

    console.log(values);
    addCourseForm.reset();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus className='w-4 h-4 mr-2' />
          Add Course
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Add Course to {curriculum.toUpperCase()}
          </AlertDialogTitle>
          <AlertDialogDescription>
            Add a Course to the Curriculum
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form
          onSubmit={addCourseForm.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <Form {...addCourseForm}>
            <ScrollArea className='w-full'>
              {/* Course */}
              <SelectFormField
                form={addCourseForm}
                content={subjects}
                title='Course Name'
                placeholder='Select Course'
                fieldName='courseCode'
              />
            </ScrollArea>
            <AlertDialogFooter className='w-full flex justify-end mt-4'>
              <AlertDialogCancel asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    addCourseForm.reset();
                  }}
                >
                  Cancel
                </Button>
              </AlertDialogCancel>

              <Button type='submit'>Add Course</Button>
            </AlertDialogFooter>
          </Form>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddCourseForm;
