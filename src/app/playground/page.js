'use client';

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

const editUserSchema = z.object({
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

function CustomUserTypesBadges({ value }) {
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
}

function AddUserDialogForm() {
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
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Add a User to the system</DialogDescription>
        </DialogHeader>

        <Form {...addUserForm}>
          <form onSubmit={addUserForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* User ID */}
              <InputFormField
                form={addUserForm}
                title='User ID'
                placeholder='John'
                fieldName='userId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />

              <SelectFormField
                form={addUserForm}
                content={userTypes}
                title='User Type'
                placeholder='Select user type...'
                fieldName='userType'
                customItem={CustomUserTypesBadges}
              />

              <SelectFormField
                form={addUserForm}
                content={units}
                title='Units'
                placeholder='Select unit...'
                fieldName='unit'
              />

              <section className='w-full flex gap-2'>
                {/* First Name */}
                <InputFormField
                  form={addUserForm}
                  title='First Name'
                  placeholder='Enter first name'
                  fieldName='firstName'
                />
                {/* Middle Name */}
                <InputFormField
                  form={addUserForm}
                  title='Middle Name'
                  placeholder='Doe'
                  fieldName='middleName'
                />
              </section>

              {/* Last Name */}
              <InputFormField
                form={addUserForm}
                title='Last Name'
                placeholder='Enter last name'
                fieldName='lastName'
              />

              {/* Email */}
              <InputFormField
                form={addUserForm}
                title='Email'
                placeholder='Enter email'
                fieldName='emailAddress'
                type='email'
              />
            </div>

            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Save User</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function EditUserDialogForm({ label, icon }) {
  const editUserForm = useForm({
    resolver: zodResolver(editUserSchema),
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
      <DialogTrigger asChild>
        <Button
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='ghost'
        >
          {label}
          {icon}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Edit a User to the system</DialogDescription>
        </DialogHeader>

        <Form {...editUserForm}>
          <form onSubmit={editUserForm.handleSubmit(onSubmit)}>
            {/* Content */}
            <div className='flex flex-col gap-2'>
              {/* User ID */}
              <InputFormField
                form={editUserForm}
                title='User ID'
                placeholder='John'
                fieldName='userId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />

              <SelectFormField
                form={editUserForm}
                content={userTypes}
                title='User Type'
                placeholder='Select user type...'
                fieldName='userType'
                customItem={CustomUserTypesBadges}
              />

              <section className='w-full flex gap-2'>
                {/* First Name */}
                <InputFormField
                  form={editUserForm}
                  title='First Name'
                  placeholder='Enter first name'
                  fieldName='firstName'
                />
                {/* Middle Name */}
                <InputFormField
                  form={editUserForm}
                  title='Middle Name'
                  placeholder='Doe'
                  fieldName='middleName'
                />
              </section>

              {/* Last Name */}
              <InputFormField
                form={editUserForm}
                title='Last Name'
                placeholder='Enter last name'
                fieldName='lastName'
              />

              {/* Email */}
              <InputFormField
                form={editUserForm}
                title='Email'
                placeholder='Enter email'
                fieldName='emailAddress'
                type='email'
              />
            </div>

            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function UsersPage() {
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
              if (rowAction.label.toLowerCase().includes('edit')) {
                return (
                  <EditUserDialogForm
                    key={rowAction.label}
                    icon={rowAction.icon}
                    label={rowAction.label}
                  />
                );
              }

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
}

export default UsersPage;
