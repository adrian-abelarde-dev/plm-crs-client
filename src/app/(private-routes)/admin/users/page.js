'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  fakeUsers,
  fakeUsersRowActions,
  fakeUsersTemplate,
} from '@/lib/constants/fake-users-data';
import { cn } from '@/lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';

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
  const [userTypeOpen, setUserTypeOpen] = useState(false);
  const [userTypeValue, setUserTypeValue] = useState(null);

  return (
    <Dialog>
      <DialogTrigger>Add User</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>Add a User to the System</DialogDescription>
        </DialogHeader>

        {/* Content */}
        <div className='flex flex-col gap-4'>
          {/* User ID */}
          <section className='w-full flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <Label htmlFor='user-id'>User ID</Label>{' '}
              <Badge variant='outline'>Auto-generated</Badge>
            </div>
            <Input id='user-id' value='2020-10016' />
          </section>

          {/* User Type */}
          <section className='w-full flex flex-col gap-2'>
            <Label>User Type</Label>
            <Popover open={userTypeOpen} onOpenChange={setUserTypeOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='w-full justify-between text-left'
                >
                  {userTypeValue
                    ? userTypes.find(
                        (userType) => userType.value === userTypeValue,
                      )?.label
                    : 'Select type...'}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-full p-0'>
                <Command>
                  <CommandInput placeholder='Search type...' className='h-9' />
                  <CommandEmpty>No type found.</CommandEmpty>
                  <CommandGroup>
                    {userTypes.map((userType) => (
                      <CommandItem
                        key={userType.value}
                        value={userType.value}
                        onSelect={(currentValue) => {
                          setUserTypeValue(
                            currentValue === userTypeValue ? '' : currentValue,
                          );
                          setUserTypeOpen(false);
                        }}
                      >
                        {
                          <CustomUserTypesBadges
                            value={userType.value}
                            className='ml-2'
                          />
                        }
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            userTypeValue === userType.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </section>
        </div>

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
