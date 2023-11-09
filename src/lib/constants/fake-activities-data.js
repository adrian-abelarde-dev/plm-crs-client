'use client';

import { Badge } from '@/components/ui/badge';
import { Edit, Trash } from 'lucide-react';

export const fakeActivitiesRowActions = [
  {
    label: 'Edit Activity',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Delete Activity',
    icon: <Trash className='h-4 w-4' />,
  },
];

export const fakeActivitesTemplate = [
  {
    accessorKey: 'activities',
    id: 'activities',
    header: 'Activities',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'Status',
    filterVariant: 'fuzzy',
    Cell: ({ cell }) => {
      return (
        <Badge
          variant={cell.getValue() === 'Active' ? 'outlinePrimary' : 'outline'}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'aysem',
    id: 'aysem',
    header: 'AY-SEM',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'scheduleStart',
    id: 'scheduleStart',
    header: 'Schedule Start',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'scheduleEnd',
    id: 'scheduleEnd',
    header: 'Schedule End',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'dateCreated',
    id: 'dateCreated',
    header: 'Date Created',
    filterVariant: 'fuzzy',
  },
];

export const fakeActivites = [
  {
    activities: 'Encoding of Classes',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    activities: 'Changing of Classes',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-17 : 1:00 PM',
    scheduleEnd: '2023-08-17 : 3:00 PM',
    dateCreated: '2023-08-17 : 10:00 AM',
  },
  {
    activities: 'Enlistment - Regular',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-18 : 9:00 AM',
    scheduleEnd: '2023-08-18 : 5:00 PM',
    dateCreated: '2023-08-18 : 8:00 AM',
  },
  {
    activities: 'Enlistment - Irregular',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-19 : 10:00 AM',
    scheduleEnd: '2023-08-19 : 4:00 PM',
    dateCreated: '2023-08-19 : 9:00 AM',
  },
  {
    activities: 'Encoding of Grades - Graduating',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-20 : 11:00 AM',
    scheduleEnd: '2023-08-20 : 1:00 PM',
    dateCreated: '2023-08-20 : 10:00 AM',
  },
  {
    activities: 'Changing of Grades - Graduating',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-21 : 2:00 PM',
    scheduleEnd: '2023-08-21 : 4:00 PM',
    dateCreated: '2023-08-21 : 1:00 PM',
  },
  {
    activities: 'Encoding of Grades - Non-Graduating',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-22 : 3:00 PM',
    scheduleEnd: '2023-08-22 : 5:00 PM',
    dateCreated: '2023-08-22 : 2:00 PM',
  },
  {
    activities: 'Changing of Grades - Non-Graduating',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-23 : 4:00 PM',
    scheduleEnd: '2023-08-23 : 6:00 PM',
    dateCreated: '2023-08-23 : 3:00 PM',
  },
  {
    activities: 'Enlistment - Summer',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-24 : 1:00 PM',
    scheduleEnd: '2023-08-24 : 3:00 PM',
    dateCreated: '2023-08-24 : 12:00 PM',
  },
  {
    activities: 'Orientation',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-25 : 10:00 AM',
    scheduleEnd: '2023-08-25 : 12:00 PM',
    dateCreated: '2023-08-25 : 9:00 AM',
  },
];
