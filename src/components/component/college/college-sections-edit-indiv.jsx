import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import {
  collegeDepartments,
  collegePrograms,
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

import InputFormField from '../form/input-formfield';
import SelectFormField from '../form/select-formfield';

function CollegeSectionsEditIndividual() {
  const editSectionForm = useForm({
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
    <DialogContent className='sm:max-w-[500px]'>
      <DialogHeader>
        <DialogTitle className='text-2xl font-medium'>
          Edit Individual Section
        </DialogTitle>
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
            <section className='w-full flex gap-2 justify-between'>
              <section className='w-2/5 '>
                {/* Year Level */}
                <SelectFormField
                  form={editSectionForm}
                  content={collegeYear}
                  title='Year Level'
                  placeholder='Select year level...'
                  fieldName='collegeYear'
                />
              </section>
              <Label className='flex items-center'>-</Label>
              <section className='w-2/5'>
                <SelectFormField
                  form={editSectionForm}
                  content={collegeSection}
                  title='Section'
                  placeholder='Select section...'
                  fieldName='collegeSection'
                />
              </section>
              {/* Section */}
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
                  Double check if all inputs are correct to make sure there are
                  no input errors.
                </p>
              </div>
            </div>

            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}

export default CollegeSectionsEditIndividual;
