import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import DateFormField from '@/components/component/form/date-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  aySem,
  birthSex,
  block,
  civilStatus,
  departments,
  entryAcadYear,
  genderIdentity,
  programs,
  regCode,
  studentType,
  yearLevel,
} from '@/lib/constants/fake-data/add-student';
import { StudentSchema } from '@/lib/constants/schema/student';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function UpdateStudentDialogForm({ selectedStudent }) {
  const updateStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
  });

  updateStudentForm.watch();

  const studentTypeState = updateStudentForm.watch('studentType');

  useEffect(() => {
    if (selectedStudent) {
      Object.keys(selectedStudent).forEach((key) => {
        updateStudentForm.setValue(key, selectedStudent[key]);
      });
    }
  }, [selectedStudent, updateStudentForm]);

  return (
    <DialogContent className='md:max-w-[1350px] h-5/6 overflow-auto'>
      <DialogHeader>
        <DialogTitle className='font-bold text-2xl'>Student Record</DialogTitle>
        <DialogDescription>Update the student terms.</DialogDescription>
      </DialogHeader>
      <Form {...updateStudentForm}>
        <ScrollArea className='h-50'>
          <div className='mt-5 '>
            <Label className='font-semibold text-xl'>Personal Details</Label>
          </div>
          {/* Student Number */}
          <div className='mt-5 '>
            <div className='w-[79.5rem]'>
              <InputFormField
                form={updateStudentForm}
                title='Student Number'
                placeholder='Student Number'
                fieldName='studentNo'
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
                    form={updateStudentForm}
                    title='First Name'
                    placeholder='First Name'
                    fieldName='firstName'
                    disabled
                  />
                  <div className='mt-7' />
                  {/* Name Extension*/}
                  <InputFormField
                    form={updateStudentForm}
                    title='Name Extension'
                    description='Enter N/A if not applicable.'
                    placeholder='Name Extension'
                    fieldName='nameExtension'
                    disabled
                  />
                  <div className='mt-5' />
                  {/* Birth Sex */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Birth Sex'
                    content={birthSex}
                    placeholder='Birth Sex'
                    fieldName='birthSex'
                    disabled
                  />
                  <div className='mt-7' />
                  {/* Civil Status */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Civil Status'
                    content={civilStatus}
                    placeholder='Civil Status'
                    fieldName='civilStatus'
                    disabled
                  />
                </div>
              </div>
              <div className='flex flex-row w-1/2'>
                <div className='justify-between w-96'>
                  {/* Middle Name */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Middle Name'
                    fieldName='middleName'
                    placeholder='Middle Name'
                    disabled
                  />
                  <div className='mt-7' />
                  {/* Maiden Name */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Maiden Name'
                    className='flex-grow'
                    fieldName='maidenName'
                    placeholder='Maiden Name'
                    disabled
                  />
                  <div className='mt-12' />
                  {/* Gender Identity */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Gender Identity'
                    content={genderIdentity}
                    fieldName='genderIdentity'
                    placeholder='Gender Identity'
                    disabled
                  />
                  <div className='mt-7' />
                  {/* Email Address */}
                  <InputFormField
                    form={updateStudentForm}
                    title='PLM Email'
                    fieldName='emailAddress'
                    placeholder='PLM Email'
                    disabled
                  />
                </div>
              </div>
              <div className='flex flex-row w-1/2'>
                <div className='justify-between w-96'>
                  {/* Last Name */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Last Name'
                    className='flex-grow'
                    fieldName='lastName'
                    placeholder='Last Name'
                    disabled
                  />

                  <div className='mt-7' />
                  {/* Birth Date */}
                  <DateFormField
                    form={updateStudentForm}
                    title={'Birth Date'}
                    fieldName={'birthDate'}
                    placeholder={'Birth Date'}
                    isOptional={false}
                    className='flex-grow'
                    disabled
                  />

                  <div className='mt-9' />
                  {/* Birth Place */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Birth Place'
                    fieldName='birthPlace'
                    placeholder='Birth Place'
                    className='flex-grow'
                    disabled
                  />
                  <div className='mt-8' />
                  {/*Phone Number */}
                  <InputFormField
                    form={updateStudentForm}
                    title='Phone Number'
                    fieldName='phoneNum'
                    placeholder='Phone Number'
                    className='w-72'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 ' />
          <div className='flex flex-row space-x-2'>
            <Label className='font-semibold text-xl'>Student Terms</Label>
            <div className='space-x-1' />
            <Badge className='h-5 w-15 mt-1 font-light bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-500'>
              Semester
            </Badge>
            <Badge className='h-5 w-15 mt-1 font-light bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-500'>
              Academic Year
            </Badge>
          </div>
          <div className='mt-5 ' />
          {/* AY-Sem */}
          <div className='w-[79.5rem]'>
            <SelectFormField
              form={updateStudentForm}
              title='AY-Sem'
              content={aySem}
              placeholder='AY-Sem'
              fieldName='aySem'
              description='Update the current academic year and semester to endorse the student'
            />
          </div>
          <div className='flex w-full gap-7 mt-7'>
            <div className='flex flex-row w-1/2'>
              <div className='justify-between w-96'>
                {/* Program */}
                <SelectFormField
                  form={updateStudentForm}
                  content={programs}
                  title='Program'
                  fieldName='program'
                  placeholder='Program'
                  disabled={
                    studentTypeState === 'Old' ||
                    studentTypeState === 'New' ||
                    studentTypeState === 'Returnee' ||
                    studentTypeState === 'Transferee'
                  }
                />
                {/* Student Type */}
                <div className='mt-7' />
                <SelectFormField
                  form={updateStudentForm}
                  content={studentType}
                  title='Student Type'
                  fieldName='studentType'
                  placeholder='Student Type'
                />
                {/* Year and Level */}
                <div className='mt-7' />
                <SelectFormField
                  form={updateStudentForm}
                  content={yearLevel}
                  title='Year Level'
                  fieldName='yearLevel'
                  placeholder='Year Level'
                />
              </div>
            </div>
            <div className='flex flex-row w-1/2'>
              <div className='justify-between w-96'>
                {/* College */}
                <SelectFormField
                  form={updateStudentForm}
                  content={departments}
                  title='College'
                  fieldName='college'
                  placeholder='College'
                  disabled={
                    studentTypeState === 'Old' ||
                    studentTypeState === 'New' ||
                    studentTypeState === 'Returnee' ||
                    studentTypeState === 'Transferee'
                  }
                />
                <div className='mt-7' />
                {/* Registration Code */}
                <SelectFormField
                  form={updateStudentForm}
                  content={regCode}
                  title='Registration Code'
                  fieldName='regCode'
                  placeholder='Registration Code'
                />
                <div className='mt-7' />
                {/* Block */}
                <SelectFormField
                  form={updateStudentForm}
                  content={block}
                  title='Block'
                  fieldName='block'
                  placeholder='Block'
                  isOptional={true}
                />
              </div>
            </div>
            <div className='flex flex-row w-1/2'>
              <div className='justify-between w-96'>
                {/* Entry Acad Year */}
                <SelectFormField
                  form={updateStudentForm}
                  content={entryAcadYear}
                  title='Entry Academic Year'
                  fieldName='entryAcadYear'
                  placeholder='Entry Academic Year'
                  disabled
                />
                <div className='mt-7' />
                {/* Scholastic Status */}
                <InputFormField
                  form={updateStudentForm}
                  title='Scholastic Status'
                  fieldName='scholasticStatus'
                  placeholder='Scholastic Status'
                  disabled
                />
                <div className='mt-7' />
                <Label>
                  Are they enrolled?
                  <span
                    className='text-red-500 ml-1'
                    data-testid='required-asterisk'
                  >
                    *
                  </span>
                </Label>
                <div className='mt-2' />
                <RadioGroup defaultValue='Yes'>
                  <div className='flex flex-row'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='yes' id='option1' />
                      <Label htmlFor='option1'>Yes</Label>
                    </div>
                    <div className='ml-5' />
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='no' id='option2' />
                      <Label htmlFor='option2'>No</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className='mt-10' />
          <Label className='font-semibold text-xl'>Current Address</Label>
          <div className='mt-5' />
          <div className='w-[60rem] gap-10 mt-7'>
            {/* Street Address */}
            <InputFormField
              form={updateStudentForm}
              title='Street Address'
              fieldName='cstreetAddress'
              placeholder='Street Address'
            />
            <div className='mt-7' />
            {/* Province Address+ */}
            <InputFormField
              form={updateStudentForm}
              title='Province Address'
              fieldName='cprovince'
              placeholder='Province Address'
            />
            <div className='mt-7' />
            <div className='flex flex-row gap-10'>
              {/* Zip Code */}
              <InputFormField
                form={updateStudentForm}
                title='Zip Code'
                fieldName='czipCode'
                placeholder='Zip Code'
                className='w-72'
              />
              {/*Phone Number */}
              <InputFormField
                form={updateStudentForm}
                title='Phone Number'
                fieldName='cphoneNum'
                placeholder='Phone Number'
                className='w-72'
              />
            </div>
          </div>
          <div className='mt-10' />
          <Label className='font-semibold text-xl'>Permanent Address</Label>
          <div className='mt-5' />
          <div className='mt-5' />
          <div className='items-top flex space-x-2'>
            <Checkbox id='address' />
            <div className='grid gap-1 leading-none'>
              <label
                htmlFor='confirm'
                className='text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Check if the permanent address is the same as the current
                address
              </label>
            </div>
          </div>
          <div className='w-[60rem] gap-10 mt-7'>
            {/* Street Address */}
            <InputFormField
              form={updateStudentForm}
              title='Street Address'
              fieldName='pstreetAddress'
              placeholder='Street Address'
            />
            <div className='mt-7' />
            {/* Province Address+ */}
            <InputFormField
              form={updateStudentForm}
              title='Province Address'
              fieldName='pprovince'
              placeholder='Province Address'
            />
          </div>
          <div className='w-full gap-10 mt-7'>
            <div className='flex flex-row gap-10'>
              <div className='justify-between'>
                {/* Zip Code */}
                <InputFormField
                  form={updateStudentForm}
                  title='Zip Code'
                  fieldName='pzipCode'
                  placeholder='Zip Code'
                  className='w-72'
                />
              </div>
              {/*Phone Number */}
              <InputFormField
                form={updateStudentForm}
                title='Phone Number'
                fieldName='pphoneNum'
                placeholder='Phone Number'
                className='w-72'
              />
            </div>
          </div>
          <div className='mt-12' />
          <div className='items-top flex space-x-4'>
            <CheckBoxFormField
              form={updateStudentForm}
              title={'Are you sure?'}
              description={
                <div className='flex flex-col'>
                  <div>Double check if all inputs are correct</div>
                  <div>to ensure there are no input errors.</div>
                </div>
              }
              fieldName={'isSure'}
            />
          </div>
          <div className='flex justify-start ml-7 mt-5'>
            <Button
              type='submit'
              className='w-72'
              disabled={!updateStudentForm.getValues().isSure}
            >
              Update Record
            </Button>
          </div>
        </ScrollArea>
      </Form>
    </DialogContent>
  );
}
export default UpdateStudentDialogForm;
