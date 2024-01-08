'use client';

import {
  addUser,
  getAllUsers,
} from '@/components/component/admin/admin-api-functions';
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
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { usersTemplate } from '@/lib/constants/table-templates/admin/users';
import { onError, onSuccess } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const userTypes = [
  { label: 'Admin', value: 'Admin' },
  { label: 'Faculty', value: 'Faculty' },
  { label: 'College Admin', value: 'ChairpersonUndergrad' },
  { label: 'College Grad Admin', value: 'ChairpersonGrad' },
  { label: 'Student', value: 'Student' },
  { label: 'Student Grad', value: 'StudentGrad' },
];

export const units = [
  { label: 'Undergrad', value: 'undergrad' },
  { label: 'Grad', value: 'grad' },
];

function CustomUserTypesBadges({ value }) {
  switch (value) {
    case 'Admin':
      return <Badge variant='outlinePrimary'>Admin</Badge>;
    case 'Faculty':
      return <Badge variant='outlineBlue'>Faculty</Badge>;
    case 'ChairpersonUndergrad':
      return <Badge variant='outlineIndigo'>College Admin</Badge>;
    case 'Student':
      return <Badge variant='outlineGreen'>Student</Badge>;
    case 'ChairpersonGrad':
      return <Badge variant='outlineIndigo'>College Admin</Badge>;
    case 'StudentGrad':
      return <Badge variant='outlineGreen'>Student Grad</Badge>;
    default:
      return <Badge variant='outline'>Unknown</Badge>;
  }
}

function AddUserDialogForm() {
  const addUserForm = useForm({
    resolver: zodResolver(UserSchema),
  });

  async function onSubmit(values) {
    try {
      const data = await addUser(
        values.userId,
        values.userType,
        values.firstName,
        values.middleName,
        values.lastName,
        values.emailAddress,
      );
      if (data) {
        // if data.message includes `exists` use onError(data.message) else onSuccess(data.message)
        if (data.message.includes('exists')) {
          onError(data.message);
        } else {
          onSuccess(data.message);
        }
      } else {
        onError('Error Saving Data!');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
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
          <form
            onSubmit={addUserForm.handleSubmit(onSubmit, () =>
              onError('Input Error!'),
            )}
          >
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
              <DialogClose asChild>
                <Button type='submit'>Save User</Button>
              </DialogClose>
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log({ selectedUser });
  }, [selectedUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
        setUsers(result);
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='w-full p-6'>
      <TableMRT
        template={usersTemplate}
        data={users}
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
