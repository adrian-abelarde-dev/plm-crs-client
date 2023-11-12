import { Archive, Edit } from 'lucide-react';

export const usersRowActions = [
  {
    label: 'Edit User',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Archive User',
    icon: <Archive className='h-4 w-4' />,
  },
];

export const usersTemplate = [
  {
    accessorKey: 'userid',
    id: 'userid',
    header: 'User ID',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'fullname',
    id: 'fullname',
    header: 'Full Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'email',
    id: 'email',
    header: 'Email',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'Status',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'type',
    id: 'type',
    header: 'Type',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'datecreated',
    id: 'datecreated',
    header: 'Date Created',
    filterVariant: 'fuzzy',
  },
];
