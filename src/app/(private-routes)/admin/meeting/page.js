'use client';

import { getAllMeetings } from '@/components/component/admin/admin-api-functions';
import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { testPromise } from '@/lib/utils';
import { ArchiveIcon, CheckCircle, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import AddMeeting from './add-meeting';

const fakeMeetingsTemplate = [
  {
    accessorKey: 'meetingId',
    id: 'meetingId',
    header: 'Meeting ID',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'label',
    id: 'label',
    header: 'Label',
    filterVarient: 'fuzzy',
  },
  {
    accessorKey: 'meetingType',
    id: 'meetingType',
    header: 'Meeting Type',
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
      return (
        <Badge
          variant={cell.getValue() === 'Active' ? 'outlinePrimary' : 'outline'}
        >
          {cell.getValue()}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'dateCreated',
    id: 'dateCreated',
    header: 'Date Created',
    filterVariant: 'fuzzy',
  },
];

function MeetingPage() {
  const [rowSelection, setRowSelection] = useState({});
  const [meeting, setMeeting] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMeetings();

        if (data) {
          setMeeting(data);
          console.log(data);
        }
      } catch (error) {
        console.error('Error editing user:', error);
        // Handle error as needed, e.g., display an error message or log it
        throw error;
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  return (
    <main className='w-full p-6'>
      <TableMRT
        isCheckBoxVisible
        enableRowSelection
        template={fakeMeetingsTemplate}
        data={meeting}
        title='Meetings'
        searchPlaceholder='Search Meetings...'
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        RightButtons={
          <>
            <AlertConfirmModal
              label='Archive'
              title='Are you sure you want to archive this meeting?'
              description='You can still undo this action. This will only archive the meeting and not delete it.'
              cancelLabel='Cancel'
              confirmLabel='Archive'
              confirmFunction={() => {
                sampleConfirmFunction('test');
              }}
              triggerIcon={<ArchiveIcon className='w-4 h-4 ml-2' />}
              triggerVariant='outline'
              triggerDisabled={
                Object.keys(rowSelection).length === 0 ? true : false
              }
              className='w-full items-start justify-between text-left flex text-destructive hover:text-destructive/90'
            />
            <AddMeeting />
          </>
        }
      />
    </main>
  );
}

export default MeetingPage;
