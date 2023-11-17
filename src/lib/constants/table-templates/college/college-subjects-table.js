import { Badge } from '@/components/ui/badge';

export const fakeSubjectTemplate = [
  {
    accessorKey: 'subjectName',
    id: 'subjectName',
    header: 'Subject',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'underGrad',
    id: 'underGrad',
    header: 'Type',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'subjectType',
    id: 'subjectType',
    header: 'Subject Type',
    filterVariant: 'fuzzy',
    Cell: ({ cell }) => {
      return (
        <Badge
          variant={
            cell.getValue() === 'Synchronous' ? 'outlinePrimary' : 'outline'
          }
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'activeStatus',
    id: 'activeStatus',
    header: 'Active Status',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'dateCreated',
    id: 'dateCreated',
    header: 'Created At',
    filterVariant: 'fuzzy',
  },
];
