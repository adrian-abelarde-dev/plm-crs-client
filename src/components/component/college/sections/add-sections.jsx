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
import { toast } from '@/components/ui/use-toast';
import {
  collegeSection,
  collegeYear,
} from '@/lib/constants/fake-data/college-sections';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';

function AddSectionUndergrad() {
  const addSectionForm = useForm({
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

export default AddSectionUndergrad;
