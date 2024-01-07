'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
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
import { toast } from '@/components/ui/use-toast';
import { fakeActivitiesRowActions } from '@/lib/constants/fake-data/activities';
import { cn } from '@/lib/utils';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { format } from 'date-fns';
import {
  CalendarIcon,
  CheckCircle,
  MousePointerSquare,
  XCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { addActivity, getAllActivities } from './admin-api-functions';
import EncodingOfClassesTable from './encoding-of-classes-table';

function AddActivityDialogForm() {
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [activityName, setActivityName] = useState('');
  const [aysem, setAysem] = useState('');

  const handleSaveActivity = async () => {
    try {
      // Call the addActivity function with the required parameters
      const data = await addActivity(
        activityName,
        date,
        startTime,
        endTime,
        aysem,
      );

      // Check if the addActivity function was successful
      if (data) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <h1>Success!</h1>
            </div>
          ),
          description: <>{data.message}</>,
        });
      } else {
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
        console.error('Error adding activity');
      }
    } catch (error) {
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
      console.error('error:', error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Activity</Button>
      </DialogTrigger>
      <DialogContent className='xsm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Activity</DialogTitle>
          <DialogDescription>
            Add a new activity here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          {/* Activity Name */}
          <section className='w-full flex flex-col gap-2'>
            <Label htmlFor='activity-name'>Activity Name</Label>
            <Input
              id='activity-name'
              placeholder='Enter activity name'
              onChange={(e) => setActivityName(e.target.value)}
            />
          </section>

          {/* AY-SEM */}
          <section className='w-full flex flex-col gap-2'>
            <Label htmlFor='ay-sem'>AY-SEM</Label>
            <Input
              id='ay-sem'
              placeholder='Enter AY-SEM'
              onChange={(e) => setAysem(e.target.value)}
            />
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
                    date?.to ? (
                      <>
                        {format(date?.from, 'LLL dd, y HH:mm')} -{' '}
                        {format(date?.to, 'LLL dd, y HH:mm')}
                      </>
                    ) : (
                      format(date?.from, 'LLL dd, y HH:mm')
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
          <Button type='submit' onClick={handleSaveActivity}>
            Save Activity
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ScheduleOfActivitiesTable() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllActivities();
        // Do something with the data
        setActivities((prev) => {
          return [...prev, ...data];
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const activitiesTemplate = [
    {
      accessorKey: 'activities',
      id: 'activities',
      header: 'Activities',
      filterVariant: 'fuzzy',
      size: 320,
      Cell: ({ cell }) => {
        return (
          <Button
            variant='ghost'
            className='flex gap-2 items-center text-left text-zinc-900 hover:bg-transparent hover:text-zinc-400'
            onClick={open}
          >
            {cell.getValue()} <MousePointerSquare className='h-4 w-4' />
          </Button>
        );
      },
    },
    {
      accessorKey: 'status',
      id: 'status',
      header: 'Status',
      filterVariant: 'select',
      Cell: ({ cell }) => {
        return (
          <Badge
            variant={
              cell.getValue() === 'Active' ? 'outlinePrimary' : 'outline'
            }
          >
            {cell.getValue()}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'aysem',
      id: 'aysem',
      header: 'AY-SEM',
      filterVariant: 'select',
    },
    {
      accessorKey: 'scheduleStart',
      id: 'scheduleStart',
      header: 'Schedule Start',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'scheduleEnd',
      id: 'scheduleEnd',
      header: 'Schedule End',
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
    <>
      {/* Modal with Table: Encoding of Classes */}
      <Modal
        opened={opened}
        onClose={close}
        title='Encoding of Classes'
        radius={'md'}
        zIndex={50}
        overlayProps={{
          blur: 3,
        }}
        // Make width and height 100% of the screen
        size='100%'
      >
        {<EncodingOfClassesTable />}
      </Modal>

      {/* Table: Schedule of Activites */}
      <TableMRT
        template={activitiesTemplate}
        data={activities}
        title='Schedule of Activities'
        description='Add, edit, and delete activities.'
        searchPlaceholder='Search Activities'
        RightButtons={<AddActivityDialogForm />}
        RowActions={
          <>
            {fakeActivitiesRowActions.map((rowAction) => {
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
    </>
  );
}

export default ScheduleOfActivitiesTable;
