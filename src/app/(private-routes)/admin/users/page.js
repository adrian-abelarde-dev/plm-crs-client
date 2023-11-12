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
import { fakeUsers, fakeUsersTemplate } from '@/lib/constants/fake-users-data';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
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
        <Button>
          <PlusCircle className='w-4 h-4 mr-2' />
          Add User
        </Button>
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

function EditUserDialogForm({ disabled }) {
  const editUserForm = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
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
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <Edit className='w-4 h-4 mr-2' />
          Edit
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
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    console.log({ selectedUser });
  }, [selectedUser]);

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={fakeUsersTemplate}
        data={fakeUsers}
        title='Users'
        description='Add, edit, and archive users.'
        searchPlaceholder='Search User'
        isCheckBoxVisible={true}
        rowSelection={selectedUser}
        setRowSelection={setSelectedUser}
        isFullscreen={false}
        RightButtons={
          <div className='flex gap-2 items-center'>
            <EditUserDialogForm
              disabled={
                Object.keys(selectedUser).length > 1 ||
                Object.keys(selectedUser).length === 0
              }
            />
            <AddUserDialogForm />
          </div>
        }
      />
    </main>
  );
}

export default UsersPage;
