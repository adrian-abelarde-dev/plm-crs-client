'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { useToast } from '@/components/ui/use-toast';
import { testPromise } from '@/lib/utils';
import { ArchiveIcon, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import AddRoom from './add-room';

const fakeRooms = [
  {
    roomId: 'GCA 106',
    roomName: 'Accenture Room',
    building: 'Gusaling Villegas',
    dateCreated: '2023-08-17 : 12:00 AM',
  },
  {
    roomId: 'MKT 202',
    roomName: 'Marketing Meeting Room',
    building: 'Smith Building',
    dateCreated: '2023-09-05 : 10:30 AM',
  },
  {
    roomId: 'ENG 101',
    roomName: 'Engineering Lab',
    building: 'Science Center',
    dateCreated: '2023-07-20 : 03:45 PM',
  },
  {
    roomId: 'LIB 301',
    roomName: 'Library Study Room',
    building: 'Main Library',
    dateCreated: '2023-08-10 : 09:15 AM',
  },
  {
    roomId: 'ART 201',
    roomName: 'Art Studio',
    building: 'Creative Arts Building',
    dateCreated: '2023-09-15 : 02:00 PM',
  },
  {
    roomId: 'CONF 102',
    roomName: 'Conference Room B',
    building: 'Corporate Tower',
    dateCreated: '2023-07-30 : 11:45 AM',
  },
  {
    roomId: 'LIT 202',
    roomName: 'Literature Classroom',
    building: 'Humanities Building',
    dateCreated: '2023-09-12 : 04:20 PM',
  },
  {
    roomId: 'SCI 301',
    roomName: 'Science Lecture Hall',
    building: 'Science Center',
    dateCreated: '2023-07-25 : 01:30 PM',
  },
  {
    roomId: 'CONF 301',
    roomName: 'Executive Conference Room',
    building: 'Corporate Tower',
    dateCreated: '2023-08-05 : 10:00 AM',
  },
  {
    roomId: 'MATH 101',
    roomName: 'Mathematics Classroom',
    building: 'Mathematics Building',
    dateCreated: '2023-09-20 : 09:45 AM',
  },
];

const fakeRoomsTemplate = [
  {
    accessorKey: 'roomId',
    id: 'roomId',
    header: 'Room ID',
    filterVariant: 'fuzzy',
    Cell: ({ cell }) => {
      const value = cell.getValue().replace(/\s/g, '-');
      return (
        <Link
          className='underline hover:text-gray-600'
          href={`/college/rooms/${value}`}
        >
          {cell.getValue()}
        </Link>
      );
    },
  },
  {
    accessorKey: 'roomName',
    id: 'roomName',
    header: 'Room Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'building',
    id: 'building',
    header: 'Building',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'dateCreated',
    id: 'dateCreated',
    header: 'Date Created',
    filterVariant: 'fuzzy',
  },
];

export default function RoomPage() {
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
        template={fakeRoomsTemplate}
        data={fakeRooms}
        title='Rooms'
        searchPlaceholder='Search Rooms...'
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <>
            <AlertConfirmModal
              label='Archive'
              title='Are you sure you want to archive this room?'
              description='You can still undo this action. This will only archive the room and not delete it.'
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
            <AddRoom />
          </>
        }
      />
    </main>
  );
}
