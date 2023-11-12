import { Badge } from '@/components/ui/badge';

import { cn } from '../utils';

export const collegeGradFacultyTemplate = [
  {
    accessorKey: 'identity',
    id: 'identity',
    header: 'Identity',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'name',
    id: 'name',
    header: 'Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'designation',
    id: 'designation',
    header: 'Designation',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'college',
    id: 'college',
    header: 'College',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'Status',
    filterVariant: 'fuzzy',
    Cell: ({ value }) => {
      return (
        <Badge
          className={cn(
            value === 'Active'
              ? 'bg-green-500 text-green-500'
              : 'bg-yellow-500 text-yellow-500',
          )}
        >
          {value}
        </Badge>
      );
    },
  },
];

export const collegeGradFacultyData = [
  {
    identity: '2018-00001',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Active',
  },
  {
    identity: '2018-00002',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Active',
  },
  {
    identity: '2018-00003',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00004',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00005',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00006',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00007',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00008',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00009',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
  {
    identity: '2018-00010',
    name: 'Juan Dela Cruz',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Inactive',
  },
];
