'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { testPromise } from '@/lib/utils';
import { ArchiveIcon, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

import AddMeeting from './add-meeting';

const fakeMeetings = [
  {
    meetingId: 'CET 0123.1-2',
    label: 'Computer-Aided Drafting (Lec)',
    meetingType: 'Asynchronous - Field',
    college: 'College of Engineering',
    status: 'Active',
    dateCreated: '2023-08-17 : 12:00 AM',
  },
  {
    meetingId: 'ART 0456.3-1',
    label: 'Introduction to Painting (Lec)',
    meetingType: 'Synchronous - Virtual',
    college: 'College of Arts',
    status: 'Active',
    dateCreated: '2023-09-02 : 03:30 PM',
  },
  {
    meetingId: 'BUS 0789.2-3',
    label: 'Marketing Strategies (Lec)',
    meetingType: 'Asynchronous - Field',
    college: 'College of Business',
    status: 'Inactive',
    dateCreated: '2023-07-25 : 09:15 AM',
  },
  {
    meetingId: 'SCI 0234.4-1',
    label: 'Advanced Physics (Lab)',
    meetingType: 'Synchronous - On Campus',
    college: 'College of Science',
    status: 'Active',
    dateCreated: '2023-08-12 : 01:45 PM',
  },
  {
    meetingId: 'HIS 0567.1-1',
    label: 'World History (Lec)',
    meetingType: 'Asynchronous - Field',
    college: 'College of Humanities',
    status: 'Active',
    dateCreated: '2023-09-05 : 10:30 AM',
  },
  {
    meetingId: 'ENG 0345.3-2',
    label: 'Creative Writing Workshop (Lec)',
    meetingType: 'Synchronous - Virtual',
    college: 'College of Arts',
    status: 'Active',
    dateCreated: '2023-08-20 : 02:00 PM',
  },
  {
    meetingId: 'MATH 0123.2-1',
    label: 'Calculus II (Lec)',
    meetingType: 'Asynchronous - Field',
    college: 'College of Science',
    status: 'Active',
    dateCreated: '2023-07-28 : 11:10 AM',
  },
  {
    meetingId: 'PHIL 0890.1-1',
    label: 'Ethics and Morality (Lec)',
    meetingType: 'Synchronous - On Campus',
    college: 'College of Humanities',
    status: 'Active',
    dateCreated: '2023-09-10 : 04:20 PM',
  },
  {
    meetingId: 'CS 0678.4-1',
    label: 'Data Structures (Lab)',
    meetingType: 'Synchronous - Virtual',
    college: 'College of Engineering',
    status: 'Active',
    dateCreated: '2023-08-05 : 03:55 PM',
  },
  {
    meetingId: 'CHEM 0456.2-1',
    label: 'Chemical Reactions (Lab)',
    meetingType: 'Asynchronous - Field',
    college: 'College of Science',
    status: 'Inactive',
    dateCreated: '2023-09-15 : 08:45 AM',
  },
];

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
        template={fakeMeetingsTemplate}
        data={fakeMeetings}
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
