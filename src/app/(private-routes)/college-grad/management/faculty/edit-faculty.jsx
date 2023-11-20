import DateFormField from '@/components/component/form/date-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { sex } from '@/lib/constants/fake-data/grad-application-form';
import { FacultySchema } from '@/lib/constants/schema/college-grad/edit-faculty';
import { zodResolver } from '@hookform/resolvers/zod';
import { Briefcase, CheckCircle, School, User, View } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function EditFacultyDialogForm({ disabled, selectedFaculty }) {
  const editUserForm = useForm({
    resolver: zodResolver(FacultySchema),
  });

  useEffect(() => {
    if (selectedFaculty) {
      Object.keys(selectedFaculty).forEach((key) => {
        editUserForm.setValue(key, selectedFaculty[key]);
      });
    }
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <View className='w-4 h-4 mr-2' />
          View
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Faculty Details</AlertDialogTitle>
          <AlertDialogDescription>
            Edit a Faculty to the system
          </AlertDialogDescription>
        </AlertDialogHeader>

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
            <AlertDialogFooter className='w-full flex justify-end mt-4'>
              <AlertDialogCancel asChild>
                <Button variant='outline' onClick={() => editUserForm.reset()}>
                  Cancel
                </Button>
              </AlertDialogCancel>

              <Button type='submit'>Save Changes</Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditFacultyDialogForm;
