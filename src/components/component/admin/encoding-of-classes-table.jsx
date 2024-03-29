'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Dialog,
  DialogClose,
  DialogContent,
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
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  fakeParticipants,
  fakeParticipantsRowActions,
} from '@/lib/constants/fake-data/participants';
import { participantTypes } from '@/lib/constants/participant-types';
import {
  participantsIfCollege,
  participantsIfCourse,
  participantsIfEmployeeUser,
  participantsIfStudent,
  participantsIfYearLevel,
} from '@/lib/constants/participants';
import { cn } from '@/lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { CalendarIcon, CheckIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import TableMRT from '../../layouts/table-mrt';

function AddParticipantDialogForm() {
  const [participantTypeOpen, setParticipantTypeOpen] = useState(false);
  const [participantTypeValue, setParticipantTypeValue] = useState(null);

  const [participantOpen, setParticipantOpen] = useState(false);
  const [participantValue, setParticipantValue] = useState(null);

  const [date, setDate] = useState({
    from: new Date(2021, 8, 1, 8, 0),
    to: new Date(2021, 8, 1, 17, 0), // 2021-09-01 17:00
  });

  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('17:00');

  function getParticipants() {
    switch (participantTypeValue) {
      case 'college':
        return participantsIfCollege;
      case 'course':
        return participantsIfCourse;
      case 'yrlvl':
        return participantsIfYearLevel;
      case 'colyrlvl':
        return participantsIfYearLevel;
      case 'courseyrlvl':
        return participantsIfYearLevel;
      case 'student':
        return participantsIfStudent;
      case 'empuser':
        return participantsIfEmployeeUser;
      default:
        return [];
    }
  }

  useEffect(() => {
    setParticipantValue(null);
  }, [participantTypeValue]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Participant</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Participant</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          {/* Participant Type */}
          <section className='w-full flex flex-col gap-2'>
            <Label>Participant Type</Label>
            <Popover
              open={participantTypeOpen}
              onOpenChange={setParticipantTypeOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='w-full justify-between text-left'
                >
                  {participantTypeValue
                    ? participantTypes.find(
                        (participantType) =>
                          participantType.value === participantTypeValue,
                      )?.label
                    : 'Select type...'}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-full p-0'>
                <Command>
                  <CommandInput placeholder='Search type...' className='h-9' />
                  <CommandEmpty>No type found.</CommandEmpty>
                  <CommandGroup>
                    {participantTypes.map((participantType) => (
                      <CommandItem
                        key={participantType.value}
                        value={participantType.value}
                        onSelect={(currentValue) => {
                          setParticipantTypeValue(
                            currentValue === participantTypeValue
                              ? ''
                              : currentValue,
                          );
                          setParticipantTypeOpen(false);
                        }}
                      >
                        {participantType.label}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            participantTypeValue === participantType.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </section>

          {/* Participants */}
          <section className='w-full flex flex-col gap-2'>
            <Label>Participants</Label>
            <Popover
              open={participantOpen}
              onOpenChange={setParticipantOpen}
              disabled={!participantTypeValue}
            >
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='w-full justify-between text-left text-ellipsis'
                  disabled={!participantTypeValue}
                >
                  {participantValue
                    ? getParticipants().find(
                        (participant) => participant.value === participantValue,
                      )?.label
                    : 'Select participant...'}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0'>
                <Command>
                  <CommandInput
                    placeholder='Search participant...'
                    className='h-9'
                  />
                  <CommandEmpty>No participant found.</CommandEmpty>
                  <CommandGroup>
                    <ScrollArea className='h-36 w-48'>
                      {getParticipants().map((participant) => (
                        <CommandItem
                          key={participant.value}
                          value={participant.value}
                          onSelect={(currentValue) => {
                            setParticipantValue(
                              currentValue === participantValue
                                ? ''
                                : currentValue,
                            );
                            setParticipantOpen(false);
                          }}
                        >
                          {participant.label}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              participantValue === participant.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                        </CommandItem>
                      ))}
                    </ScrollArea>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </section>

          {/* Participant Name */}
          <section className='w-full flex flex-col gap-2'>
            <Label htmlFor='participant-name'>Participant Name</Label>
            <Input id='participant-name' placeholder='Enter participant name' />
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
                      selectedDate?.from.getFullYear(),
                      selectedDate?.from.getMonth(),
                      selectedDate?.from.getDate(),
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
          <Button type='submit'>Save Participant</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EncodingOfClassesTable() {
  const fakeParticipantsTemplate = [
    {
      accessorKey: 'participant',
      id: 'participant',
      header: 'Participant',
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
      filterVariant: 'fuzzy',
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
    <TableMRT
      template={fakeParticipantsTemplate}
      data={fakeParticipants}
      title='Encoding of Classes'
      description='Add, edit, and delete participants.'
      searchPlaceholder='Search Participants'
      isFullscreen={false}
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
                    rowAction.label.toLowerCase().includes('archive') ||
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

export default EncodingOfClassesTable;
