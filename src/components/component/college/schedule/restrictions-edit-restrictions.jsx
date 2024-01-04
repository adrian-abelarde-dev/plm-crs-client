'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  collegeRestrictions,
  collegeScope,
} from '@/lib/constants/fake-data/college-schedule';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit } from 'lucide-react';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';

function EditClassResDialogForm({ disabled }) {
  const editClassRes = useFormContext({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' disabled={disabled}>
            Edit
            <Edit className='ml-2 h-4 w-4' />
          </Button>
        </DialogTrigger>
        <DialogContent className='xsm:max-w-[100px]'>
          <DialogHeader>
            <DialogTitle>Edit Class Restriction</DialogTitle>
          </DialogHeader>
          <div className='flex flex-col gap-4'>
            {/* Class Hour ID */}
            <InputFormField
              disabled={true}
              form={editClassRes}
              title={
                <Label className='font-medium text-sm'>
                  Class Restriction ID
                </Label>
              }
              placeholder='CRCOLLEGECET'
              fieldName='classresID'
              badge={<Badge variant='outline'>Auto-generated</Badge>}
            />
            {/* Schedule ID */}
            <InputFormField
              disabled={true}
              form={editClassRes}
              title={<Label className='font-medium text-sm'>Schedule ID</Label>}
              placeholder='CETBSCS0401'
              fieldName='scheduleID'
              badge={<Badge variant='outline'>Auto-generated</Badge>}
            />
            {/* Scope */}
            <SelectFormField
              form={editClassRes}
              content={collegeScope}
              title='Scope'
              placeholder='Enter scope'
              fieldName='collegeScope'
            />
            {/* Restriction */}
            <SelectFormField
              form={editClassRes}
              content={collegeRestrictions}
              title='Restriction'
              placeholder='Enter restriction'
              fieldName='collegeRes'
            />
          </div>
          <DialogFooter className='w-full flex justify-evenly'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <div className='justify-between' />
            <Button type='submit'>Add Class Restriction</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditClassResDialogForm;
