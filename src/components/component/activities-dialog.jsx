import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  fakeParticipants,
  fakeParticipantsRowActions,
  fakeParticipantsTemplate,
} from '@/lib/constants/fake-participants-data';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, MousePointerSquare } from 'lucide-react';
import { useState } from 'react';

import TableMRT from '../layouts/table-mrt';

const AddParticipantDialogForm = () => {
  const [date, setDate] = useState({
    from: new Date(2021, 8, 1, 8, 0), // 2021-09-01 08:00
    to: new Date(2021, 8, 1, 17, 0), // 2021-09-01 17:00
  });

  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('17:00');

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Participant</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add participant</DialogTitle>
          <DialogDescription>
            Add a new participant here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          {/* Participant Name */}
          <section className='w-full flex flex-col gap-2'>
            <Label htmlFor='activity-name'>Participant Name</Label>
            <Input id='activity-name' placeholder='Enter participant name' />
          </section>

          {/* AY-SEM */}
          <section className='w-full flex flex-col gap-2'>
            <Label htmlFor='ay-sem'>AY-SEM</Label>
            <Input id='ay-sem' placeholder='Enter AY-SEM' />
          </section>

          {/* Date: Start and End */}
          <section className='w-full flex flex-col gap-2'>
            <Label>Date Range</Label>
            <Popover>
              <PopoverTrigger className='w-full' asChild>
                <Button
                  id='date'
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, 'LLL dd, y HH:mm')} -{' '}
                        {format(date.to, 'LLL dd, y HH:mm')}
                      </>
                    ) : (
                      format(date.from, 'LLL dd, y HH:mm')
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  initialFocus
                  mode='range'
                  defaultMonth={date?.from}
                  selected={{
                    from: date?.from,
                    to: date?.to,
                  }}
                  onSelect={(selectedDate) => {
                    const fromHours = parseInt(startTime.split(':')[0]);
                    const fromMinutes = parseInt(startTime.split(':')[1]);

                    const toHours = parseInt(endTime.split(':')[0]);
                    const toMinutes = parseInt(endTime.split(':')[1]);

                    const from = new Date(
                      selectedDate.from.getFullYear(),
                      selectedDate.from.getMonth(),
                      selectedDate.from.getDate(),
                      fromHours,
                      fromMinutes,
                    );

                    const to = selectedDate.to
                      ? new Date(
                          selectedDate.to.getFullYear(),
                          selectedDate.to.getMonth(),
                          selectedDate.to.getDate(),
                          toHours,
                          toMinutes,
                        )
                      : null;

                    setDate({ from, to });
                  }}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </section>

          {/* Time: Start and End */}
          <section className='flex gap-2 w-full'>
            <section className='w-full flex flex-col gap-2'>
              <Label>Start Time</Label>
              <Input
                type='time'
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </section>

            {/* End Time */}
            <section className='w-full flex flex-col gap-2'>
              <Label>End Time</Label>
              <Input
                type='time'
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </section>
          </section>
        </div>
        <DialogFooter className='w-full flex justify-end'>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ActivitiesDialog = ({ value }) => {
  return (
    <Dialog>
      <DialogTrigger className='text-left underline flex items-center gap-2 hover:text-zinc-500'>
        {value} <MousePointerSquare className='h-4 w-4' />
      </DialogTrigger>
      <DialogContent className='max-w-[80%] flex flex-col overflow-y-scroll max-h-[80%]'>
        <TableMRT
          template={fakeParticipantsTemplate}
          data={fakeParticipants}
          title='Encoding of Classes'
          description='Add, edit, and delete participants.'
          searchPlaceholder='Search Participants'
          RightButtons={<AddParticipantDialogForm />}
          LeftButtons={
            <Button className='text-[#0F172A]' variant='outline'>
              Click
            </Button>
          }
          RowActions={
            <>
              {fakeParticipantsRowActions.map((rowAction) => {
                return (
                  <Button
                    key={rowAction.label}
                    className={cn(
                      `text-zinc-900 justify-between hover:bg-zinc-100`,
                      // If label includes 'trash' or 'delete' make the text red and icon
                      // color red
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
      </DialogContent>
    </Dialog>
  );
};

export default ActivitiesDialog;
