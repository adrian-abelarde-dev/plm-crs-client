import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { View } from 'lucide-react';

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
    Cell: ({ cell }) => {
      console.log(cell.getValue());

      return (
        <Badge
          variant='outline'
          className={cn(
            cell.getValue() === 'Active'
              ? 'bg-[#c0e6dc] text-[#00b983] border-[#00b983]'
              : cell.getValue() === 'Pending to Assign'
              ? 'bg-[#fff9e1] text-[#fec141] border-[#fec141] '
              : 'bg-[#fef2f3] text-[#eb4045] border-[#eb4045]',
          )}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
];

export const collegeGradFacultyRowActions = [
  {
    label: 'Edit Activity',
    // icon: <View className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Deactivate',
    // icon: <Trash className='h-4 w-4' />,
  },
  {
    label: 'Activate',
    // icon: <Trash className='h-4 w-4' />,
  },
];
