import { Badge } from '@/components/ui/badge';

import { cn } from '../utils';

export const collegeClassManagementTemplate = [
  {
    accessorKey: 'subjectCode',
    id: 'subjectCode',
    header: 'subjectCode',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'subjectName',
    id: 'subjectName',
    header: 'subjectName',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'yearTerm',
    id: 'yearTerm',
    header: 'yearTerm',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'professor',
    id: 'professor',
    header: 'professor',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'status',
    filterVariant: 'fuzzy',
    Cell: ({ value }) => {
      return (
        <Badge
          className={cn(
            value === 'Active'
              ? 'bg-green-500 text-green-500'
              : 'bg-red-500 text-red-500',
          )}
        >
          {value}
        </Badge>
      );
    },
  },
];
