import {
  collegeDepartments,
  collegePrograms,
} from '@/components/component/college/college-sections';
import DateFormField from '@/components/component/form/date-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import PhoneInputFormField from '@/components/component/form/phone-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  birthSex,
  block,
  civilStatus,
  entryAcadYear,
  genderIdentity,
  regCode,
  studentType,
  yearLevel,
} from '@/lib/constants/fake-data/add-student';
import { StudentSchema } from '@/lib/constants/schema/student';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-international-phone/style.css';

function AddStudentDialogForm() {
  const AddStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
    defaultValues: {
      studentId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      nameExtension: '',
      maidenName: '',
      birthDate: '',
      birthPlace: '',
      genderIdentity: '',
      birthSex: '',
      civilStatus: '',
      phoneNum: '',
      emailAddress: '',
      entryYear: '',
      program: '',
      studentType: '',
      block: '',
      college: '',
      regCode: '',
      yearLevel: '',
      scholarsticStatus: '',
      enrolled: '',
      streetAddress: '',
      province: '',
      zipCode: '',
    },
  });

  const [value, setValue] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className='w-4 h-4 mr-2' />
          Add Student
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[1350px] h-5/6 overflow-auto'>
        <DialogHeader>
          <DialogTitle className='font-bold text-2xl'>Add Student</DialogTitle>
        </DialogHeader>
        <Form {...AddStudentForm}>
          <ScrollArea className='h-50'>
            <div className='mt-5 '>
              <Label className='font-semibold text-xl'>Personal Details</Label>
            </div>
            {/* Student Number */}
            <div className='mt-5 '>
              <div className='w-[79.5rem]'>
                <InputFormField
                  form={AddStudentForm}
                  title='Student Number'
                  placeholder='202310016'
                  fieldName='studentId'
                  isOptional={true}
                  badge=<Badge variant='outline'>Auto-Generated</Badge>
                  disabled
                />
              </div>

              <div className='flex w-full gap-7 mt-7'>
                <div className='flex flex-row w-1/2'>
                  <div className='justify-between w-96'>
                    {/* First Name */}
                    <InputFormField
                      form={AddStudentForm}
                      title='First Name'
                      placeholder='Enter first name..'
                      fieldName='firstName'
                    />
                    <div className='mt-7' />
                    {/* Name Extension*/}
                    <InputFormField
                      form={AddStudentForm}
                      title='Name Extension'
                      placeholder='Enter name extension...'
                      fieldName='nameExtension'
                      isOptional={true}
                    />
                    <div className='mt-7' />
                    {/* Birth Sex */}
                    <SelectFormField
                      form={AddStudentForm}
                      content={birthSex}
                      title='Birth Sex'
                      placeholder='Select birth sex..'
                      fieldName='birthSex'
                    />
                    <div className='mt-7' />
                    {/* Civil Status */}
                    <SelectFormField
                      form={AddStudentForm}
                      title='Civil Status'
                      content={civilStatus}
                      placeholder='Select civil status..'
                      fieldName='civilStatus'
                    />
                  </div>
                </div>
                <div className='flex flex-row w-1/2'>
                  <div className='justify-between w-96'>
                    {/* Middle Name */}
                    <InputFormField
                      form={AddStudentForm}
                      title='Middle Name'
                      placeholder='Enter middle name...'
                      fieldName='middleName'
                    />
                    <div className='mt-7' />
                    {/* Maiden Name */}
                    <InputFormField
                      form={AddStudentForm}
                      title='Maiden Name'
                      placeholder='Enter maiden name...'
                      fieldName='maidenName'
                      className='flex-grow'
                    />
                    <div className='mt-7' />
                    {/* Gender Identity */}
                    <div className='mt-7' />
                    <SelectFormField
                      form={AddStudentForm}
                      content={genderIdentity}
                      title='Gender Identity'
                      placeholder='Select gender identity..'
                      fieldName='genderIdentity'
                    />
                    {/* Phone Number */}
                    <div className='mt-7' />
                    {/* Email Address */}
                    <InputFormField
                      form={AddStudentForm}
                      title='PLM Email'
                      placeholder='Enter email address..'
                      fieldName='emailAddress'
                    />
                  </div>
                </div>
                <div className='flex flex-row w-1/2'>
                  <div className='justify-between w-96'>
                    {/* Last Name */}
                    <InputFormField
                      form={AddStudentForm}
                      title='Last Name'
                      placeholder='Enter last name...'
                      fieldName='lastName'
                      className='flex-grow'
                    />

                    <div className='mt-7' />
                    {/* Birth Date */}
                    <DateFormField
                      form={AddStudentForm}
                      title='Birth Date'
                      placeholder='Select birth date..'
                      fieldName='birthDate'
                      isOptional={false}
                      className='flex-grow'
                    />

                    <div className='mt-7' />
                    {/* Birth Place */}
                    <InputFormField
                      form={AddStudentForm}
                      title='Birth Place'
                      placeholder='Enter birth place...'
                      fieldName='birthPlace'
                      className='flex-grow'
                    />

                    {/* Phone Number */}
                    <div className='mt-7' />
                    <PhoneInputFormField
                      form={AddStudentForm}
                      title='Phone Number'
                      placeholder='Enter phone number..'
                      fieldName='phoneNumber'
                      defaultCountry='ph'
                      type='tel'
                      value={value}
                      onChange={(value) => setValue(value)}
                      className='flex-1'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10 ' />
            <div className='flex flex-row space-x-2'>
              <Label className='font-semibold text-xl'>Student Terms</Label>
              <div className='space-x-1' />
              <Badge className='h-5 w-15 mt-1 font-extralight bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-300'>
                Semester
              </Badge>
              <Badge className='h-5 w-15 mt-1 font-extralight bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-300'>
                Academic Year
              </Badge>
            </div>
            <div className='flex w-full gap-7 mt-7'>
              <div className='flex flex-row w-1/2'>
                <div className='justify-between w-96'>
                  {/* Program */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={collegePrograms}
                    title='Program'
                    placeholder='Bachelor of Science in Computer Science'
                    fieldName='program'
                  />
                  <div className='mt-7' />
                  {/* Student Type */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={studentType}
                    title='Student Type'
                    placeholder='New'
                    fieldName='studentType'
                  />
                  <div className='mt-7' />
                  {/* Year and Level */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={yearLevel}
                    title=' Year Level '
                    placeholder='Select year level'
                    fieldName='yearLeve'
                  />
                </div>
              </div>
              <div className='flex flex-row w-1/2'>
                <div className='justify-between w-96'>
                  {/* College */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={collegeDepartments}
                    title='College'
                    placeholder='College of Engineering and Technology'
                    fieldName='college'
                  />
                  <div className='mt-7' />
                  {/* Registration Code */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={regCode}
                    title='Registration Code'
                    placeholder='Regular'
                    fieldName='regcode'
                  />
                  <div className='mt-7' />
                  {/* Block */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={block}
                    title='Block'
                    placeholder='Select block'
                    fieldName='block'
                  />
                </div>
              </div>
              <div className='flex flex-row w-1/2'>
                <div className='justify-between w-96'>
                  {/* Entry Acad Year */}
                  <SelectFormField
                    form={AddStudentForm}
                    content={entryAcadYear}
                    title='Entry Academic Year'
                    placeholder='2023'
                    fieldName='entryAcademicYear'
                  />
                  <div className='mt-7' />
                  {/* Scholarstic Status */}
                  <InputFormField
                    form={AddStudentForm}
                    title='Scholarstic Status'
                    placeholder='Paying'
                    fieldName='scholarsticStatus'
                  />
                </div>
              </div>
            </div>
            <div className='mt-10' />
            <Label className='font-semibold text-xl'>Current Address</Label>
            <div className='w-[60rem] gap-10 mt-7'>
              {/* Street Address */}
              <InputFormField
                form={AddStudentForm}
                title='Street Address'
                placeholder='Enter street address..'
                fieldName='streetAddress'
              />
              <div className='mt-7' />
              {/* Province Address+ */}
              <InputFormField
                form={AddStudentForm}
                title='Province Address'
                placeholder='Enter province address..'
                fieldName='provinceAddress'
              />
              <div className='mt-7' />
              <div className='flex flex-row gap-10'>
                {/* Zip Code */}
                <InputFormField
                  form={AddStudentForm}
                  title='Zip Code'
                  placeholder='Enter zip code..'
                  fieldName='zipCode'
                  className='w-72'
                />
                <PhoneInputFormField
                  form={AddStudentForm}
                  title='Phone Number'
                  placeholder='Enter phone number..'
                  fieldName='phoneNumber'
                  defaultCountry='ph'
                  type='tel'
                  value={value}
                  className='w-72'
                  onChange={(value) => setValue(value)}
                />
              </div>
            </div>
            <div className='mt-10' />
            <Label className='font-semibold text-xl'>Permanent Address</Label>
            <div className='w-[60rem] gap-10 mt-7'>
              {/* Street Address */}
              <InputFormField
                form={AddStudentForm}
                title='Street Address'
                placeholder='Enter street address..'
                fieldName='streetAddress'
              />
              <div className='mt-7' />
              {/* Province Address+ */}
              <InputFormField
                form={AddStudentForm}
                title='Province Address'
                placeholder='Enter province address..'
                fieldName='provinceAddress'
              />
            </div>
            <div className='w-full gap-10 mt-7'>
              <div className='flex flex-row gap-10'>
                <div className='justify-between'>
                  {/* Zip Code */}
                  <InputFormField
                    form={AddStudentForm}
                    title='Zip Code'
                    placeholder='Enter zip code..'
                    fieldName='zipCode'
                    className='w-72'
                  />
                </div>
                <PhoneInputFormField
                  form={AddStudentForm}
                  title='Phone Number'
                  placeholder='Enter phone number..'
                  fieldName='phoneNumber'
                  defaultCountry='ph'
                  type='tel'
                  value={value}
                  className='w-72'
                  onChange={(value) => setValue(value)}
                />
              </div>
            </div>
            <div className='mt-12' />
            <div className='items-top flex space-x-4'>
              <Checkbox id='confirm' />
              <div className='grid gap-1 leading-none'>
                <label
                  htmlFor='confirm'
                  className='text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Are you sure?
                </label>
                <div className='grid gap-1 leading-none'>
                  <p className='text-sm text-muted-foreground w-72'>
                    Double check if all inputs are correct to make sure there
                    are no input errors.
                  </p>
                </div>
                <DialogFooter className='mt-4 font-semibold'>
                  <Button type='submit' className='w-80'>
                    Add Student
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </ScrollArea>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
export default AddStudentDialogForm;
