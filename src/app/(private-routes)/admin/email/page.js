'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { fakeEmails } from '@/lib/constants/fake-data/emails';
import { handleRowSelectionChange } from '@/lib/utils';
import { Send } from 'lucide-react';
import { useState } from 'react';

const fakeEmailsTemplate = [
  {
    accessorKey: 'userId',
    id: 'userId',
    header: 'User ID',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'fullName',
    id: 'fullName',
    header: 'Full Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'email',
    id: 'email',
    header: 'Email',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'college',
    id: 'college',
    header: 'College',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'dateCreated',
    id: 'dateCreated',
    header: 'Date Created',
    filterVariant: 'fuzzy',
  },
];

function AdminEmailPage() {
  const [rowSelection, setRowSelection] = useState([]);
  const { toast } = useToast();

  const selectedEmail = handleRowSelectionChange(
    fakeEmails,
    fakeEmailsTemplate,
    rowSelection,
  );

  return (
    <main className='w-full p-6'>
      {/* Table: Schedule of Activites */}
      <TableMRT
        template={fakeEmailsTemplate}
        data={fakeEmails}
        title='Email'
        description='Email blast to students.'
        searchPlaceholder='Search Emails...'
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        enableRowActions={true}
        RightButtons={
          <section className='flex gap-2 items-center'>
            <Button
              onClick={() => {
                console.log('rowSelection', selectedEmail);

                if (Object.keys(selectedEmail).length === 0) {
                  toast({
                    title: 'Error',
                    description: 'Please select only one email.',
                    status: 'destructive',
                  });
                } else {
                  toast({
                    title: 'Success',
                    description: 'Email has been sent.',
                    status: 'success',
                  });
                }
              }}
              disabled={Object.keys(selectedEmail).length === 0}
            >
              <Send className='mr-2 w-4 h-4' /> Send Email Blast
            </Button>
          </section>
        }
      />
    </main>
  );
}

export default AdminEmailPage;
