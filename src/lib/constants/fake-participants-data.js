import { Badge } from '@/components/ui/badge';
import { Edit, Trash } from 'lucide-react';

export const fakeParticipantsRowActions = [
  {
    label: 'Edit Participant',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Delete Participant',
    icon: <Trash className='h-4 w-4' />,
  },
];

export const fakeParticipantsTemplate = [
  {
    accessorKey: 'participant',
    id: 'participant',
    header: 'Participant',
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

export const fakeParticipants = [
  {
    participant: 'College - CPT',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - CS',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - CoE',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - BSPT',
    status: 'Inactive',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - BS',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - BS',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - BS',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
  {
    participant: 'College - BS',
    status: 'Active',
    aysem: 20231,
    scheduleStart: '2023-08-16 : 12:00 AM',
    scheduleEnd: '2023-08-16 : 12:00 AM',
    dateCreated: '2023-08-16 : 12:00 AM',
  },
];
