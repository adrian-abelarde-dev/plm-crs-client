import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const fakeCollegeStudentsTemplate = [
  {
    accessorKey: 'firstName',
    id: 'firstName',
    header: 'First Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'middleName',
    id: 'middleName',
    header: 'Middle Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'lastName',
    id: 'lastName',
    header: 'Last Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'program',
    id: 'program',
    header: 'Program',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'regCode',
    id: 'regCode',
    header: 'Registration Code',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'enrollmentStatus',
    id: 'enrollmentStatus',
    header: 'Enrollment Status',
    filterVariant: 'fuzzy',
    Cell: ({ cell }) => {
      return (
        <Badge
          variant='outline'
          className={cn({
            'bg-[#c0e6dc] text-[#008052] border-[#00b983]':
              cell.getValue() === 'Enlisted',
            'bg-[#fef2f3] text-[#eb4045] border-[#eb4045]':
              cell.getValue() === 'Not Enlisted',
          })}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
];
