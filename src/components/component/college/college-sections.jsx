import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import {
  fakeSection,
  fakeSectionRowActions,
} from '@/lib/constants/fake-data/college-sections';
import { cn } from '@/lib/utils';
import { ArchiveIcon, Edit } from 'lucide-react';

function ArchiveSectionUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <ArchiveIcon className='inline-block w-4 h-4 mr-2' />
      Archive
    </Button>
  );
}

function EditSectionUndergrad() {
  return (
    <Button
      className='text-zinc-900 justify-between hover:bg-zinc-100'
      variant='outline'
    >
      <Edit className='inline-block w-4 h-4 mr-2 justify-between' />
      Edit
    </Button>
  );
}

function AddSectionUndergrad() {
  return (
    <Button className='bg border-black justify-between'>Add Section</Button>
  );
}

function CollegeSectionsPage() {
  const fakeSectionTemplate = [
    {
      accessorKey: 'collegeSection',
      id: 'collegeSection',
      header: 'Section',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'dateCreated',
      id: 'dateCreated',
      header: 'Date Created',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <TableMRT
      template={fakeSectionTemplate}
      data={fakeSection}
      title='Sections'
      description=''
      searchPlaceholder='Search sections...'
      isCheckBoxVisible={true}
      RightButtons={
        <>
          <ArchiveSectionUndergrad />
          <EditSectionUndergrad />
          <AddSectionUndergrad />
        </>
      }
      RowActions={
        <>
          {fakeSectionRowActions.map((rowAction) => {
            return (
              <Button
                key={rowAction.label}
                className={cn(
                  `text-zinc-900 justify-between hover:bg-zinc-100`,
                  (rowAction.label.toLowerCase().includes('trash') ||
                    rowAction.label.toLowerCase().includes('delete')) &&
                    'text-destructive hover:text-red-400',
                )}
                variant='ghost'
              >
                {rowAction.label}
                {rowAction.icon}
              </Button>
            );
          })}
        </>
      }
    />
  );
}

export default CollegeSectionsPage;
