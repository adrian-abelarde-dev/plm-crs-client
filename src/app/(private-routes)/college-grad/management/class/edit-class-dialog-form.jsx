import DateFormField from '@/components/component/form/date-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { ClassSchema } from '@/lib/constants/schema/edit-class';
import { formatDateString } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Backpack,
  Book,
  Briefcase,
  Calendar,
  CheckCircle,
  CornerDownRight,
  Presentation,
  School,
  User,
  View,
} from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function EditClassDialogForm({ disabled, selectedClass }) {
  const editClassForm = useForm({
    resolver: zodResolver(ClassSchema),
  });

  useEffect(() => {
    if (selectedClass) {
      Object.keys(selectedClass).forEach((key) => {
        editClassForm.setValue(key, selectedClass[key]);
      });
    }
  }, [selectedClass, editClassForm]);

  const classStatus = [
    { label: 'Active', value: 'Active' },
    { label: 'Closed', value: 'Closed' },
  ];

  function CustomClassStatusBadges({ value }) {
    switch (value) {
      case 'Active':
        return (
          <Badge
            variant='ghost'
            className={'bg-[#c0e6dc] text-[#00b983] border-[#00b983]'}
          >
            {value}
          </Badge>
        );
      case 'Closed':
        return (
          <Badge
            variant='ghost'
            className={'bg-[#fef2f3] text-[#eb4045] border-[#eb4045]'}
          >
            {value}
          </Badge>
        );
      default:
        return <Badge variant='outline'>Unknown</Badge>;
    }
  }

  function onSubmit(values) {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Changes has been Saved.</>,
    });

    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <View className='w-4 h-4 mr-2' />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Faculty Details</DialogTitle>
          <DialogDescription>View a Faculty to the system</DialogDescription>
        </DialogHeader>

        <Form {...editClassForm}>
          <form
            onSubmit={editClassForm.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <ScrollArea className='h-96 w-full'>
              {/* Class Information */}
              <Card className='w-full mb-4'>
                <CardHeader>
                  <CardTitle>
                    Class Information
                    <Separator className='mt-4' />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Class Id */}
                  <div className='flex flex-col'>
                    <Label className='text-slate-500 font-normal'>
                      Class ID
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <User className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.classId}
                    </Label>
                  </div>

                  {/* Subject Code */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Subject Code
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Briefcase className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.subjectCode}
                    </Label>
                  </div>

                  {/* Subject Name */}
                  <div className='flex flex-col mt-4'>
                    <Label className='text-slate-500 font-normal'>
                      Subject Name
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Book className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.subjectName}
                    </Label>
                  </div>

                  {/* Year Term */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Year/Term
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <School className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.yearTerm}
                    </Label>
                  </div>

                  {/* Professor */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Professor
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <School className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.professor}
                    </Label>
                  </div>

                  {/* Section */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Section
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Backpack className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.section}
                    </Label>
                  </div>

                  {/* Class Type */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Class Type
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Presentation className='h-4 w-4 mr-[0.62rem]' />
                      {selectedClass?.classType}
                    </Label>
                  </div>

                  {/* Year Class Schedule */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Class Schedule
                    </Label>
                    {selectedClass?.scheduleInformation.map((_class, index) => {
                      return (
                        <Label className='flex mt-[0.44rem]' key={index}>
                          <CornerDownRight className='h-4 w-4 mr-[0.62rem]' />
                          {`${_class.startTime} - ${_class.endTime} ${_class.classDay} - ${_class.room} ${_class.meetingType}`}
                        </Label>
                      );
                    })}
                  </div>

                  {/* Start Date */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Start Date
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Calendar className='h-4 w-4 mr-[0.62rem]' />
                      {formatDateString(selectedClass?.startDate)}
                    </Label>
                  </div>

                  {/* End Date */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      End Date
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Calendar className='h-4 w-4 mr-[0.62rem]' />
                      {formatDateString(selectedClass?.endDate)}
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Slot Information */}
              <Card className='w-full mb-4'>
                <CardHeader>
                  <CardTitle>
                    Slot Information
                    <Separator className='mt-4' />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Maximum Slots / Alotted Slots */}
                  <div className='flex flex-col'>
                    <Label className='text-slate-500 font-normal'>
                      Alotted Slots
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      {selectedClass?.maximumSlots}
                    </Label>
                  </div>

                  {/* Remaining Slots */}
                  <div className='flex flex-col mt-4'>
                    <Label className='text-slate-500 font-normal'>
                      Alotted Slots
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      {selectedClass?.maximumSlots -
                        selectedClass?.enrolledSlots}
                    </Label>
                  </div>

                  {/* Enlisted */}
                  <div className='flex flex-col mt-4'>
                    <Label className='text-slate-500 font-normal'>
                      Enlisted Slots
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      {selectedClass?.enlistedSlots}
                    </Label>
                  </div>

                  {/* Enrolled */}
                  <div className='flex flex-col mt-4'>
                    <Label className='text-slate-500 font-normal'>
                      Enrolled Slots
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      {selectedClass?.enrolledSlots}
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* <InputFormField
                className=''
                form={editClassForm}
                title={'Faculty ID'}
                placeholder={'Faculty ID'}
                fieldName={'facultyId'}
              /> */}

              {/* <section className='w-full flex gap-2'> */}
              {/* First Name */}
              {/* <InputFormField
                  form={editClassForm}
                  title='First Name'
                  placeholder='Enter first name'
                  fieldName='firstName'
                /> */}
              {/* Middle Name */}
              {/* <InputFormField
                  form={editClassForm}
                  title='Middle Name'
                  placeholder='Enter middle name'
                  fieldName='middleName'
                />
              </section> */}

              {/* Last Name */}
              {/* <InputFormField
                form={editClassForm}
                title='Last Name'
                placeholder='Enter last name'
                fieldName='lastName'
              />

              <SelectFormField
                form={editClassForm}
                content={classStatus}
                title='Status'
                placeholder='Select'
                fieldName='status'
                customItem={CustomClassStatusBadges}
              />

              <section className='w-full flex gap-2'> */}
              {/* Start Date */}
              {/* <DateFormField
                  form={editClassForm}
                  title={'Start Date'}
                  placeholder={'Select'}
                  fieldName={'startDate'}
                /> */}

              {/* End Date */}
              {/* <DateFormField
                  form={editClassForm}
                  title={'End Date'}
                  placeholder={'Select'}
                  fieldName={'endDate'}
                /> */}
              {/* </section> */}
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button type='submit'>Close</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditClassDialogForm;
