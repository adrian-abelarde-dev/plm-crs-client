'use client';

import { addMeeting } from '@/components/component/admin/admin-api-functions';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { collegeDepartments } from '@/lib/constants/fake-data/college-sections';
import { onError, onSuccess } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const meetingTypesContent = [
  {
    label: 'Asynchronous - Field',
    value: 'asynchronous-field',
  },
  {
    label: 'Asynchronous - Online',
    value: 'asynchronous-online',
  },
  {
    label: 'Synchronous - Online',
    value: 'synchronous-online',
  },
  {
    label: 'Synchronous - F2F',
    value: 'synchrnous-f2f',
  },
];

const statusContent = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];

export default function AddMeeting() {
  const MeetingSchema = z.object({
    meetingId: z.string().min(1),
    label: z.string().min(1),
    meetingType: z.string().min(1),
    college: z.string().min(1),
    status: z.string().min(1),
  });

  const addMeetingForm = useForm({
    resolver: zodResolver(MeetingSchema),

    // values: {
    //   meetingId: 'CET 0123.1-2',
    // },
  });

  async function onSubmit(values) {
    try {
      const data = await addMeeting(
        values.meetingId,
        values.label,
        values.meetingType,
        values.college,
        values.status,
      );
      if (data) {
        onSuccess(data.message);
      } else {
        onError("Couldn't add meeting");
      }
    } catch (error) {
      onError("Couldn't add meeting");
      console.log(error);
      throw error;
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Meeting</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Meeting</DialogTitle>
        </DialogHeader>
        <Form {...addMeetingForm}>
          <form onSubmit={addMeetingForm.handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <FormField
                control={addMeetingForm.control}
                name='meetingId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting ID</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter Meeting ID...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addMeetingForm.control}
                name='label'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Label</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Meeting Label...'
                        {...field} // Ensure the field object is spread here
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addMeetingForm.control}
                name='meetingType'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a meeting type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea
                          className={meetingTypesContent.length >= 10 && 'h-96'}
                        >
                          {meetingTypesContent.map((item) => {
                            return (
                              <SelectItem value={item.value} key={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addMeetingForm.control}
                name='college'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a college' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea
                          className={collegeDepartments.length >= 10 && 'h-96'}
                        >
                          {collegeDepartments.map((item) => {
                            return (
                              <SelectItem value={item.value} key={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addMeetingForm.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a status' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea
                          className={statusContent.length >= 10 && 'h-96'}
                        >
                          {statusContent.map((item) => {
                            return (
                              <SelectItem value={item.value} key={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose className='flex gap-2' asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>
                Add Meeting
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
