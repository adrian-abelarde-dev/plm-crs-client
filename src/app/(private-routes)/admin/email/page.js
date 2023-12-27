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
                selectedEmail?.forEach((email) => {
                  fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      to: email.email, // TODO: change this to personal email later; `email.email` is the PLM email
                      subject: 'PLM Email Activation',
                      text: `<h4>Dear ${email.fullName},</h4>
                              <p>
                                I hope this message finds you well. We are pleased to inform you that
                                your PLM email account has been successfully created and is now ready
                                for your use.
                              </p>
                              <div>
                                Here's your PLM email account details:<br/>
                                <strong>PLM email address is:</strong> ${email.email}<br/>
                                <strong>Password:</strong> ${email.userId}
                              </div>
                              <p>
                                <strong><i>Change your password immediately</i></strong>
                              </p>
                              <p>
                                This email account will serve as an essential communication tool for
                                official school announcements, updates, and correspondence with faculty
                                members. We would like to highlight that your PLM email will be used as
                                the primary account for accessing Microsoft services such as Outlook,
                                Teams, and other related platforms.
                              </p>
                              <p>
                                Please ensure that you use this email for all official communications
                                and activities related to your academic journey with us. If you
                                encounter any issues or have questions regarding your PLM email account,
                                feel free to reach out to our IT support team at
                                <a href='mailto:ITSupport@plm.edu'>ITSupport@plm.edu</a>.
                              </p>
                              <p>
                                Thank you for your attention to this matter, and we wish you a
                                successful and productive academic year.
                              </p>`,
                    }),
                  })
                    .then((data) => {
                      // Handle the data returned from the API
                      if (data.ok) {
                        toast({
                          title: 'Success',
                          description: `Email has been sent to ${email.email}`,
                          status: 'success',
                        });
                      } else {
                        console.log(data);
                        toast({
                          title: 'Error',
                          description:
                            'There has been a problem with sending email',
                          status: 'destructive',
                        });
                      }
                    })
                    .catch((err) => {
                      console.error(err);
                      toast({
                        title: 'Error',
                        description:
                          'There has been a problem with sending email',
                        status: 'destructive',
                      });
                    });
                });
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
