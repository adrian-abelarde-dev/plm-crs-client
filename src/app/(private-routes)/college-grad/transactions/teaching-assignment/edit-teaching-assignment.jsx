import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from '@/components/ui/use-toast';
import { typeOfLoads } from '@/lib/constants/types-of-load';
import { cn, totalUnits } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle, Edit } from 'lucide-react';

import Load from './load';

function EditTeachingAssignment({ subjects, setSubjects }) {
  function onSubmit(values) {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Course has been added.</>,
    });

    console.log(values);
  }

  function handleEffectivityDate(newDate, subjectCode) {
    setSubjects((prevAssignments) => {
      const updatedAssignments = [...prevAssignments];
      const index = updatedAssignments.findIndex(
        (assignment) => assignment.subjectCode === subjectCode,
      );

      if (index !== -1) {
        updatedAssignments[index] = {
          ...updatedAssignments[index],
          effectivityDate: newDate,
        };
      }

      return updatedAssignments;
    });
  }

  const loads = [
    { label: 'Regular Load (RL)', loadType: 'RL' },
    { label: 'Extra Load (EL)', loadType: 'EL' },
    { label: 'Administrative Load (AL)', loadType: 'AL' },
    { label: 'Substitution Load (SL)', loadType: 'SL' },
    { label: 'Off-Campus Load (OCL)', loadType: 'OCL' },
    { label: 'Outside Teaching Load (OTL)', loadType: 'OTL' },
    { label: 'Study Load (STL)', loadType: 'STL' },
    { label: 'Super Load Wow (SLW)', loadType: 'SLW' },
  ];

  return (
    <AlertDialog className='w-full'>
      <AlertDialogTrigger asChild>
        <Button>
          <Edit className='w-4 h-4 mr-2' />
          Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[95vw] h-[90vh]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Teaching Assignment</AlertDialogTitle>
          <AlertDialogDescription>
            Edit Teaching Assignment
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ScrollArea>
          {/* Table */}
          <Table className='mt-8'>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold text-black'>
                  Subject Code
                </TableHead>
                <TableHead className='font-bold text-black'>Section</TableHead>
                <TableHead className='font-bold text-black'>
                  Subject Title
                </TableHead>
                <TableHead className='font-bold text-black text-center'>
                  Units
                </TableHead>
                <TableHead className='font-bold text-black'>Schedule</TableHead>
                <TableHead className='font-bold text-black'>
                  No. of Students
                </TableHead>
                <TableHead className='font-bold text-black text-center'>
                  Credited Units
                </TableHead>
                <TableHead className='font-bold text-black'>College</TableHead>
                <TableHead className='font-bold text-black'>
                  Type of Load
                </TableHead>
                <TableHead className='font-bold text-black'>
                  Effectivity Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects?.map((subjects, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{subjects.subjectCode}</TableCell>
                    <TableCell>{subjects.section}</TableCell>
                    <TableCell>{subjects.subjectTitle}</TableCell>
                    <TableCell className='text-center'>
                      {subjects.units.toFixed(1)}
                    </TableCell>
                    <TableCell>{subjects.schedule}</TableCell>
                    <TableCell>{subjects.noOfStudents}</TableCell>
                    <TableCell className='text-center'>
                      {subjects.creditedUnits.toFixed(1)}
                    </TableCell>
                    <TableCell>{subjects.college}</TableCell>

                    {/* Type of Load */}
                    <TableCell>
                      <Select
                        // onValueChange={field.onChange}
                        defaultValue={subjects.typeOfLoad}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select a verified email to display' />
                        </SelectTrigger>

                        <SelectContent>
                          {typeOfLoads.map((load, index) => {
                            return (
                              <SelectItem key={index} value={load.value}>
                                {load.label}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </TableCell>

                    {/* Effectivity Date */}
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] justify-start text-left font-normal',
                              !subjects.effectivityDate &&
                                'text-muted-foreground',
                            )}
                          >
                            <CalendarIcon className='mr-2 h-4 w-4' />
                            {subjects.effectivityDate ? (
                              format(subjects.effectivityDate, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={subjects.effectivityDate}
                            onSelect={(newDate) =>
                              handleEffectivityDate(
                                newDate,
                                subjects.subjectCode,
                              )
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className='text-center'>
                  Total No. of Units:{' '}
                  <span className='text-bold'>
                    {totalUnits('units', subjects)}
                  </span>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className='text-center'>
                  Total No. of Credits:{' '}
                  <span className='text-bold'>
                    {totalUnits('creditedUnits', subjects)}
                  </span>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <div className='flex flex-col mt-8 place-items-center mb-4'>
            <Label className='text-3xl'>Summary of Loads</Label>
            <div class='grid grid-cols-3 gap-2 mt-4'>
              {loads.map((load, index) => {
                return (
                  <Load
                    key={index}
                    label={load.label}
                    loadType={load.loadType}
                    subjects={subjects}
                  />
                );
              })}
              <div className='flex justify-between place-items-center py-3 px-2 border rounded-md'>
                <div className='mr-10'>
                  <Label className='pr-10 font-bold'>Total</Label>
                </div>

                <Button variant='outline' className='cursor-context-menu'>
                  {totalUnits('creditedUnits', subjects)}
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>

        <AlertDialogFooter className='w-full flex justify-end mt-4'>
          <AlertDialogCancel asChild>
            <Button variant='outline'>Close</Button>
          </AlertDialogCancel>

          <Button type='submit'>Save</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditTeachingAssignment;
