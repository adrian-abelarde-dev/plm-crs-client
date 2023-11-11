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

export const collegeClassManagementData = [
  {
    subjectCode: 'GYM-123',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Active',
  },
  {
    subjectCode: 'GYM-456',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Closed',
  },
  {
    subjectCode: 'GYM-789',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Active',
  },
  {
    subjectCode: 'GYM-101',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Closed',
  },
  {
    subjectCode: 'GYM-112',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Active',
  },
  {
    subjectCode: 'GYM-131',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Closed',
  },
  {
    subjectCode: 'GYM-415',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Active',
  },
  {
    subjectCode: 'GYM-161',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Closed',
  },
  {
    subjectCode: 'GYM-718',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Active',
  },
  {
    subjectCode: 'GYM-191',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Closed',
  },
  {
    subjectCode: 'GYM-112',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Active',
  },
  {
    subjectCode: 'GYM-131',
    subjectName: 'Juan Dela Cruz',
    yearTerm: 'Professor',
    professor: 'CET-GP',
    status: 'Closed',
  },
];
