import { Archive, Edit } from 'lucide-react';

export const fakeUsersRowActions = [
  {
    label: 'Edit User',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Archive User',
    icon: <Archive className='h-4 w-4' />,
  },
];

export const fakeUsersTemplate = [
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

export const fakeUsers = [
  {
    userid: '2021-00001',
    fullname: 'John Doe',
    email: 'john.doe2020@plm.edu.ph',
    status: 'Active',
    type: 'Admin',
    datecreated: '2021-08-16 : 12:00 AM',
  },
  {
    userid: '2021-00002',
    fullname: 'Jane Smith',
    email: 'jane.smith2020@plm.edu.ph',
    status: 'Active',
    type: 'User',
    datecreated: '2021-08-17 : 01:30 PM',
  },
  {
    userid: '2021-00003',
    fullname: 'Bob Johnson',
    email: 'bob.johnson2020@plm.edu.ph',
    status: 'Inactive',
    type: 'User',
    datecreated: '2021-08-18 : 03:45 AM',
  },
  {
    userid: '2021-00004',
    fullname: 'Alice Brown',
    email: 'alice.brown2020@plm.edu.ph',
    status: 'Active',
    type: 'User',
    datecreated: '2021-08-19 : 10:15 AM',
  },
  {
    userid: '2021-00005',
    fullname: 'Chris Williams',
    email: 'chris.williams2020@plm.edu.ph',
    status: 'Active',
    type: 'User',
    datecreated: '2021-08-20 : 05:20 PM',
  },
  {
    userid: '2021-00006',
    fullname: 'Eva Martinez',
    email: 'eva.martinez2020@plm.edu.ph',
    status: 'Inactive',
    type: 'User',
    datecreated: '2021-08-21 : 07:30 AM',
  },
  {
    userid: '2021-00007',
    fullname: 'David Lee',
    email: 'david.lee2020@plm.edu.ph',
    status: 'Active',
    type: 'User',
    datecreated: '2021-08-22 : 02:45 PM',
  },
  {
    userid: '2021-00008',
    fullname: 'Megan Turner',
    email: 'megan.turner2020@plm.edu.ph',
    status: 'Active',
    type: 'User',
    datecreated: '2021-08-23 : 09:00 AM',
  },
  {
    userid: '2021-00009',
    fullname: 'Ryan Miller',
    email: 'ryan.miller2020@plm.edu.ph',
    status: 'Inactive',
    type: 'User',
    datecreated: '2021-08-24 : 04:15 PM',
  },
  {
    userid: '2021-00010',
    fullname: 'Sophie Davis',
    email: 'sophie.davis2020@plm.edu.ph',
    status: 'Active',
    type: 'User',
    datecreated: '2021-08-25 : 11:30 AM',
  },
  // Add more users as needed
];
