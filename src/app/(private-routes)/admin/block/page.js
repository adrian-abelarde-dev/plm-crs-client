'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { useToast } from '@/components/ui/use-toast';
import { testPromise } from '@/lib/utils';
import { ArchiveIcon, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

import AddBlock from './add-block';

const fakeBlocks = [
  {
    blockId: 'AYSEM20231001',
    block: 'BSCS 4-2',
    collegeId: 'CET',
    slots: '50',
    enlisted: '50',
    dateCreated: '2023-08-17 : 12:00 AM',
  },
  {
    blockId: 'AYSEM20231002',
    block: 'BSCS 2-1',
    collegeId: 'CET',
    slots: '40',
    enlisted: '35',
    dateCreated: '2023-09-05 : 10:30 AM',
  },
  {
    blockId: 'AYSEM20231003',
    block: 'BSEE 3-2',
    collegeId: 'CET',
    slots: '45',
    enlisted: '42',
    dateCreated: '2023-09-12 : 2:15 PM',
  },
  {
    blockId: 'AYSEM20231004',
    block: 'BSCpE 1-1',
    collegeId: 'CET',
    slots: '30',
    enlisted: '28',
    dateCreated: '2023-09-20 : 4:45 PM',
  },
  {
    blockId: 'AYSEM20231005',
    block: 'BSIT 2-2',
    collegeId: 'CET',
    slots: '35',
    enlisted: '33',
    dateCreated: '2023-10-02 : 9:00 AM',
  },
  {
    blockId: 'AYSEM20231006',
    block: 'BSCS 3-1',
    collegeId: 'CET',
    slots: '42',
    enlisted: '40',
    dateCreated: '2023-10-15 : 3:30 PM',
  },
  {
    blockId: 'AYSEM20231007',
    block: 'BSEE 4-2',
    collegeId: 'CET',
    slots: '48',
    enlisted: '46',
    dateCreated: '2023-10-28 : 11:15 AM',
  },
  {
    blockId: 'AYSEM20231008',
    block: 'BSCpE 2-1',
    collegeId: 'CET',
    slots: '37',
    enlisted: '34',
    dateCreated: '2023-11-09 : 5:00 PM',
  },
  {
    blockId: 'AYSEM20231009',
    block: 'BSIT 4-2',
    collegeId: 'CET',
    slots: '50',
    enlisted: '50',
    dateCreated: '2023-11-22 : 8:45 AM',
  },
  {
    blockId: 'AYSEM20231010',
    block: 'BSCS 1-1',
    collegeId: 'CET',
    slots: '30',
    enlisted: '28',
    dateCreated: '2023-12-05 : 1:30 PM',
  },
];

const fakeBlocksTemplate = [
  {
    accessorKey: 'blockId',
    id: 'blockId',
    header: 'Block ID',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'block',
    id: 'block',
    header: 'Block',
    filterVarient: 'fuzzy',
  },
  {
    accessorKey: 'collegeId',
    id: 'collegeId',
    header: 'College ID',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'slots',
    id: 'slots',
    header: 'Slots',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'enlisted',
    id: 'enlisted',
    header: 'Enlisted',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'dateCreated',
    id: 'dateCreated',
    header: 'Date Created',
    filterVariant: 'fuzzy',
  },
];

function BlockPage() {
  const [rowSelection, setRowSelection] = useState({});
  const { toast } = useToast();

  async function sampleConfirmFunction(id) {
    try {
      const result = await testPromise(id);

      if (result) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <h1>Success!</h1>
            </div>
          ),
          description: <>Changes have been Saved.</>,
        });
      }
    } catch (error) {
      console.error({ error });

      toast({
        variant: 'destructive',
        title: (
          <div className='flex flex-row'>
            <XCircle className='mr-2 h-4 w-4' />
            <h1>Error!</h1>
          </div>
        ),
        description: <>Error saving your data</>,
      });
    }
  }

  return (
    <main className='w-full p-6'>
      <TableMRT
        isCheckBoxVisible
        enableRowSelection
        template={fakeBlocksTemplate}
        data={fakeBlocks}
        title='Blocks'
        searchPlaceholder='Search Blocks...'
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <>
            <AlertConfirmModal
              label='Archive'
              title='Are you sure you want to archive this block?'
              description='You can still undo this action. This will only archive the block and not delete it.'
              cancelLabel='Cancel'
              confirmLabel='Archive'
              confirmFunction={() => {
                sampleConfirmFunction();
              }}
              triggerIcon={<ArchiveIcon className='w-4 h-4 ml-2' />}
              triggerVariant='outline'
              triggerDisabled={
                Object.keys(rowSelection).length === 0 ? true : false
              }
              className='w-full items-start justify-between text-left flex text-destructive hover:text-destructive/90'
            />
            <AddBlock />
          </>
        }
      />
    </main>
  );
}

export default BlockPage;
