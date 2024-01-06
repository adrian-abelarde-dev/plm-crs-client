import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const fakeCollegeStudentsTemplate = [
  {
    accessorKey: 'studentNo',
    id: 'studentNo',
    header: 'Student Number',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'fullName',
    id: 'fullName',
    header: 'Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'regCode',
    id: 'regCode',
    header: 'Registration Code',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'program',
    id: 'program',
    header: 'Program',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'aySem',
    id: 'aySem',
    header: 'AY-SEM',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'yearBlock',
    id: 'yearBlock',
    header: 'Year & Block',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'studentType',
    id: 'studentType',
    header: 'Student Type',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'enrollmentStatus',
    id: 'enrollmentStatus',
    header: 'Status',
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
            'bg-[#FCF4A3] text-[#EAB308] border-[#FFD300]':
              cell.getValue() === 'Enrolled',
          })}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
];
