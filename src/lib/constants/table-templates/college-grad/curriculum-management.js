import { Badge } from '@/components/ui/badge';

import { cn } from '../utils';

// List of Curriculums
export const collegeGradCurriculumManagementTemplate = [
  {
    accessorKey: 'courseCode',
    id: 'courseCode',
    header: 'Course Code',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'courseTitle',
    id: 'courseTitle',
    header: 'Course Title',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'preRequisites',
    id: 'preRequisites',
    header: 'Pre-Requisites',
    filterVariant: 'fuzzy',
    Cell: ({ value }) => {
      return (
        <Badge
          className={cn(
            value
              ? 'bg-green-500 text-green-500'
              : 'bg-yellow-500 text-yellow-500',
          )}
        >
          View Pre-Requisites
        </Badge>
      );
    },
  },
];
