'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  collegeDays,
  collegeMeetTypes,
  collegeRooms,
} from '@/lib/constants/fake-data/college-schedule';
import {
  UserSchema,
  userSchemaDefaultValues,
} from '@/lib/constants/schema/user';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import InputFormField from '../../form/input-formfield';
import SelectFormField from '../../form/select-formfield';

function AddClassHourDialogForm() {
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('17:00');
  const addClassHours = useFormContext({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      userSchemaDefaultValues,
    },
  });

  console.log('added class hours');
  [];

  const [open, setOpen] = React.useState();
  const [value, setValue] = React.useState('');

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Class Hour</Button>
        </DialogTrigger>
        <DialogContent className='xsm:max-w-[100px] h-5/6 overflow-auto'>
          <DialogHeader>
            <DialogTitle>Add Class Hour</DialogTitle>
            <DialogDescription>
              This class hour will be linked to a specific schedule.
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-4'>
            <section className='w-full flex flex-col gap-2'>
              {/* Class Hour ID */}
              <InputFormField
                disabled={true}
                form={addClassHours}
                title={
                  <Label className='font-medium text-sm'>Class Hour ID</Label>
                }
                placeholder='CETBSCS0401'
                fieldName='classhourID'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />
              {/* Schedule ID */}
              <InputFormField
                disabled={true}
                form={addClassHours}
                title={
                  <Label className='font-medium text-sm'>Schedule ID</Label>
                }
                placeholder='CETBSCS0401-M08000930ASYNCOLGV301'
                fieldName='scheduleID'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
              />
              {/* Day */}
              <SelectFormField
                form={addClassHours}
                content={collegeDays}
                title='Day'
                placeholder='Enter day'
                fieldName='collegeDays'
              />
              {/* Time Start and Time Finish */}
              <section className='flex gap-4 w-full align-middle'>
                <section className='w-full flex flex-col gap-2'>
                  <div className='flex'>
                    <Label className='font-medium text-sm'>Time Start</Label>
                    <span className='text-red-500 ml-1'> *</span>
                  </div>
                  <Input
                    type='time'
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </section>

                {/* End Time */}
                <section className='w-full flex flex-col gap-2'>
                  <div className='flex '>
                    <Label className='font-medium text-sm'>Time Finish</Label>
                    <span className='text-red-500 ml-1'> *</span>
                  </div>
                  <Input
                    type='time'
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </section>
              </section>
              <p className='text-justify text-sm text-muted-foreground leading-normal pt-1'>
                This will automatically show all the available time. This is to
                avoid conflicting schedules.
              </p>
              {/* Room */}
              <div className='pt-2 gap-2 pb-2'>
                <div className='flex'>
                  <Label className='font-medium text-sm'>Room</Label>
                  <span className='text-red-500 ml-1'> *</span>
                </div>
                <p className='text-justify text-sm text-muted-foreground leading-normal'>
                  Consists of existing rooms that was made.
                </p>
                <div className='pt-2'>
                  <Popover
                    open={open}
                    onOpenChange={setOpen}
                    className='w-full'
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-full flex justify-between pt-2'
                      >
                        {value
                          ? collegeRooms.find(
                              (collegeRoom) => collegeRoom.value === value,
                            )?.label
                          : 'Room'}
                        <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-[200px] p-0'>
                      <Command>
                        <CommandInput placeholder='Search day...' />
                        <CommandEmpty>No rooms found.</CommandEmpty>
                        <CommandGroup>
                          {collegeRooms.map((collegeRoom) => (
                            <CommandItem
                              key={collegeRoom.value}
                              value={collegeRoom.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? '' : currentValue,
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  value === collegeRoom.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                              {collegeRoom.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              {/* Meeting Type */}
              <SelectFormField
                form={addClassHours}
                content={collegeMeetTypes}
                title='Meeting Type'
                placeholder='Enter meeting type'
                fieldName='collegeMeetTypes'
              />
            </section>
          </div>
          <DialogFooter className='w-full flex justify-evenly'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <div className='justify-between' />
            <Button type='submit'>Add Class Hour</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddClassHourDialogForm;
