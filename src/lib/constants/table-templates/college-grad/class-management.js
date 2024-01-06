import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const collegeClassManagementTemplate = [
  {
    accessorKey: 'subjectCode',
    id: 'subjectCode',
    header: 'Subject Code',
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
          variant='outline'
          className={cn(
            cell.getValue() === 'Active'
              ? 'bg-[#c0e6dc] text-[#00b983] border-[#00b983]'
              : 'bg-[#fef2f3] text-[#eb4045] border-[#eb4045]',
          )}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'subjectName',
    id: 'subjectName',
    header: 'Subject Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'yearTerm',
    id: 'yearTerm',
    header: 'Year/Term',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'professor',
    id: 'professor',
    header: 'Professor',
    filterVariant: 'fuzzy',
  },
];
