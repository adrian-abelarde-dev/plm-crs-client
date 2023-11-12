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
