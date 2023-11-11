'use client';

import { InputFormField, SelectFormField } from '@/components/component/form';
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
import {
  fakeUsers,
  fakeUsersRowActions,
  fakeUsersTemplate,
} from '@/lib/constants/fake-users-data';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const addUserSchema = z.object({
  userId: z.string(),
  userType: z.string(),
  unit: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  emailAddress: z.string().email(),
  // Date created will be auto-generated in backend
});

export const userTypes = [
  { label: 'Admin', value: 'admin' },
  { label: 'Faculty', value: 'faculty' },
  { label: 'College Admin', value: 'coladmin' },
  { label: 'Student', value: 'student' },
];

export const units = [
  { label: 'Undergrad', value: 'undergrad' },
  { label: 'Grad', value: 'grad' },
];

const CustomUserTypesBadges = ({ value }) => {
  switch (value) {
    case 'admin':
      return <Badge variant='outlinePrimary'>Admin</Badge>;
    case 'faculty':
      return <Badge variant='outlineBlue'>Faculty</Badge>;
    case 'coladmin':
      return <Badge variant='outlineIndigo'>College Admin</Badge>;
    case 'student':
      return <Badge variant='outlineGreen'>Student</Badge>;
    default:
      return <Badge variant='outline'>Unknown</Badge>;
  }
};

const AddUserDialogForm = () => {
  const addUserForm = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      userId: '2020-10016',
      userType: 'admin',
      unit: 'undergrad',
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'Smith',
      emailAddress: 'john.doe2020@plmn.edu.ph',
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger>Add User</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Add a User to the System</DialogDescription>
        </DialogHeader>

        <Form {...addUserForm}>
          <form onSubmit={addUserForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-4'>
              {/* User ID */}
              <section className='w-full flex flex-col gap-2'>
                <InputFormField
                  form={addUserForm}
                  title='User ID'
                  placeholder='John'
                  fieldName='userId'
                  badge={<Badge variant='outline'>Auto-generated</Badge>}
                />
              </section>

              <section className='w-full flex flex-col gap-2'>
                <SelectFormField
                  form={addUserForm}
                  content={userTypes}
                  title='User Type'
                  placeholder='Select user type...'
                  fieldName='userType'
                  customItem={CustomUserTypesBadges}
                />
              </section>

              {/* First Name */}
              <section className='w-full flex flex-col gap-2'>
                <InputFormField
                  form={addUserForm}
                  title='First Name'
                  placeholder='John'
                  fieldName='firstName'
                />
              </section>
            </div>
          </form>
        </Form>

        <DialogFooter className='w-full flex justify-end'>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button type='submit'>Save User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const UsersPage = () => {
  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeUsersTemplate}
        data={fakeUsers}
        title='Users'
        description='Add, edit, and archive users.'
        searchPlaceholder='Search User'
        isFullscreen={false}
        RightButtons={<AddUserDialogForm />}
        RowActions={
          <>
            {fakeUsersRowActions.map((rowAction) => {
              return (
                <Button
                  key={rowAction.label}
                  className={cn(
                    `text-zinc-900 justify-between hover:bg-zinc-100`,
                    // If label includes 'trash' or 'delete' make the text red and icon
                    // color red
                    (rowAction.label.toLowerCase().includes('trash') ||
                      rowAction.label.toLowerCase().includes('archive') ||
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
};

export default UsersPage;
