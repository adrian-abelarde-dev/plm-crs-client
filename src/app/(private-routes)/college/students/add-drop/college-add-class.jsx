import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { subjectAndSchedule } from '@/lib/constants/fake-data/available-sched-of-subjects';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, PlusCircle } from 'lucide-react';
import { useState } from 'react';

function AddClassDialogForm({ disabled }) {
  const [open, setOpen] = useState(false);
  const [subjectValue, setSubjectValue] = useState('');
  const [selectedSubjectValue, setSelectedSubjectValue] = useState(null);
  const [addSubject, setAddSubject] = useState(null);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={disabled}>
          <PlusCircle className='w-4 h-4 mr-2' /> Add Class
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='md:max-w-[700px] h-[380px] overflow-auto'>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Class</AlertDialogTitle>
          <AlertDialogDescription>
            Select a subject to pick for a schedule.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* Combobox for Subject list*/}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='w-[500px] justify-between'
            >
              {subjectValue
                ? subjectAndSchedule.find(
                    (framework) => framework.subjectValue === subjectValue,
                  )?.subjectLabel
                : 'Select subject here...'}

              <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[500px] p-0'>
            <Command>
              <CommandInput placeholder='Search subject...' />
              <CommandEmpty>No subject found.</CommandEmpty>
              <CommandGroup>
                {subjectAndSchedule.map((framework) => (
                  <CommandItem
                    key={framework.subjectValue}
                    subjectValue={framework.subjectValue}
                    onSelect={(currentSubjectValue) => {
                      setAddSubject(null);
                      setSubjectValue(
                        currentSubjectValue === subjectValue
                          ? ''
                          : currentSubjectValue,
                      );
                      setSelectedSubjectValue(
                        subjectAndSchedule.find(
                          (f) => f.subjectValue === currentSubjectValue,
                        ),
                      );
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        subjectValue === framework.subjectValue
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                    {framework.subjectLabel}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Tabular list of available classes */}
        {subjectValue && subjectValue !== 'Select subject here..' ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Credits</TableHead>
              </TableRow>
            </TableHeader>
            {selectedSubjectValue?.classInformation.map((classInfo, index) => (
              <TableRow key={index}>
                <TableCell>
                  {' '}
                  <input
                    type='radio'
                    checked={addSubject === classInfo}
                    onChange={() => setAddSubject(classInfo)}
                  />
                </TableCell>
                <TableCell className='text-sm'>
                  {selectedSubjectValue.subjectLabel}
                </TableCell>
                <TableCell className='text-sm'>{classInfo.section}</TableCell>
                <TableCell className='text-sm'>{classInfo.schedule}</TableCell>
                <TableCell className='text-sm'>{classInfo.credits}</TableCell>
              </TableRow>
            ))}
          </Table>
        ) : (
          <div className='w-full h-36'></div>
        )}
        <AlertDialogFooter className='bottom-0 left-0 w-full'>
          <AlertDialogCancel
            onClick={() => {
              setSubjectValue('');
              setSelectedSubjectValue(null);
            }}
          >
            Cancel
          </AlertDialogCancel>

          {/* Add Class */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                disabled={Object.keys(subjectValue).length === 0 || !addSubject}
              >
                Add Class
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='md:max-w-[700px] h-[300px] overflow-auto'>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Proceeding will result in the addition of the following
                  subject:
                </AlertDialogDescription>
              </AlertDialogHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead>Credits</TableHead>
                  </TableRow>
                </TableHeader>
                {addSubject && (
                  <TableRow>
                    <TableCell>{selectedSubjectValue?.subjectLabel}</TableCell>
                    <TableCell>{addSubject.section}</TableCell>
                    <TableCell>{addSubject.schedule}</TableCell>
                    <TableCell>{addSubject.credits}</TableCell>
                  </TableRow>
                )}
              </Table>
              <AlertDialogFooter className='bottom-0 right-0 w-full'>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    setSubjectValue('');
                    setSelectedSubjectValue(null);
                    setAddSubject(null);
                  }}
                >
                  Proceed
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default AddClassDialogForm;
