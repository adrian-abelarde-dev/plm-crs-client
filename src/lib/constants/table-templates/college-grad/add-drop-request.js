'use client';

import ViewRequest from '@/app/(private-routes)/college-grad/transactions/add-drop/view-request';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const addDropRequestTemplate = [
  {
    accessorKey: 'studentNumber',
    id: 'studentNumber',
    header: 'Student Number',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'view',
    id: 'view',
    header: 'Action',
    filterVariant: 'fuzzy',
    Cell: ({ row }) => {
      return <ViewRequest row={row} />;
    },
  },
  {
    accessorKey: 'studentName',
    id: 'studentName',
    header: 'Student Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'programId',
    id: 'programId',
    header: 'Program',
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
            cell.getValue() === 'Approved'
              ? 'bg-[#c0e6dc] text-[#00b983] border-[#00b983]'
              : cell.getValue() === 'Pending'
                ? 'bg-[#fff9e1] text-[#fec141] border-[#fec141]'
                : 'bg-[#fef2f3] text-[#eb4045] border-[#eb4045]',
          )}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
];
