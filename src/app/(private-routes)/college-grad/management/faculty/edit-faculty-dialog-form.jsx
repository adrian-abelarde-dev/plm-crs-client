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
import { sex } from '@/lib/constants/fake-data/grad-application-form';
import { FacultySchema } from '@/lib/constants/schema/edit-faculty';
import { zodResolver } from '@hookform/resolvers/zod';
import { Briefcase, CheckCircle, School, User, View } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function EditFacultyDialogForm({ disabled, selectedFaculty }) {
  const editUserForm = useForm({
    resolver: zodResolver(FacultySchema),
  });

  console.log(selectedFaculty);

  useEffect(() => {
    editUserForm.setValue('facultyId', selectedFaculty?.facultyId);
    editUserForm.setValue('firstName', selectedFaculty?.firstName);
    editUserForm.setValue('middleName', selectedFaculty?.middleName);
    editUserForm.setValue('lastName', selectedFaculty?.lastName);
    editUserForm.setValue('status', selectedFaculty?.status);
    editUserForm.setValue('suffix', selectedFaculty?.suffix);
    editUserForm.setValue('maidenName', selectedFaculty?.maidenName);
    editUserForm.setValue('email', selectedFaculty?.email);
    editUserForm.setValue('contactNumber', selectedFaculty?.contactNumber);
    editUserForm.setValue('sex', selectedFaculty?.sex);
    editUserForm.setValue('address', selectedFaculty?.address);
    editUserForm.setValue('birthDate', selectedFaculty?.birthDate);
  }, [selectedFaculty, editUserForm]);

  const facultyStatus = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Pending to Assign', value: 'Pending to Assign' },
  ];

  function CustomFacultyStatusBadges({ value }) {
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
      case 'Pending to Assign':
        return (
          <Badge
            variant='ghost'
            className={'bg-[#fff9e1] text-[#fec141] border-[#fec141]'}
          >
            {value}
          </Badge>
        );
      case 'Inactive':
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

  console.log(selectedFaculty);

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
          <DialogDescription>Edit a Faculty to the system</DialogDescription>
        </DialogHeader>

        <Form {...editUserForm}>
          <form
            onSubmit={editUserForm.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <ScrollArea className='h-96 w-full'>
              {/* Card */}
              <Card className='w-full mb-4'>
                <CardHeader>
                  <CardTitle>
                    Accounts
                    <Separator className='mt-4' />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Username */}
                  <div className='flex flex-col'>
                    <Label className='text-slate-500 font-normal'>
                      Username
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <User className='h-4 w-4 mr-[0.62rem]' />
                      {selectedFaculty?.username}
                    </Label>
                  </div>

                  {/* Designation */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      Designation
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <School className='h-4 w-4 mr-[0.62rem]' />
                      {selectedFaculty?.designation}
                    </Label>
                  </div>

                  {/* College */}
                  <div className='flex flex-col mt-5'>
                    <Label className='text-slate-500 font-normal'>
                      College
                    </Label>
                    <Label className='flex mt-[0.44rem]'>
                      <Briefcase className='h-4 w-4 mr-[0.62rem]' />
                      {selectedFaculty?.college}
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <InputFormField
                className=''
                form={editUserForm}
                title={'Faculty ID'}
                placeholder={'Faculty ID'}
                fieldName={'facultyId'}
              />

              <section className='w-full flex gap-2'>
                {/* First Name */}
                <InputFormField
                  form={editUserForm}
                  title='First Name'
                  placeholder='Enter first name'
                  fieldName='firstName'
                />
                {/* Middle Name */}
                <InputFormField
                  form={editUserForm}
                  title='Middle Name'
                  placeholder='Enter middle name'
                  fieldName='middleName'
                />
              </section>

              {/* Last Name */}
              <InputFormField
                form={editUserForm}
                title='Last Name'
                placeholder='Enter last name'
                fieldName='lastName'
              />

              <SelectFormField
                form={editUserForm}
                content={facultyStatus}
                title='Status'
                placeholder='Select'
                fieldName='status'
                customItem={CustomFacultyStatusBadges}
              />

              <InputFormField
                form={editUserForm}
                title='Suffix'
                placeholder='(None)'
                fieldName='suffix'
                isOptional={true}
              />

              <SelectFormField
                form={editUserForm}
                content={sex}
                title={'Sex'}
                placeholder={'Select'}
                fieldName='sex'
              />

              <InputFormField
                form={editUserForm}
                title='Maiden Name'
                placeholder='(None)'
                fieldName='maidenName'
                isOptional={true}
              />

              <InputFormField
                form={editUserForm}
                title='Email Address'
                placeholder='Email Address'
                fieldName='email'
              />

              <InputFormField
                form={editUserForm}
                title='Contact Number'
                placeholder='Contact Number'
                fieldName='contactNumber'
              />

              <InputFormField
                form={editUserForm}
                title='Address'
                placeholder='Address'
                fieldName='address'
              />

              <DateFormField
                form={editUserForm}
                title={'Birth Date'}
                placeholder={'Select date'}
                fieldName={'birthDate'}
              />
            </ScrollArea>
            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose asChild>
                <Button variant='outline' onClick={() => editUserForm.reset()}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit'>Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditFacultyDialogForm;
